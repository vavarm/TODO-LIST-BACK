// cross origin resource sharing
const cors = require("cors")
// postparser
const postparser = require("./middleware/postparser")
// express
const express = require("express")
// routes
const todoRoutes = require("./routes/todoRoutes")
// database connection
require("./config/database")

// create express app
const app = express()

// middleware
app.use(cors())
app.use(postparser)

// routes
app.use("/api/todos", todoRoutes)

// default route
app.get("/", (req, res) => {
  res.status(200).send("Hello World")
})

module.exports = app
