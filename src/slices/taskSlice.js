import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    taskData: [], 
    taskLength: 0, 
    completedTasksCount: 0,
    ToDoTasksCount: 0, 
    OnProgressTasksCount: 0, 
    timeoutTasksCount :0, 
};

const taskSlice = createSlice({
    name: "task",
    initialState: initialState,
    reducers: {
        setTasksData(state, action) {
            const tasks = Array.isArray(action.payload) ? action.payload : [];
            console.log("in the slice tasks",tasks);
            state.taskData = tasks;
            state.taskLength = tasks.length; // Update total number of tasks
            

        },
        setTaskLength(state, action) {
            state.taskLength = action.payload; 
        },
        setCompletedTasksCount(state, action) {
            state.completedTasksCount = action.payload; 
            // console.log("in the state completed",state.completedTasksCount);
        },
        setToDoTasksCount(state, action) {
            state.ToDoTasksCount = action.payload; 
            // console.log("in the state completed",state.completedTasksCount);
        },
        setOnProgressTasksCount(state, action) {
            state.OnProgressTasksCount = action.payload; 
            // console.log("in the state completed",state.completedTasksCount);
        },
        setTimeoutTasksCount: (state, action) => { 
            state.timeoutTasksCount = action.payload;
        },
    },
});

export const { setTasksData, setTaskLength, setCompletedTasksCount,setToDoTasksCount,setOnProgressTasksCount,setTimeoutTasksCount } = taskSlice.actions;

export default taskSlice.reducer;
