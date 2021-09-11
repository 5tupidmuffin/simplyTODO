const axios = require('axios');

const api_uri = process.env.REACT_APP_API_URL;

const fetchTasks = async () => {
    console.log(api_uri);
    const response = await axios.get(api_uri).then(res => res.data);
    return response.data;
}

const addTask = async (task) => {
    await axios.post(api_uri + 'create', {
        todo: task
    })
}

const deleteTask = async (id) => {
    await axios.delete(api_uri + 'delete', {
        data: {
            _id: id
        }
    })
} 

const updateTask = async (id, task) => {
    await axios.put(api_uri + 'update', {
        _id: id,
        todo: task
    })
}

export {
    fetchTasks,
    addTask,
    updateTask,
    deleteTask
}