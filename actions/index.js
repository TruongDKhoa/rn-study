import { ADD_NEW_TASK, TOGGLE_ONE_TASK } from './actionTypes';
let newTaskId = 0;

// Action: Add new task
export const addNewTask = (inputTaskName) => {
    console.log('2-Actions: Return type and maybe attach some data to Reducer => return value will be dispatch to Reducers');

    return {
        type: ADD_NEW_TASK,
        taskId: newTaskId++,
        taskName: inputTaskName
    }
}

// Action: Toggle task
export const toggleTask = (taskId) => {
    return {
        type: TOGGLE_ONE_TASK,
        taskId: taskId
    }
}