import React, { Component } from 'react'
import FilterNotes from './components/FilterNotes.js'
import Notes from './components/Notes.js'
import noteService from './services/notes.js'
import update from 'immutability-helper'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
      filter: '',
      notifications: {}
    }
  }

  componentDidMount() {
    document.title = 'NoteOwl'
    noteService
      .getAll()
      .then(notes => {
        this.setState({ notes: notes })
      })
  }

  newNote = () => {
    if (!this.state.notes.find(n => n.id === 0)) {
      const note = {
        id: 0,
        title: '',
        author: '',
        content: '',
        date: '',
        important: false
      }
      this.setState({
        notes: [note].concat(this.state.notes)
      })
    }
  }

  saveNote = (note) => (event) => {
    event.preventDefault()
    if (note.id === 0) {
      noteService
        .create(note)
        .then(createdNote => {
          let notes = this.state.notes.filter(n => n.id !== 0)
          notes = [createdNote].concat(notes)
          let notifications = this.state.notifications
          notifications[createdNote.id] = 'Note saved'
          this.setState({
            notes: notes,
            notifications: notifications
          })
          console.log(notifications)
          setTimeout(() => {
            let notifications = this.state.notifications
            delete notifications[createdNote.id]
            this.setState({
              notifications: notifications
            })
          }, 3000)
        })
        .catch(error => {
          console.log(error)
        })
    } else {
      noteService
        .update(note.id, note)
        .then(updatedNote => {
          let notifications = this.state.notifications
          notifications[updatedNote.id] = 'Note saved'
          const index = this.state.notes.findIndex(n => n.id === updatedNote.id)
          const notes = update(this.state.notes, {
            [index]: {
              $set: updatedNote
            }
          })
          this.setState({
            notes: notes,
            notifications: notifications
          })
          console.log(this.state.notifications)
          setTimeout(() => {
            let notifications = this.state.notifications
            delete notifications[updatedNote.id]
            this.setState({
              notifications: notifications
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
{/*           <FilterNotes
            filterValue={ this.state.filter }
            handleFilterChange={ this.handleInputChange('filter', undefined) }
          /> */}
        </nav>
        <Notes
          notes={ notes }
          handleRemove={ this.handleRemove }
          saveNote={ this.saveNote }
          handleInputChange={ this.handleInputChange }
        />
      </div>
    )
  }
}

export default App
