const Todo = require("../models/TODO")

module.exports = {
  getAllTodos: async (req, res) => {
    Todo.find()
      .then((todos) => {
        res.status(200).send(todos)
      })
      .catch((err) => {
        res.status(500).send(err)
      })
  },
  getTodo: async (req, res) => {
    const { id } = req.params
    // TODO : vérifier que le todo existe
    Todo.findById(id)
      .then((todo) => {
        res.status(200).send(todo)
      })
      .catch((err) => {
        res.status(500).send(err)
      })
  },
  addTodo: async (req, res) => {
    const { title, description, done } = req.body
    const todo = new Todo({
      title,
      description,
      done,
    })
    todo
      .save()
      .then((todo) => {
        res.status(201).send(todo)
      })
      .catch((err) => {
        res.status(500).send(err)
      })
  },
  updateTodo: async (req, res) => {
    const { id } = req.params
    const { title, description, done } = req.body
    //TODO : vérifier que le todo existe
    Todo.findByIdAndUpdate(id, { title, description, done })
      .then((todo) => {
        res.status(200).send(todo)
      })
      .catch((err) => {
        res.status(500).send(err)
      })
  },
  deleteTodo: async (req, res) => {
    const { id } = req.params
    //TODO : vérifier que le todo existe
    Todo.findByIdAndDelete(id)
      .then((todo) => {
        res.status(200).send(todo)
      })
      .catch((err) => {
        res.status(500).send(err)
      })
  },
}
