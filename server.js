const app = require("./app")
const http = require("http")

// create server
const server = http.createServer(app)

const port = process.env.PORT || 3000

// start server
server.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
