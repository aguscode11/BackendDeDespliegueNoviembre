import * as taskService from '../services/taskService.js';

export const createTask = async (req, res, next) => {
  try {
    const { title, description, dueDate, priority } = req.body;

    let normalizedDueDate = null;

    if (dueDate) {
      normalizedDueDate = new Date(dueDate + "T23:59:59.999");
    }

    const taskData = {
      title,
      description,
      dueDate: normalizedDueDate, 
      priority,
      user: req.user.id
    };

    const task = await taskService.createTask(taskData);

    res.status(201).json({
      success: true,
      data: task
    });

  } catch (error) {
    next(error);
  }
};

export const getUserTasks = async (req, res, next) => {
  try {
    const tasks = await taskService.getTasksByUser(req.user.id);

    res.json({
      success: true,
      data: tasks
    });

  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const updatedTask = await taskService.updateTask(req.params.id, req.body);

    res.json({
      success: true,
      data: updatedTask
    });

  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    await taskService.deleteTask(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};