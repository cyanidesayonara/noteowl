const Note = require('../models/note')
const User = require('../models/user')

const initialNotes = [
  {
    title: 'Title',
    content: 'HTML on helppoa',
    important: false
  },
  {
    title: 'Title',
    content: 'HTTP-protokollan tärkeimmät metodit ovat GET ja POST',
    important: true
  }
]

const format = note => {
  return {
    title: note.title,
    content: note.content,
    important: note.important,
    id: note.id
  }
}

const nonExistingId = async () => {
  const note = new Note()
  await note.save()
  await note.remove()

  return note.id.toString()
}

const notesInDb = async () => {
  const notes = await Note.find({})
  return notes.map(format)
}

const usersInDb = async () => {
  const users = await User.find({})
  return users
}

module.exports = {
  initialNotes,
  format,
  nonExistingId,
  notesInDb,
  usersInDb
}
