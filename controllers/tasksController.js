const TaskService = require("../service/taskService");
const { createTaskSchema } = require("../validator/create.validation");
const { putTaskSchema } = require("../validator/put.validation");

const createTask = async (req, res) => {
  try {
    const taskVerified = createTaskSchema.parse(req.body);
    const { name, description } = taskVerified;
    const newTask = await TaskService.createTask(name, description);
    return res.status(200).json(newTask);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const getAll = async (_req, res) => {
  try {
    const tasks = await TaskService.getAll();
    return res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "An error has occurred" });
  }
};

const updateTask = async (req, res) => {
  try {
    const taskVerified = putTaskSchema.parse(req.body);
    const { name, description } = taskVerified;
    const { id } = req.params;
    const updatedTask = await TaskService.updateTask(id, name, description);

    if (!updatedTask)
      return res.status(404).json({ message: "Task not found" });

    return res.status(200).json({ message: "Task updated successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "An error has occurred" });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await TaskService.deleteTask(id);
    return res.status(200).json({ message: "Task deleted successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "An error has occurred" });
  }
};

module.exports = {
  getAll,
  createTask,
  updateTask,
  deleteTask,
};
