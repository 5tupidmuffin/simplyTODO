const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    todo: {
        type: String, required: true
    },
    createdOn: {
        type: Number, default: Date.now
    },
    isDone: {
        type: Boolean, default: false
    }
}, { collection: 'tasks' })

const model = mongoose.model('TaskModel', TaskSchema);

module.exports = model;