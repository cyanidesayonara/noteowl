import React, { Component } from 'react';
import Notification from './components/Notification.js'
import FilterNotes from './components/FilterNotes.js'
import Notes from './components/Notes.js'
import noteService from './services/notes.js'
import update from 'immutability-helper';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
      filter: '',
      notification: null
    }
  }

  componentDidMount() {
    noteService
      .getAll()
      .then(notes => {
        this.setState({ notes: notes })
      })
  }

  newNote = () => {
    if (!this.state.notes.find(n => n.id === 0)) {
      const note = {
        title: '',
        author: '',
        content: '',
        date: '',
        important: false
      }
      this.setState({
        notes: this.state.notes.concat(note)
      })
    }
  }

  saveNote = (note) => (event) => {
    event.preventDefault()
    if (note.id) {
      noteService
        .update(note.id, note)
        .then(updatedNote => {
          const index = this.state.notes.findIndex(n => n.id === updatedNote.id)
          const newState = update(this.state, {
            notes: {
              [index]: { $set: updatedNote }
            }
          })
          this.setState({ newState, notification: 'Note saved' })
          setTimeout(() => {
            this.setState({ notification: null })
          }, 3000)
        })
        .catch(error => {
          console.log(error)
        })
    } else {
      noteService
        .create(note)
        .then(createdNote => {
          const index = this.state.notes.findIndex(n => n.id === createdNote.id)
          const newState = update(this.state, {
            notes: {
              [index]: { $set: createdNote }
            }
          })
          this.setState({ newState })
          setTimeout(() => {
            this.setState({
              notification: null
            })
          }, 3000)
        })
        .catch(error => {
          console.log(error)
        })
    }

  }

  handleRemove = (note) => () => {
    if (window.confirm('Are you sure you want to remove this note?')) {
      noteService
        .remove(note.id)
        .then(removedNote => {
          const notes = this.state.notes.filter(n => n.id !== note.id)
          this.setState({
            notes: notes,
            notification: 'Note deleted'
          })
          setTimeout(() => {
            this.setState({ notification: null })
          }, 3000)
        })
        .catch(error => {
          console.log(error)
          const notes = this.state.notes.filter(n => n.id !== note.id)
          this.setState({
            notes: notes,
            notification: 'Failed to delete note'
          })
          setTimeout(() => {
            this.setState({ notification: null })
          }, 3000)
        })
    }
  }

  handleInputChange = (prop, note) => {
    return (event) => {
      const value = event.target.value
      if (note) {
        const index = this.state.notes.findIndex(n => n.id === note.id)
        const newState = update(this.state, {
          notes: {
            [index]: {
              [prop]: { $set: value }
            }
          }
        })
        this.setState(newState)
      } else {
        this.setState({ [prop]: value })
      }
    }
  }

  render() {
    const notes = this.state.notes.filter(note =>
      note.title.toLowerCase().includes(this.state.filter.toLowerCase()) ||
      note.author.toLowerCase().includes(this.state.filter.toLowerCase()) ||
      note.content.toLowerCase().includes(this.state.filter.toLowerCase())
    )
    return (
      <div id="content">
        <nav>
          <h1>
            Noteowl
          </h1>
          <button onClick={ this.newNote }>
            Add New Note
          </button>
          <FilterNotes
            filterValue={ this.state.filter }
            handleFilterChange={ this.handleInputChange('filter', undefined) }
          />
        </nav>
        <div id="notes">
          <Notification
            message={ this.state.notification }
          />
          <Notes
            notes={ notes }
            handleRemove={ this.handleRemove }
            handleSubmit={ this.saveNote }
            handleInputChange={ this.handleInputChange }
          />
        </div>
      </div>
    )
  }
}

export default App
