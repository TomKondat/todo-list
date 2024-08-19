const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  priority: { type: String, required: true },
  expirationDate: { type: Date, required: true },
  description: { type: String, required: true },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
