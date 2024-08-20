const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  priority: {
    type: String,
    enum: {
      values: ["Not Important", "Important", "Very Important"],
      message:
        "priority is either: Not Important, Important, or Very Important",
    },
    default: "Not Important",
  },
  expirationDate: { type: Date, required: true },
  description: { type: String, required: true },
  isCompleted: { type: Boolean, default: false },
});
const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
