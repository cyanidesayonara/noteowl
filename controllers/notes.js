const notesRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const Note = require('../models/note')
const User = require('../models/user')

const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

// get notes
notesRouter.get('/', async (request, response) => {
  try {
    const token = getTokenFrom(request)

    const decodedToken = jwt.verify(token, process.env.SECRET_KEY)
    if (!token || !decodedToken.id) {
      return response.status(401).json({
        error: 'token missing or invalid'
      })
    }
    return await User.findOne({
      _id: decodedToken.id
    })
  } catch (exception) {
    const notes = await Note.find().populate('user._id')
    return response.json(notes.map(note => Note.format(note)))
  }
})

// get note
notesRouter.get('/:id', async (request, response) => {
  try {
    const token = getTokenFrom(request)
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY)
    if (!token || !decodedToken.id) {
      return response.status(401).json({
        error: 'token missing or invalid'
      })
    }
    const note = await Note.findById(request.params.id)

    if (note) {
      return response.json(Note.format(note))
    }
    return response.status(404).end()
  } catch (exception) {
    return response.status(400).send({
      error: 'malformed id'
    })
  }
})

// add note
notesRouter.post('/', async (request, response) => {
  const { body } = request

  try {
    const token = getTokenFrom(request)
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY)
    if (!token || !decodedToken.id) {
      return response.status(401).json({
        error: 'token missing or invalid'
      })
    }

    if (body.content === undefined) {
      return response.status(400).json({
        error: 'content missing'
      })
    }

    const user = await User.findOne({
      _id: decodedToken.id
    })

    const note = new Note({
      title: body.title,
      user: user.id,
      content: body.content,
      important: body.important || false,
      created: body.created,
      updated: new Date(),
      notification: null,
      position: body.position,
      color: body.color
    })

    const savedNote = await note.save()
    user.notes = user.notes.concat(savedNote)
    await user.save()

    return response.json(Note.format(savedNote))
  } catch (exception) {
    if (exception.name === 'JsonWebTokenError') {
      return response.status(401).json({
        error: exception.message
      })
    }
    return response.status(500).send({
      error: 'something went wrong...'
    })
  }
})

// update note
notesRouter.put('/:id', async (request, response) => {
  try {
    const { body } = request

    if (body.content === undefined) {
      return response.status(400).json({
        error: 'content missing'
      })
    }

    const note = {
      title: body.title,
      user: body.user,
      content: body.content,
      important: body.important,
      created: body.created,
      updated: new Date(),
      notification: null,
      position: body.position,
      color: body.color
    }

    const updatedNote = await Note.findByIdAndUpdate(request.params.id, note, {
      new: true
    })

    return response.json(Note.format(updatedNote))
  } catch (exception) {
    return response.status(400).send({
      error: 'malformed id'
    })
  }
})

// delete note
notesRouter.delete('/:id', async (request, response) => {
  try {
    const note = await Note.findByIdAndRemove(request.params.id)
    const user = await User.findOne({
      _id: note.user
    })

    user.notes = user.notes.filter(n => n.id.toString() !== note.id)
    await user.save()

    return response.status(204).end()
  } catch (exception) {
    return response.status(400).send({
      error: 'malformed id'
    })
  }
})

module.exports = notesRouter
