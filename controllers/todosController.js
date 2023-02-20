const Todo = require("../models/TODO")

module.exports = {
  getAllTodos: async (req, res) => {
    try {
      const todos = await Todo.find()
      if (!todos) return res.status(404).send("No todos found")
      return res.status(200).send(todos)
    } catch (err) {
      return res.status(500).send(err)
    }
  },
  getTodo: async (req, res) => {
    const { id } = req.params
    if (!id.match(/^[0-9a-fA-F]{24}$/))
      return res.status(400).send("Not a valid id format")
    try {
      const todo = await Todo.findById(id)
      if (!todo) return res.status(404).send("Todo not found")
      return res.status(200).send(todo)
    } catch (err) {
      return res.status(500).send(err)
    }
  },
  addTodo: async (req, res) => {
    const { title, description, done } = req.body
    const newTodo = new Todo({
      title,
      description,
      done,
    })
    try {
      const todo = await newTodo.save()
      return res.status(201).send(todo)
    } catch (err) {
      res.status(500).send(err)
    }
  },
  updateTodo: async (req, res) => {
    const { id } = req.params
    const { title, description, done } = req.body
    if (!id.match(/^[0-9a-fA-F]{24}$/))
      return res.status(400).send("Not a valid id format")
    try {
      const todo = await Todo.findById(id)
      if (!todo) return res.status(404).send("Todo not found")
      await Todo.findByIdAndUpdate(id, { title, description, done })
      return res.status(200).send(todo)
    } catch (err) {
      res.status(500).send(err)
    }
  },
  deleteTodo: async (req, res) => {
    const { id } = req.params
    if (!id.match(/^[0-9a-fA-F]{24}$/))
      return res.status(400).send("Not a valid id format")
    try {
      const todo = await Todo.findByIdAndDelete(id)
      if (!todo) return res.status(404).send("Todo not found")
      return res.status(200).send(todo)
    } catch (err) {
      return res.status(500).send(err)
    }
  },
}
