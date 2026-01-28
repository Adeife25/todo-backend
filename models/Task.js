const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // must have a title
  },
  description: {
    type: String,
    default: "", // optional
  },
  status: {
    type: String,
    enum: ["pending", "in-progress", "done"], 
    default: "pending",
  },
  priority: {
    type: String,
    enum: ["low", "medium", "high"], // only these values allowed
    default: "medium",
  }
}, { timestamps: true }); // adds createdAt and updatedAt automatically

module.exports = mongoose.model('Task', taskSchema);
