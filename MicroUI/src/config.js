// src/config.js

const config = {
    GET_TASKS_API_BASE_URL: process.env.REACT_APP_GET_TASKS_API_BASE_URL || 'http://gettask.xrocketx.info/',
    DELETE_TASK_API_BASE_URL: process.env.REACT_APP_DELETE_TASK_API_BASE_URL || 'http://deletetask.xrocketx.info/',
    CREATE_TASK_API_BASE_URL: process.env.REACT_APP_CREATE_TASK_API_BASE_URL || 'http://addtask.xrocketx.info/',
  };
  
  export default config;
  