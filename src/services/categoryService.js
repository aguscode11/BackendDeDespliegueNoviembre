import { categoryRepository } from "../repositories/categoryRepository.js";

export const categoryService = {
  async getAll(userId) {
    return categoryRepository.getAllByUser(userId);
  },

  async getOne(id, userId) {
    const category = await categoryRepository.getById(id, userId);
    if (!category) throw new Error("Categoría no encontrada");
    return category;
  },

  async create(data, userId) {
    return categoryRepository.create({ ...data, user: userId });
  },

  async update(id, userId, data) {
    const updated = await categoryRepository.update(id, userId, data);
    if (!updated) throw new Error("Categoría no encontrada");
    return updated;
  },

  async remove(id, userId) {
    const deleted = await categoryRepository.remove(id, userId);
    if (!deleted) throw new Error("Categoría no encontrada");
    return deleted;
  },
};


