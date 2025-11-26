import Task from '../models/Task.model.js';

export const createTask = async (taskData) => {
  try {
    const task = new Task(taskData);
    return await task.save();
  } catch (error) {
    throw new Error(`Error creando tarea: ${error.message}`);
  }
};

export const getTasksByUser = async (userId) => {
  try {
    const tasks = await Task.find({ user: userId }).sort({ 
      dueDate: 1,           // 1 — más cercana primero
      priority: -1,         // -1 — alto primero
      createdAt: 1          // 1 — primero las más viejas
    });

    return tasks;
  } catch (error) {
    throw new Error(`Error obteniendo tareas: ${error.message}`);
  }
};

export const editTask = async (id, data) => {
  return await Task.findByIdAndUpdate(id, data, { new: true });
};



export const getTaskById = async (taskId) => {
  try {
    const task = await Task.findById(taskId);
    if (!task) {
      throw new Error('Tarea no encontrada');
    }
    return task;
  } catch (error) {
    throw new Error(`Error obteniendo tarea: ${error.message}`);
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
      throw new Error('Tarea no encontrada');
    }

    return updatedTask;
  } catch (error) {
    throw new Error(`Error actualizando tarea: ${error.message}`);
  }
};

export const deleteTask = async (taskId) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(taskId);

    if (!deletedTask) {
      throw new Error('Tarea no encontrada');
    }

    return deletedTask;
  } catch (error) {
    throw new Error(`Error eliminando tarea: ${error.message}`);
  }
};