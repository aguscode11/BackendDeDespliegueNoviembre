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
    const tasks = await Task.find({ user: userId })
      .populate("categoryId", "name color")   // <--- AQUI EL POPULATE
      .sort({
        dueDate: 1,
        priority: -1,
        createdAt: 1
      });

    return tasks;
  } catch (error) {
    throw new Error(`Error obteniendo tareas: ${error.message}`);
  }
};


export const editTask = async (id, data) => {
  return await Task.findByIdAndUpdate(id, data, {
    new: true
  }).populate("categoryId", "name color");
};





export const getTaskById = async (taskId) => {
  try {
    const task = await Task.findById(taskId)
      .populate("categoryId", "name color");

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
  
    if (!updateData.categoryId || updateData.categoryId === "") {
      updateData.categoryId = null;
    }

    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      updateData,
      { new: true, runValidators: true }
    ).populate("categoryId", "name color");

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