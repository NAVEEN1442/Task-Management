import { apiConnector } from "../apiConnector";
import { task } from "../apis";
import { setTasksData } from "../../slices/taskSlice";
import { toast } from "react-hot-toast";

const {
  CREATE_TASK_API,
  FETCH_ALL_TASKS_API,
  FETCH_TASK_BY_ID_API,
  UPDATE_TASK,
  DELETE_TASK,
} = task;

// Error handling utility function
const handleError = (error, defaultMessage) => {
  const message = error?.response?.data?.message || defaultMessage;
  console.error("API Error:", message);
  toast.error(message);
};

// Create Task with error handling
export function createTask(taskData, navigate) {
  const toastId = toast.loading("Creating Task...");

  return async (dispatch) => {
    try {
      const { title, description, deadline } = taskData;

      const response = await apiConnector("POST", CREATE_TASK_API, {
        title,
        description,
        deadline,
      });

      if (!response.data.success) {
        throw new Error(response.data.message || "Failed to create task");
      }

      toast.success("Task Created Successfully");
      // Add navigation or additional logic after success if needed

    } catch (error) {
      handleError(error, "Error while adding your task");
    } finally {
      toast.dismiss(toastId);
    }
  };
}

// Fetch all tasks with error handling
export const getAllTask = () => {
  return async (dispatch) => {
    try {
      const response = await apiConnector("GET", FETCH_ALL_TASKS_API);

      if (!response?.data?.success) {
        throw new Error(response.data.message || "Failed to fetch tasks");
      }

      const tasks = response?.data?.tasks || [];
      dispatch(setTasksData(tasks)); // Dispatch tasks to the Redux store

    } catch (error) {
      handleError(error, "Failed to fetch your tasks");
    }
  };
};
