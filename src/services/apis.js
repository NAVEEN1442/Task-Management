const BASE_URL = process.env.REACT_APP_BASE_URL;

// AUTH ENDPOINTS
export const task = {
  CREATE_TASK_API : BASE_URL + "/tasks",
  FETCH_ALL_TASKS_API : BASE_URL + "/tasks",
  FETCH_TASK_BY_ID_API : BASE_URL + "/tasks/:id",
  UPDATE_TASK : BASE_URL + "/tasks/:id",
  DELETE_TASK : BASE_URL + "/tasks/:id",
}
