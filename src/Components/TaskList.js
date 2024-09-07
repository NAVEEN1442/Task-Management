import React, { useEffect, useState } from 'react';
import TaskItem from './TaskItem';
import { FaCircle } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTask } from '../services/operations/taskAPI';
import { setCompletedTasksCount, setOnProgressTasksCount, setTimeoutTasksCount, setToDoTasksCount, timeoutTasksCount } from '../slices/taskSlice';

function TaskList({ Heading, status ,count }) {
    const dispatch = useDispatch();
    const allTasks = useSelector((state) => state.task.taskData || []);
    const [filteredTasks, setFilteredTasks] = useState([]);
   

    
    // Fetch all tasks from API
    const fetchAllTasks = async () => {
        await dispatch(getAllTask());
    };

    // Helper function to determine the status based on deadline
    const categorizeTasks = (tasks) => {
        const now = new Date();
        const categorized = {
            "To Do": [],
            "On Progress": [],
            "Done": []
        };

        let Done_count = 0;
        let To_DO_count = 0;
        let Progress_count = 0;
        let expired_count = 0;

        tasks.forEach(task => {
            const deadline = new Date(task.deadline);
            const daysUntilDeadline = Math.ceil((deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

            if (daysUntilDeadline > 7) {
                categorized["To Do"].push(task);
                To_DO_count++;
            } else if (daysUntilDeadline > 0) {
                categorized["On Progress"].push(task);
                Progress_count++;
            }
            else if(daysUntilDeadline < -3){
               
                expired_count++;
            }
            else {
                categorized["Done"].push(task);
                Done_count++;
                
            }
            
        });

        dispatch(setCompletedTasksCount(Done_count))
        dispatch(setToDoTasksCount(To_DO_count))
        dispatch(setOnProgressTasksCount(Progress_count))
        dispatch(setTimeoutTasksCount(expired_count));

        return categorized;
    };

    useEffect(() => {
        fetchAllTasks();
    }, [dispatch]);

    useEffect(() => {
        if (Array.isArray(allTasks)) {
            const categorizedTasks = categorizeTasks(allTasks);
            setFilteredTasks(categorizedTasks[status] || []);
           
        }
    }, [allTasks, status]);

    return (
        <div className='flex overflow-y-auto overflow-hidden items-center flex-col w-[344px] h-[668px] rounded-[10px] gap-[9px] p-3 bg-[#ECEDEE]'>
            <div className='justify-center w-[100%] flex items-center gap-1'>
                <span style={{ color: Heading.color }}>
                    <FaCircle />
                </span>{" "}
                <span className="font-bold">{Heading.Heading}</span>
                <span className=' flex items-center justify-center rounded-3xl w-[22px] bg-[#E0E0E0] text-[#625F6D] ' >{count}</span>
            </div>
            
            <div style={{ background: Heading.color }} className='w-[314px] h-[3px]'></div>

            {filteredTasks.length > 0 ? (
                filteredTasks.map((task, index) => (
                    <TaskItem key={index} task={task} />
                ))
            ) : (
                <p>No tasks available</p>
            )}
        </div>
    );
}

export default TaskList;
