const notesRouter = require('express').Router()
const Note = require('../models/note')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

const getTokenFrom = (request) => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

// get notes
notesRouter.get('/', async (request, response) => {
  const notes = await Note
    .find({})
    .populate('user', { username: 1 })
  return response.json(notes.map(note => Note.format(note)))
})

// get note
notesRouter.get('/:id', async (request, response) => {
  try {
    const note = await Note.findById(request.params.id)

    if (note) {
      return response.json(Note.format(note))
    } else {
      return response.status(404).end()
    }
  } catch (exception) {
    return response.status(400).send({ error: 'malformed id' })
  }
})

// add note
notesRouter.post('/', async (request, response) => {
  const body = request.body

  try {
    const token = getTokenFrom(request)
    const decodedToken = jwt.verify(token, process.env.SECRET)

    if (!token || !decodedToken.id) {
      return response.status(401).json({
        error: 'token missing or invalid'
      })
    }

    if (body.content === undefined) {
      return response.status(400).json({ error: 'content missing' })
    }

    const date = new Date()
    const user = await User.findById(body.userID)

    const note = new Note({
      title: body.title,
      user: user._id,
      content: body.content,
      important: body.important || false,
      created: date,
      updated: date,
      notification: null,
      position: body.position
    })

    const savedNote = await note.save()
    user.notes = user.notes.concat(savedNote)
    await user.save()

    return response.json(Note.format(savedNote))
  } catch (exception) {
    if (exception.name === 'JsonWebTokenError' ) {
      response.status(401).json({ error: exception.message })
    } else {    
      return response.status(500).send({ error: 'something went wrong...' })
    }
  }
})

// update note
notesRouter.put('/:id', async (request, response) => {
  try {
    const body = request.body

    if (body.content === undefined) {
      return response.status(400).json({ error: 'content missing' })
    }

    const note = {
      title: body.title,
      user: body.user,
      content: body.content,
      important: body.important,
      created: body.created,
      updated: new Date(),
      notification: null,
      position: body.position
    }

    const updatedNote = await Note.findByIdAndUpdate(
      request.params.id, note, { new: true }
    )

    return response.json(Note.format(updatedNote))
  } catch (exception) {
    return response.status(400).send({ error: 'malformed id' })
  }
})

// delete note
notesRouter.delete('/:id', async (request, response) => {
  try {
    await Note.findByIdAndRemove(request.params.id)
    return response.status(204).end()
  } catch (exception) {
    return response.status(400).send({ error: 'malformed id' })
  }
})

module.exports = notesRouter