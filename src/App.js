import React, { Component } from 'react';
import Header from './components/Header.js'
import Notification from './components/Notification.js'
import AddNewNote from './components/AddNewNote.js'
import FilterNotes from './components/FilterNotes.js'
import Notes from './components/Notes.js'
import noteService from './services/notes.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
      newTitle: '',
      newAuthor: '',
      newText: '',
      filter: '',
      notification: null
    }
  }

  componentDidMount() {
    noteService
      .getAll()
      .then(notes => {
        this.setState({ 
          notes: notes
         })
      })
  }

  addNewNote = ( event ) => {
    event.preventDefault()
    const newNote = {
      title: this.state.newTitle,
      author: this.state.newAuthor,
      text: this.state.newText,
    }
    noteService
      .create(newNote)
      .then(newNote => {
        this.setState({
          notes: this.state.notes.concat(newNote),
          newTitle: '',
          newAuthor: '',
          newText: '',
          notification: `Note added`
        })
        setTimeout(() => {
          this.setState({
            notification: null
          })
        }, 3000)
      })
  }

  handleRemove = (note) => {
    return () => {
      if (window.confirm(`Are you sure you want to remove this note?`)) {
        noteService
          .remove(note.id)
          .then(removednote => {
            const notes = this.state.notes.filter(p => p.id !== note.id)
            this.setState({
              notes: notes,
              newTitle: '',
              newAuthor: '',
              newText: '',
              notification: `Note removed`
            })
            setTimeout(() => {
              this.setState({
                notification: null
              })
            }, 3000)
          })
          .catch(error => {
            const notes = this.state.notes.filter(p => p.id !== note.id)
            this.setState({
              notes: notes,
              newName: '',
              newNumber: '',
              notification: `Failed to remove note`
            })
            setTimeout(() => {
              this.setState({
                notification: null
              })
            }, 3000)
          })
      }
    }
  }

  handleInputChange = (prop) => {
    return (event) => {
      let newState = {}
      newState[prop] = event.target.value
      this.setState(newState)
    }
  }
  render() {
    if (this.state.notes.length) {
      const notes = this.state.notes.filter(note => 
        note.title.toLowerCase().includes(this.state.filter.toLowerCase()) ||
        note.author.toLowerCase().includes(this.state.filter.toLowerCase()) ||
        note.text.toLowerCase().includes(this.state.filter.toLowerCase()))
      return (
        <div>
          <Header />
          <Notification
            message={ this.state.notification }
          />
          <AddNewNote 
            titleValue = { this.state.newTitle }
            authorValue = { this.state.newAuthor }
            textValue = { this.state.newText }
            handleSubmit={ this.addNewNote }
            handleTitleChange = { this.handleInputChange("newTitle") }
            handleAuthorChange={ this.handleInputChange("newAuthor") }
            handleTextChange={ this.handleInputChange("newText") }
          />
          <FilterNotes
            filterValue={ this.state.filter }
            handleFilterChange={ this.handleInputChange("filter") }
          />
          <Notes
            notes={ notes }
            handleRemove={ this.handleRemove }
          />
        </div>
      )
    }
    else {
      return (
        <div>
          <Header />
          <AddNewNote />
        </div>
      )      
    }
  }
}

export default App
