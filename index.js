const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const Note = require('./models/note.js')

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('build'))

const formatNote = (note) => {
  const formattedNote = { ...note._doc, id: note._id }
  delete formattedNote._id
  delete formattedNote.__v
  return formattedNote
}

// get notes
app.get('/notes', (request, response) => {
  Note
    .find({})
    .then(notes => { response.json(notes.map(formatNote)) })
})

// get note
app.get('/notes/:id', (request, response) => {
  Note
    .findById(request.params.id)
    .then(formatNote)
    .then(formattedNote => {
      if (formattedNote) {
        response.json((formattedNote))
      } else {
        response.status(404).end()
      }
    })
    .catch(error => {
      console.log(error)
      response.status(400).send({ error: 'malformed id' })
    })
})

// add note
app.post('/notes', (request, response) => {
  const body = request.body

  if (body.content === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  const note = new Note({
    title: body.title,
    author: body.author,
    content: body.content,
    important: body.important || false,
    date: new Date(),
    notification: null
  })

  note
    .save()
    .then(formatNote)
    .then(savedAndFormattedNote => { response.json((savedAndFormattedNote)) })
})

// update note
app.put('/notes/:id', (request, response) => {
  const body = request.body
  const note = {
    title: body.title,
    author: body.author,
    content: body.content,
    important: body.important,
    date: new Date(),
    notification: null
  }
  
  Note
    .findByIdAndUpdate(request.params.id, note, { new: true })
    .then(formatNote)
    .then(updatedAndFormattedNote => { response.json((updatedAndFormattedNote)) })
    .catch(error => {
      console.log(error)
      response.status(400).send({ error: 'malformatted id' })
    })
})

// delete note
app.delete('/notes/:id', (request, response) => {
  Note
    .findByIdAndRemove(request.params.id)
    .then(result => { response.status(204).end() })
    .catch(error => { response.status(400).send({ error: 'malformed id' }) })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => { console.log(`Server running on port ${PORT}`) })