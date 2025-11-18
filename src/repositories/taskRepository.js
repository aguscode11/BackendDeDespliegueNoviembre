import Task from '../models/Task.model.js';

export const createTask = async (taskData) => {
  try {
    const task = new Task(taskData);
    return await task.save();
  } catch (error) {
    throw new Error(`Error creating task: ${error.message}`);
  }
};

export const getTasksByUser = async (userId) => {
  try {
    const tasks = await Task.find({ user: userId }).sort({ createdAt: -1 });
    return tasks;
  } catch (error) {
    throw new Error(`Error getting tasks: ${error.message}`);
  }
};

export const getTaskById = async (taskId) => {
  try {
    const task = await Task.findById(taskId);
    if (!task) {
      throw new Error('Task not found');
    }
    return task;
  } catch (error) {
    throw new Error(`Error getting task: ${error.message}`);
  }
};

export const updateTask = async (taskId, updateData) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedTask) {
      throw new Error('Task not found');
    }

    return updatedTask;
  } catch (error) {
    throw new Error(`Error updating task: ${error.message}`);
  }
};

export const deleteTask = async (taskId) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(taskId);

    if (!deletedTask) {
      throw new Error('Task not found');
    }

    return deletedTask;
  } catch (error) {
    throw new Error(`Error deleting task: ${error.message}`);
  }
};