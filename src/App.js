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
    }
  }

  componentDidMount() {
    document.title = 'NoteOwl'
    noteService
      .getAll()
      .then(notes => { this.setState({ notes: notes }) })
  }

  newNote = () => {
    if (!this.state.notes.find(n => n.id === 0)) {
      const note = {
        id: 0,
        title: '',
        author: '',
        content: '',
        date: '',
        important: false,
        notification: null
      }
      this.setState({ notes: [note].concat(this.state.notes) })
    }
  }

  saveNote = (note) => (event) => {
    event.preventDefault()
    if (note.title && note.content) {
      if (note.id === 0) {
        noteService
          .create(note)
          .then(createdNote => {
            createdNote.notification = 'Note saved'
            let notes = this.state.notes.filter(n => n.id !== 0)
            notes = [createdNote].concat(notes)
            this.setState({ notes: notes })
          })
          .catch(error => { console.log(error) })
      } else {
        noteService
          .update(note.id, note)
          .then(updatedNote => {
            updatedNote.notification = 'Note saved'
            const index = this.state.notes.findIndex(n => n.id === updatedNote.id)
            const notes = update(this.state.notes, {
              [index]: { $set: updatedNote }
            })
            this.setState({ notes: notes })
          })
          .catch(error => { console.log(error) })
      }
    } else if (event.type === 'submit') {
      const index = this.state.notes.findIndex(n => n.id === note.id)
      const notes = update(this.state.notes, {
        [index]: {
          ['notification']: {
            $set: 'Note must have a title and text'
          }
        }
      })
      this.setState({ notes: notes })
    }
    // set notification to null after timeout
    setTimeout(() => {
      const index = this.state.notes.findIndex(n => n.id === note.id)
      const notes = update(this.state.notes, {
        [index]: {
          ['notification']: {
            $set: null
          }
        }
      })
      this.setState({
        notes: notes
      })
    }, 3000)
  }

  handleRemove = (note) => () => {
    if (window.confirm('Are you sure you want to remove this note?')) {
      noteService
        .remove(note.id)
        .then(removedNote => {
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

  handleInputChange = (prop, note) => {
    return (event) => {
      const value = event.target.value
      if (note) {
        const index = this.state.notes.findIndex(n => n.id === note.id)
        const notes = update(this.state.notes, {
          [index]: { [prop]: { $set: value } }
        })
        this.setState({ notes: notes })
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
