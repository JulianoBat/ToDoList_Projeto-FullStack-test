const tasksModel = require("../models/taskModel");

const getAll = async (_req, res) => {
  const tasks = await tasksModel.getAll();

  return res.status(200).json(tasks);
};

const createTask = async (req, res) => {
  const createdTasks = await tasksModel.createTask(req.body);

  return res.status(201).json(createdTasks);
};

module.exports = {
  getAll,
  createTask,
};
