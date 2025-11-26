import Category from "../models/Category.js";

export const categoryRepository = {
  async getAllByUser(userId) {
    return Category.find({ user: userId }).sort({ createdAt: -1 });
  },

  async getById(id, userId) {
    return Category.findOne({ _id: id, user: userId });
  },

  async create(data) {
    return Category.create(data);
  },

  async update(id, userId, data) {
    return Category.findOneAndUpdate(
      { _id: id, user: userId },
      data,
      { new: true }
    );
  },

  async remove(id, userId) {
    return Category.findOneAndDelete({ _id: id, user: userId });
  },
};