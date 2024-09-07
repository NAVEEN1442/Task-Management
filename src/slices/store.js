import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';  // Combine your slices here

// Configure store with thunk middleware
const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk], // Adding middleware for handling async actions
});

export default store;
