import * as taskRepository from '../repositories/taskRepository.js';

export const createTask = async (taskData) => {
  try {
    if (!taskData.title || taskData.title.trim() === '') {
      throw new Error('Se necesita un titulo para la tarea');
    }

    return await taskRepository.createTask(taskData);
  } catch (error) {
    throw new Error(`Service: ${error.message}`);
  }
};

export const editTask = async (id, data) => {
  return await taskRepository.editTask(id, data);
};


export const getTasksByUser = async (userId) => {
  try {
    return await taskRepository.getTasksByUser(userId);
  } catch (error) {
    throw new Error(`Service: ${error.message}`);
  }
};

export const updateTask = async (id, taskData) => {
  try {
    const updated = await taskRepository.updateTask(id, taskData); // ✔ ahora sí
    return updated;
  } catch (error) {
    throw new Error(`Service: Error actualizando tarea: ${error.message}`);
  }
};



export const deleteTask = async (taskId) => {
  try {
    return await taskRepository.deleteTask(taskId);
  } catch (error) {
    throw new Error(`Service: ${error.message}`);
  }
};
