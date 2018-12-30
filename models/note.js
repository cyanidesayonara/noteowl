const mongoose = require('mongoose')

const Note = mongoose.model('Note', {
  title: String,
  author: String,
  content: String,
  date: Date,
  important: Boolean,
  notification: String,
  position: Object
})

module.exports = Note