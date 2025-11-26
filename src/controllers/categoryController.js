import { categoryService } from "../services/categoryService.js";

export const categoryController = {
  async getAll(req, res, next) {
    try {
      const categories = await categoryService.getAll(req.user.id);
      res.json({ data: categories });
    } catch (err) {
      next(err);
    }
  },

  async create(req, res, next) {
    try {
      const category = await categoryService.create(req.body, req.user.id);
      res.status(201).json({ data: category });
    } catch (err) {
      next(err);
    }
  },

  async update(req, res, next) {
    try {
      const category = await categoryService.update(
        req.params.id,
        req.user.id,
        req.body
      );
      res.json({ data: category });
    } catch (err) {
      next(err);
    }
  },

  async remove(req, res, next) {
    try {
      await categoryService.remove(req.params.id, req.user.id);
      res.json({ message: "Categoría eliminada" });
    } catch (err) {
      next(err);
    }
  },
};
