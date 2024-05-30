const { where } = require("sequelize");
const { Task } = require("../models");

const createTask = async (name, description) => {
  const newTask = await Task.create({ name, description });
  return newTask;
};
const getAll = async () => {
  const tasks = await Task.findAll();

  return tasks;
};

const updateTask = async (id, name, description) => {
  const [updatedTask] = await Task.update(
    { name, description },
    { where: { id } }
  );
  console.log(updatedTask);
  return updatedTask;
};

const deleteTask = async (id) => {
  const task = await Task.destroy({ where: { id } });

  console.log(task);
  return task;
};

module.exports = {
  getAll,
  createTask,
  updateTask,
  deleteTask,
};
