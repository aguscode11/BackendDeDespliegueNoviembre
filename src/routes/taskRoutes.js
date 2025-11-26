import express from 'express';
import { createTask, getUserTasks, updateTask, deleteTask, editTask } from '../controllers/taskController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware);

router.post('/', createTask);
router.get('/', getUserTasks);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
router.put("/:id/edit", editTask);

export default router;