const mongoose = require('mongoose')

require('dotenv').config()

if ( process.env.NODE_ENV !== 'production' ) {
  require('dotenv').config()
}

const url = process.env.MONGODB_URI

mongoose.connect(url, { useNewUrlParser: true })
mongoose.Promise = global.Promise

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