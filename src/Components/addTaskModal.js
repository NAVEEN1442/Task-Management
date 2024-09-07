import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCircle } from "react-icons/fa6";
import { createTask } from "../services/operations/taskAPI";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTasksData } from "../slices/taskSlice";

export default function AddTaskModal({ modalData, onClose }) {
  // State to handle task data
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    deadline: "", // State for deadline
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // State to control modal visibility
  const [showDeadlineModal, setShowDeadlineModal] = useState(false);

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskData({
      ...taskData,
      [name]: value,
    });
  };

  // Function to handle task addition
  const handleAddTask = async () => {
    try {
      await dispatch(createTask(taskData)); // Dispatch action to add task
      // Optionally dispatch setTasksData if needed
      // dispatch(setTasksData(taskData));

      // Reload the page after adding the task
      
    } catch (error) {
      console.error("Failed to add task:", error);
    } finally {
      if (onClose) onClose(); // Close the modal
    }
  };

  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto">
      <div className="w-[333px] h-[504px] gap-[10px] bg-white rounded-lg border p-6">
        <div className="w-11/12 h-[458px] gap-[14px]">
          <div className="w-[293px] flex justify-between items-center h-[44px] border-y border-t-0 border-b-gray-500">
            <p className="w-[273px] flex items-center justify-start h-[30px] gap-[6px]">
              <span className="text-[#20E7F4]">
                <FaCircle />
              </span>{" "}
              <span className="font-bold">ADD TASK</span>
            </p>
            <p className="text-[27px] text-blue-700 rounded-[15px] p-[10px] gap-[10px]">+</p>
          </div>

          <form className="w-[293px] h-[400px] gap-[10px]">
            <div className="flex w-[261px] mt-12 h-[24px] mb-2 border-y border-black border-t-0 border-b-2 gap-[10px] justify-between items-center">
              <p>
                <input
                  name="title"
                  value={taskData.title}
                  onChange={handleInputChange}
                  placeholder="Task Title"
                  className="text-black w-[100%] h-[23px]"
                />
              </p>
              <BsThreeDotsVertical />
            </div>

            <p className="h-[300px] w-[100%]">
              <textarea
                name="description"
                value={taskData.description}
                onChange={handleInputChange}
                className="flex text-start h-[100%] w-[280px]"
                placeholder="Enter your task description"
              />
            </p>

            <div className="w-[261px] mt-6 h-[16px] flex justify-between items-center">
              <button
                type="button"
                className="text-[#5A5A5A] font-bold "
                onClick={() => setShowDeadlineModal(true)}
              >
                Deadline
              </button>

              <button
                type="button"
                className="text-[#5A5A5A] font-bold "
                onClick={handleAddTask}
              >
                 Add Task
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Deadline Modal */}
      {showDeadlineModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Set Deadline</h2>
            <input
              type="date"
              name="deadline"
              value={taskData.deadline}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
              onClick={() => setShowDeadlineModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
