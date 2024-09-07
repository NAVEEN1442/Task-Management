import React from 'react'
import TaskList from './TaskList'
import { useSelector } from 'react-redux'

function Tasks() {
    const ToDo = {
        color:"#800080",
        Heading:"To Do"
    }
    const OnProgress = {
        color:"#FFA500",
        Heading:"On Progress"
    }
    const Done = {
        color:"#8BC48A",
        Heading:"Done"
    }

    const completedTasksCount = useSelector((state) => state.task.completedTasksCount || 0);
    const ToDoTasksCount = useSelector((state) => state.task.ToDoTasksCount || 0);
    const OnProgressTasksCount = useSelector((state) => state.task.OnProgressTasksCount || 0);

    return (
        <div className='flex gap-[54px]'>
            <TaskList Heading={ToDo} count={ToDoTasksCount} status="To Do" />
            <TaskList Heading={OnProgress} count={OnProgressTasksCount} status="On Progress" />
            <TaskList Heading={Done} count={completedTasksCount} status="Done" />
        </div>
    )
}

export default Tasks
