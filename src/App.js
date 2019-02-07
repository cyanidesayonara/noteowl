import React, { Component } from 'react'
import Navbar from './components/Navbar.js'
import Notes from './components/Notes.js'
import noteService from './services/notes.js'
import loginService from './services/login.js'
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
      user: null,
      loginMessage: null
    }
  }

  // set notification to null after timeout
  hideNotification = (note) => {
    setTimeout(() => {
      const index = this.state.notes.findIndex(n => n.id === note.id)
      // index is -1 if note not in notes
      if (index > -1) {
        const notes = update(this.state.notes, {
          [index]: { ['notification']: { $set: null } }
        })
        this.setState({ notes: notes })
      }
    }, 3000)
  }

  componentDidMount() {
    document.title = 'NoteOwl'

    // save user to local storage
    const loggedUserJSON = window.localStorage.getItem('user')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.setState({ user: user })
      noteService.setToken(user.token)
    }

    // load notes
    noteService
      .getAll()
      .then(notes => this.setState({ notes: notes }))

    // initialize GA
    ReactGA.initialize('UA-120584024-4')
    ReactGA.pageview('/')
  }

  logout = async (event) => {
    event.preventDefault()

    try {
      noteService.removeToken(this.state.user.token)
      window.localStorage.removeItem('user')
      this.setState({ user: null })
    } catch (exception) {
      this.setState({ user: null })
    }
  }

  login = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username: this.state.username,
        password: this.state.password
      })

      window.localStorage.setItem('user', JSON.stringify(user))
      noteService.setToken(user.token)

      this.setState({ user: user, username: '', password: '' })

      // if notes are unsaved
      this.state.notes.map(note =>
        note.modified === true ? this.saveNote(note) : null
      )
    } catch (exception) {
      this.setState({
        loginMessage: 'Username and/or password incorrect',
        password: '',
      })
      setTimeout(() => this.setState({ loginMessage: null }), 3000)
    }
  }

  newNote = () => {
    if (!this.state.notes.find(n => n.id === null)) {
      const note = {
        id: null,
        title: '',
        content: '',
        created: new Date(),
        updated: null,
        important: false,
        notification: null,
        position: { x: 0, y: 0 },
        user: null,
        color: 'yellow',
      }
      this.setState({ notes: this.state.notes.concat(note) })
    }
  }

  saveNote = (note) => {
    if (note.title && note.content) {
      clearTimeout(note.saveTimeout)
      note.saveTimeout = setTimeout(() => {
        if (this.state.user) {
          if (note.id === null) {
            noteService
              .create(note)
              .then(createdNote => {
                createdNote.notification = 'Note saved'
                const index = this.state.notes.findIndex(n => n.id === null)
                const notes = update(this.state.notes, {
                  [index]: { $set: createdNote }
                })
                this.setState({ notes: notes })
                this.hideNotification(createdNote)
              })
              .catch(error => console.log(error))
          } else {
            noteService
              .update(note)
              .then(updatedNote => {
                updatedNote.notification = 'Note saved'
                const index = this.state.notes.findIndex(n => n.id === updatedNote.id)
                const notes = update(this.state.notes, {
                  [index]: { $set: updatedNote } })
                this.setState({ notes: notes })
                this.hideNotification(updatedNote)
              })
              .catch(error => console.log(error))
          }
        } else {
          note.notification = 'Login to save note'
          const index = this.state.notes.findIndex(n => n.id === note.id)
          const notes = update(this.state.notes, {
            [index]: { $set: note } })
          this.setState({ notes: notes })
          this.hideNotification(note)
        }
      }, 3000)
    }
  }

  handleRemove = (note) => () => {
    if (!note.author) {
      if (window.confirm('Are you sure you want to remove this note?')) {
        if (note.id === null) {
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
              const notes = this.state.notes.filter(n => n.id !== note.id)
              this.setState({ notes: notes })
            })
        }
      }
    }
  }

  handleDrag = (note) => (event, ui) => {
    const position = {
      x: +note.position.x + +ui.deltaX.toFixed(0),
      y: +note.position.y + +ui.deltaY.toFixed(0)
    }
    const index = this.state.notes.findIndex(n => n.id === note.id)
    const notes = update(this.state.notes, {
      [index]: {
        ['modified']: { $set: true },
        ['position']: { $set: position }
      }
    })
    this.setState({ notes: notes })
    this.saveNote(notes[index])
  }

  handleInputChange = (note) => (event) => {
    const value = event.target.value
    const name = event.target.name
    if (note) {
      const index = this.state.notes.findIndex(n => n.id === note.id)
      const notes = update(this.state.notes, {
        [index]: {
          ['modified']: { $set: true },
          [name]: { $set: value }
        }
      })
      this.setState({ notes: notes })
      this.saveNote(notes[index])
    } else {
      this.setState({ [name]: value })
    }
  }

  render() {
    const notes = this.state.notes.filter(note =>
      note.title.toLowerCase().includes(this.state.filter.toLowerCase()) ||
      note.content.toLowerCase().includes(this.state.filter.toLowerCase())
    )
    return (
      <div id='content'>
        <Navbar
          login={ this.login }
          logout={ this.logout }
          handleInputChange={ this.handleInputChange }
          filter={ this.state.filter }
          username={ this.state.username }
          password={ this.state.password }
          user={ this.state.user }
          loginMessage={ this.state.loginMessage }
        />
        <Notes
          notes={ notes }
          newNote={ this.newNote }
          handleRemove={ this.handleRemove }
          handleDrag={ this.handleDrag }
          user={ this.state.user }
          handleInputChange={ this.handleInputChange }
        />
      </div>
    )
  }
}

export default App