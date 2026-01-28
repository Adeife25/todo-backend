const express = require('express');
const cors = require('cors');

const taskRoutes = require('./routes/taskRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/tasks', taskRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Hello, MERN To-Do API!');
});

module.exports = app;
