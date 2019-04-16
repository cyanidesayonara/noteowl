const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const middleware = require('./utils/middleware')
const notesRouter = require('./controllers/notes')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const config = require('./utils/config')

const app = express()

mongoose
  .connect(config.mongoUrl, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log('Connected to database')
  })
  .catch(error => {
    console.log(error)
  })

app.use(bodyParser.json())
app.use(express.static('build'))
app.use(middleware.logger)
app.use('/api/notes', notesRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)
app.use(middleware.error)

const server = http.createServer(app)

server.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})
server.on('close', () => {
  mongoose.connect.close()
})

module.exports = {
  app,
  server
}