const express = require('express');
const router = express.Router();

const {
    getAlltasks,
    createTask,
    updateTask,
    deleteTask
} = require('../controllers/tasks');


router.get('/', getAlltasks);           // READ
router.post('/create', createTask);     // CREATE
router.put('/update', updateTask);      // UPDATE
router.delete('/delete', deleteTask);   // DELETE

module.exports = router;