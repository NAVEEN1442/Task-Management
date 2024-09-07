import React, { useState } from 'react';
import expired from '../assets/expired.png';
import active from "../assets/active.png";
import completed from "../assets/completed.png";
import AddTaskModal from './addTaskModal';
import AddSuccessModal from './successModal';
import { useSelector } from 'react-redux';
function CategorySlider() {
  const [addTaskModal, setAddTaskModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  const taskLength = useSelector((state) => state.task.taskLength || 0);
  const completedTasksCount = useSelector((state) => state.task.completedTasksCount || 0);
  const timeoutTasksCount = useSelector((state) => state.task.timeoutTasksCount || 0);
  // Function to open the modal
  const openModal = () => {
    setAddTaskModal(true);
    setSuccessModal(false);
  };

  // Function to close the modal
  const closeModal = () => {
    setAddTaskModal(false);
    setSuccessModal(true);
  };

  return (
    <>
      <div className='flex flex-col gap-3 justify-center items-center'>
        <div className='shadow-md shadow-gray-400 bg-[#ECEDEE] w-[268px] flex flex-col h-[196px] rounded-[14px] p-3 gap-[10px]'>
          <img className='w-[46px] h-[46px]' src={expired} alt="Expired Tasks" />
          <p className='text-[#797979] font-bold'>Expired Tasks</p>
          <p className=' font-bold text-[25px] ' >{timeoutTasksCount}</p>
        </div>

        <div className='bg-[#ECEDEE] shadow-md shadow-gray-400 w-[268px] flex flex-col h-[196px] rounded-[14px] p-3 gap-[10px]'>
          <img className='w-[46px] h-[46px]' src={active} alt="Active Tasks" />
          <p className='text-[#797979] font-bold'>All Active Tasks</p>
          <p className=' font-bold text-[25px] ' >{taskLength - timeoutTasksCount}</p>
        </div>

        <div className='bg-[#ECEDEE] shadow-md shadow-gray-400 w-[268px] flex flex-col h-[196px] rounded-[14px] p-3 gap-[10px]'>
          <img className='w-[46px] h-[46px]' src={completed} alt="Completed Tasks" />
          <p className='text-[#797979] font-bold'>Completed Tasks</p>
          <p className=' font-bold text-[25px] ' >{completedTasksCount}/{taskLength-timeoutTasksCount}</p>
        </div>

        <div 
          onClick={openModal}
          className='bg-[#0D062D] flex justify-items-center text-white text-[12px] w-[268px] h-[48px] rounded-[19px] p-3 gap-[6px]'
        >
          <button className='w-[100%] h-[100%]'>+ Add Task</button>
        </div>
      </div>

      {/* Conditionally render the modal */}
      {addTaskModal && <AddTaskModal onClose={closeModal} />}
      {successModal && <AddSuccessModal onClose={closeModal} />}
    </>
  );
}

export default CategorySlider;
