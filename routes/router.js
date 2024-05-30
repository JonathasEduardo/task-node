const express = require('express');
const router = express.Router();
const TaskController = require("../controllers/tasksController");

router.post('/tasks', TaskController.createTask);
router.get('/tasks', TaskController.getAll);
router.put('/tasks/:id', TaskController.updateTask);
router.delete('/tasks/:id', TaskController.deleteTask);

module.exports = router;
