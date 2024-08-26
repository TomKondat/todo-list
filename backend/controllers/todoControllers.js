const Todo = require("./../models/todoModel");
const asyncHandler = require("express-async-handler");
const AppError = require("./../utils/AppError");

exports.getTodos = asyncHandler(async (req, res, next) => {
  const todos = await Todo.find();
  res.status(200).json({
    status: "success",
    todos,
  });
});

exports.getUserTodos = asyncHandler(async (req, res, next) => {
  const { id: userId } = req.params;
  if (!userId) {
    return next(new AppError(400, "Please provide the user id"));
  }
  const todos = await Todo.find({ user: userId });
  res.status(200).json({
    status: "success",
    todos,
  });
});

exports.createTodo = asyncHandler(async (req, res, next) => {
  const { title, priority, expirationDate, description, user } = req.body;
  if (!title || !priority || !expirationDate || !description || !user) {
    return next(new AppError(400, "Please provide all the required fields"));
  }
  const todo = await Todo.create({
    title,
    priority,
    expirationDate,
    description,
    user,
  });
  res.status(200).json({
    status: "success",
    todo,
  });
});

exports.editTodoById = asyncHandler(async (req, res, next) => {
  const { title, priority, expirationDate, description } = req.body;
  const { id } = req.params;

  if (!title || !priority || !expirationDate || !description) {
    return next(new AppError(400, "Please provide all the required fields"));
  }

  const updatedTodo = await Todo.findByIdAndUpdate(
    id,
    { title, priority, expirationDate, description },
    { new: true }
  );
  res.status(200).json({
    status: "success",
    updatedTodo,
  });
});

exports.deleteTodoById = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const deletedTodo = await Todo.findByIdAndDelete(id);
  if (!deletedTodo) {
    return next(new AppError(404, "No todo found with that ID"));
  }
  res.status(200).json({
    status: "success",
    message: "Todo deleted successfully",
  });
});

exports.changeIsCompleted = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const todo = await Todo.findById(id);
  if (!todo) {
    return next(new AppError(404, "No todo found with that ID"));
  }
  todo.isCompleted = !todo.isCompleted;
  const updatedTodo = await todo.save();
  res.status(200).json({
    status: "success",
    updatedTodo,
  });
});
