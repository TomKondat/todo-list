const todoControllers = require("../controllers/todoControllers");

const express = require("express");
const router = express.Router();

router
  .route("/")
  .get(todoControllers.getTodos)
  .post(todoControllers.createTodo);

router
  .route("/:id")
  .post(todoControllers.editTodoById)
  .patch(todoControllers.changeIsCompleted)
  .delete(todoControllers.deleteTodoById);

module.exports = router;
