import React from 'react';
import { format, differenceInDays } from 'date-fns';
import { PiDotsThreeBold } from "react-icons/pi";


function TaskItem({ task }) {
    // Function to format the deadline
    const formatDate = (dateString) => {
        return format(new Date(dateString), 'MMMM dd, yyyy');
    };

    // Function to determine priority based on deadline
    const getPriority = (deadline) => {
        const today = new Date();
        const deadlineDate = new Date(deadline);
        const daysRemaining = differenceInDays(deadlineDate, today);

        if (daysRemaining < 0) {
            return 'Completed';
        } else if (daysRemaining <= 3) {
            return 'High';
        } else {
            return 'Low';
        }
    };

    // Determine priority and colors
    const priority = task.status === 'Done' ? 'Completed' : getPriority(task.deadline);
    const priorityColor = priority === 'Completed' 
        ? 'green' 
        : (priority === 'High' ? 'red' : 'orange');
    const priorityBgColor = priority === 'Completed' 
        ? 'bg-green-100' 
        : (priority === 'High' ? 'bg-red-100' : 'bg-orange-100');
    const priorityTextColor = priority === 'Completed' 
        ? 'text-green-500' 
        : (priority === 'High' ? 'text-red-500' : 'text-orange-500');

    return (
        <div className=" w-11/12 bg-white border border-gray-200 rounded-lg shadow-md p-4">
            <div className="flex justify-between items-center">
                <span className={`text-xs font-medium px-2 py-1 rounded ${priorityBgColor} ${priorityTextColor}`}>
                    {priority}
                </span>
                <PiDotsThreeBold />
            </div>
            <h3 className="text-lg font-semibold mt-2">{task.title}</h3>
            <p className="text-gray-500 mt-1">{task.description}</p>
            <div className="mt-3">
                <span className="font-semibold">Deadline:</span>
                <span className="text-gray-600 ml-1">{formatDate(task.deadline)}</span>
            </div>
        </div>
    );
}

export default TaskItem;
