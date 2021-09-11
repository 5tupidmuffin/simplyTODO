const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
const Task = require('../models/tasks');

// READ
const getAlltasks = async (req, res) => {
    try {
        const tasks = await Task.find({  }).lean();
        return res.status(200).json({ status: "ok", data: tasks });
    } catch (error) {
        return res.status(500).json({ status: "error", error: error.message })
    }
    
}

// CREATE
const createTask = async (req, res) => {
    const { todo } = req.body;

    try {
        await Task.create({ todo });
        return res.status(201).json({ status: 'ok' });
    } catch (error) {
        return res.status(500).json({ status: 'error', error: error.message })
    }
}

// UPDATE
const updateTask = async (req, res) => {
    const { _id, todo, isDone } = req.body;

    try {
        await Task.updateOne({
            _id
        }, {
            $set: {
                todo,
                isDone
            }
        })
        return res.status(200).json({ status: "ok" });
    } catch (error) {
        return res.status(500).json({ status: "error", error: error.message });
    }
}

// DELETE
const deleteTask = async (req, res) => {
    const { _id } = req.body;

    try {
        await Task.deleteOne({ _id });
        return res.status(200).json({ status: "ok" });
    } catch (error) {
        return res.status(500).json({ status: "error", error: error.message });
    }
}


module.exports = {
    getAlltasks,
    createTask,
    updateTask,
    deleteTask
}