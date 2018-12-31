import React, { Component } from 'react'
import FilterNotes from './components/FilterNotes.js'
import Notes from './components/Notes.js'
import noteService from './services/notes.js'
import update from 'immutability-helper'
import ReactGA from 'react-ga'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
      filter: '',
      username: '',
      password: '',
      user: null
    }
  }

  // set notification to null after timeout
  hideNotification = (note) => {
    const timeout = 3000
    setTimeout(() => {
      const index = this.state.notes.findIndex(n => n.id === note.id)
      // if note not found, index will be -1
      if (index >= 0) {
        const notes = update(this.state.notes, {
          [index]: { ['notification']: { $set: null } }
        })
        this.setState({ notes: notes })
      }
    }, timeout)
  }

  componentDidMount() {
    document.title = 'NoteOwl'
    noteService
      .getAll()
      .then(notes => { this.setState({ notes: notes }) })
    ReactGA.initialize('UA-120584024-4')
    ReactGA.pageview('/')
  }

  login = (event) => {
    event.preventDefault()
  }

  newNote = () => {
    if (!this.state.notes.find(n => n.id === 0)) {
      const note = {
        id: 0,
        title: '',
        content: '',
        created: null,
        updated: null,
        important: false,
        notification: null,
        position: {
          x: 0,
          y: 0
        }
      }
      this.setState({ notes: this.state.notes.concat(note) })
    }
  }

  saveNote = (note) => () => {
    if (!note.author) {
      if (note.title && note.content) {
        if (note.id === 0) {
          noteService
            .create(note)
            .then(createdNote => {
              createdNote.notification = 'Note saved'
              const notes = this.state.notes.filter(n => n.id !== 0)
              this.setState({ notes: notes.concat(createdNote) })
              this.hideNotification(createdNote)
            })
            .catch(error => { console.log(error) })
        } else {
          noteService
            .update(note)
            .then(updatedNote => {
              updatedNote.notification = 'Note saved'
              const notes = this.state.notes.filter(n => n.id !== updatedNote.id)
              this.setState({ notes: notes.concat(updatedNote) })
              this.hideNotification(updatedNote)
            })
            .catch(error => { console.log(error) })
        }
      }
    }
  }

  handleRemove = (note) => () => {
    if (!note.author) {
      if (window.confirm('Are you sure you want to remove this note?')) {
        if (note.id === 0) {
          const notes = this.state.notes.filter(n => n.id !== note.id)
          this.setState({ notes: notes })          
        } else {
          noteService
            .remove(note)
            .then(response => {
              const notes = this.state.notes.filter(n => n.id !== note.id)
              this.setState({ notes: notes })
            })
            .catch(error => {
              console.log(error)
              const notes = this.state.notes.filter(n => n.id !== note.id)
              this.setState({ notes: notes })
            })
        }
      }
    }
  }

  handleDrag = (note) => (event, ui) => {
    const notes = this.state.notes.filter(n => n.id !== note.id)
    if (!note.position) {
      note.position = {
        x: 0,
        y: 0
      }
    }
    note.position = {
      x: +note.position.x + +ui.deltaX.toFixed(0),
      y: +note.position.y + +ui.deltaY.toFixed(0)
    }
    this.setState({ notes: notes.concat(note) })
  }

  handleInputChange = (note) => {
    return (event) => {
      const value = event.target.value
      const name = event.target.name
      if (note) {
        const index = this.state.notes.findIndex(n => n.id === note.id)
        const notes = update(this.state.notes, {
          [index]: { [name]: { $set: value } }
        })
        this.setState({ notes: notes })
      } else {
        this.setState({ [name]: value })
      }
    }
  }

  render() {
    const notes = this.state.notes.filter(note =>
      note.title.toLowerCase().includes(this.state.filter.toLowerCase()) ||
      note.content.toLowerCase().includes(this.state.filter.toLowerCase())
    )
    return (
      <div id='content'>
        <nav>
          <h1>
            Noteowl
          </h1>
          <button onClick={ this.newNote }>
            Add New Note
          </button>
          <FilterNotes
            filterValue={ this.state.filter }
            handleInputChange={ this.handleInputChange }
          />
          <form onSubmit={ this.login }>
            <input
              type='text'
              placeholder='Username'
              name='username'
              value={ this.state.username }
              onChange={ this.handleInputChange(null) }
            />
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={ this.state.password }
              onChange={ this.handleInputChange(null) }
            />
            <button type='submit'>Login</button>
          </form>
        </nav>
        <Notes
          notes={ notes }
          handleRemove={ this.handleRemove }
          handleDrag={ this.handleDrag }
          saveNote={ this.saveNote }
          handleInputChange={ this.handleInputChange }
        />
      </div>
    )
  }
}

export default App