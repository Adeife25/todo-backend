const express = require('express');
const router = express.Router();
const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask
} = require('../controllers/taskController');

// CRUD routes
router.post('/', createTask);       // Create
router.get('/', getTasks);          // Read all
router.get('/:id', getTaskById);    // Read one
router.put('/:id', updateTask);     // Update
router.delete('/:id', deleteTask);  // Delete

module.exports = router;
