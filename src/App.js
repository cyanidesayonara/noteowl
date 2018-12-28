import React, { Component } from 'react'
import FilterNotes from './components/FilterNotes.js'
import Notes from './components/Notes.js'
import noteService from './services/notes.js'
import update from 'immutability-helper'
import ReactGA from 'react-ga';

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
    ReactGA.initialize('UA-120584024-4');
    ReactGA.pageview('/');
  }

  newNote = () => {
    if (!this.state.notes.find(n => n.id === 0)) {
      const note = {
        id: 0,
        title: '',
        author: '',
        content: '',
        date: null,
        important: false,
        notification: null,
        position: {
          x: 0,
          y: 0
        }
      }
      this.setState({ notes: [note].concat(this.state.notes) })
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
        this.setState({ notes: notes })
      }, 3000)
    }
  }

  handleRemove = (note) => () => {
    if (!note.author) {
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
  }

  handleDrag = (note) => (event, ui) => {
    const index = this.state.notes.findIndex(n => n.id === note.id)
    let posX = 0
    let posY = 0
    if (this.state.notes[index].position) {
      posX = this.state.notes[index].position.x
      posY = this.state.notes[index].position.y
    }
    const notes = update(this.state.notes, {
      [index]: {
        ['position']: {
          $set: {
            x: posX + ui.deltaX,
            y: posY + ui.deltaY
          }
        }
      }
    })
    this.setState({
      notes: notes
    });
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
          handleDrag={ this.handleDrag }
          saveNote={ this.saveNote }
          handleInputChange={ this.handleInputChange }
        />
      </div>
    )
  }
}

export default App
