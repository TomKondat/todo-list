const todoControllers = require("../controllers/todoControllers");

const express = require("express");
const router = express.Router();

router
  .route("/")
  .get(todoControllers.getTodos)
  .post(todoControllers.createTodo);

router
  .route("/:id")
  .patch(todoControllers.editTodoById)
  .delete(todoControllers.deleteTodoById);

module.exports = router;
