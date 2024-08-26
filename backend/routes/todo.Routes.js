const todoControllers = require("../controllers/todoControllers");
const authControllers = require("../controllers/authControllers");
const express = require("express");
const router = express.Router();

router
  .route("/")
  .get(todoControllers.getTodos)
  .post(authControllers.protect, todoControllers.createTodo);

router
  .route("/:id")
  .post(todoControllers.editTodoById)
  .patch(todoControllers.changeIsCompleted)
  .delete(todoControllers.deleteTodoById)
  .get(todoControllers.getUserTodos);

module.exports = router;
