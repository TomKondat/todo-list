const Todo = require("./../models/todoModel");
const asyncHandler = require("express-async-handler");
const AppError = require("./../utils/AppError");

exports.getTodos = asyncHandler(async (req, res, next) => {});

exports.createTodo = asyncHandler(async (req, res, next) => {
  const { title, priority, expirationDate, description } = req.body;
  const todo = await Todo.create({
    title,
    priority,
    expirationDate,
    description,
  });
  res.status(200).json({
    status: "success",
    todo,
  });
});
