const express = require("express")
const router = express.Router()
const todosController = require("../controllers/todosController")

// GET /todos
router.get("/", todosController.getAllTodos)

// GET /todos/:id
router.get("/:id", todosController.getTodo)

// POST /todos
router.post("/", todosController.addTodo)

// PUT /todos/:id
router.put("/:id", todosController.updateTodo)

// DELETE /todos/:id
router.delete("/:id", todosController.deleteTodo)

module.exports = router
