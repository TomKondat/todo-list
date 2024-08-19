const todoControllers = require("../controllers/todoControllers");

const express = require("express");
const router = express.Router();

router
  .route("/")
  .get(todoControllers.getTodos)
  .post(todoControllers.createTodo);

module.exports = router;
