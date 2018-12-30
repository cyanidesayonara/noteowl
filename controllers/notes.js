const notesRouter = require('express').Router()
const Note = require('../models/note')

const formatNote = (note) => {
  const formattedNote = { ...note._doc, id: note._id }
  delete formattedNote._id
  delete formattedNote.__v
  return formattedNote
}

// get notes
notesRouter.get('/', async (request, response) => {
  const notes = await Note.find({})
  response.json(notes.map(note => formatNote(note)))
})

// get note
notesRouter.get('/:id', (request, response) => {
  Note
    .findById(request.params.id)
    .then(note => {
      if (note) {
        response.json(formatNote(note))
      } else {
        response.status(404).end()
      }
    })
    .catch(error => { response.status(400).send({ error: 'malformed id' }) })
})

// add note
notesRouter.post('/', (request, response) => {
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
    notification: null,
    position: body.position
  })

  note
    .save()
    .then(note => { response.json(formatNote(note)) })
    .catch(error => { response.status(400).send({ error: 'malformed id' }) })
})

// update note
notesRouter.put('/:id', (request, response) => {
  const body = request.body

  if (body.content === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  const note = {
    title: body.title,
    author: body.author,
    content: body.content,
    important: body.important,
    date: new Date(),
    notification: null,
    position: body.position
  }

  Note
    .findByIdAndUpdate(request.params.id, note, { new: true })
    .then(note => { response.json((formatNote(note))) })
    .catch(error => { response.status(400).send({ error: 'malformed id' }) })
})

// delete note
notesRouter.delete('/:id', (request, response) => {
  Note
    .findByIdAndRemove(request.params.id)
    .then(result => { response.status(204).end() })
    .catch(error => { response.status(400).send({ error: 'malformed id' }) })
})

module.exports = notesRouter