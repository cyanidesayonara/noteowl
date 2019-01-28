const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
  title: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  content: String,
  created: Date,
  updated: Date,
  important: Boolean,
  notification: String,
  position: Object,
  color: String,
})

noteSchema.statics.format = (note) => {
  return {
    id: note._id,
    title: note.title,
    user: note.user,
    content: note.content,
    created: note.created,
    updated: note.updated,
    important: note.important,
    notification: note.notification,
    position: note.position,
    color: note.color,
  }
}

const Note = mongoose.model('Note', noteSchema)

module.exports = Note