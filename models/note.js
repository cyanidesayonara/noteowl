const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    required: true
  },
  updated: {
    type: Date,
    required: true
  },
  important: {
    type: Boolean,
    required: true
  },
  notification: String,
  position: {
    type: Object,
    required: true
  },
  color: {
    type: String,
    required: true
  }
})

noteSchema.statics.format = note => {
  return {
    id: note.id,
    title: note.title,
    user: note.user,
    content: note.content,
    created: note.created,
    updated: note.updated,
    important: note.important,
    notification: note.notification,
    position: note.position,
    color: note.color
  }
}

const Note = mongoose.model('Note', noteSchema)

module.exports = Note
