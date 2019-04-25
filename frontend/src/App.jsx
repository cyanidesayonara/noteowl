import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import useField from './hooks/useField'
import Navbar from './components/Navbar'
import Notes from './components/Notes'
import userService from './services/users'
import noteService from './services/notes'
import loginService from './services/login'
import { initializeNotes, saveNote, updateNote } from './reducers/noteReducer'
import ReactGA from 'react-ga'

const App = props => {
  const [user, setUser] = useState(null)
  const [filter, setFilter] = useField('text', 'filter', 'Filter')
  const [username, setUsername] = useField('text', 'username', 'Username')
  const [password, setPassword] = useField('password', 'password', 'Password')
  const [loginMessage, setLoginMessage] = useState('')

  useEffect(() => {
    document.title = 'NoteOwl'
    // save user to local storage
    const loggedUserJSON = window.localStorage.getItem('user')
    if (loggedUserJSON) {
      const loggedUser = JSON.parse(loggedUserJSON)
      userService
        .getOne(loggedUser.id)
        .then(user => {
          setUser(user)
          noteService.setToken(loggedUser.token)
          props.initializeNotes()
        })
        .catch(exception => console.log(exception))
    }
    // initialize GA
    ReactGA.initialize('UA-120584024-4')
    ReactGA.pageview('/')
  }, [])

  const logout = async event => {
    event.preventDefault()

    try {
      window.localStorage.removeItem('user')
      setUser(null)
      noteService.removeToken(user.token)
      props.initializeNotes()
    } catch (exception) {
      setUser(null)
    }
  }

  const login = async event => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username: username.value,
        password: password.value
      })

      window.localStorage.setItem('user', JSON.stringify(user))
      noteService.setToken(user.token)

      setUser(user)
      setUsername('')
      setPassword('')
      // if notes are unsaved
      props.notes.map(note =>
        note.modified === true ? props.saveNote(note) : null
      )
    } catch (exception) {
      setLoginMessage('Username and/or password incorrect')
      setPassword('')
      setTimeout(() => setLoginMessage(''), 3000)
    }
  }

  const newNote = () => {
    if (!props.notes.find(n => n.id === null)) {
      props.createNote()
    }
  }

  const saveNote = note => {
    if (note.title !== '' && note.content !== '') {
      clearTimeout(note.saveTimeout)
      note.saveTimeout = setTimeout(() => {
        if (user) {
          if (note.id === null) {
            props.saveNote(note)
          } else {
            props.updateNote(note)
          }
        }
      }, 3000)
    }
  }

  const handleRemove = note => () => {
    if (!note.author) {
      if (window.confirm('Are you sure you want to remove this note?')) {
        props.removeNote(note)
      }
    }
  }

  const handleDrag = note => (event, ui) => {
    note.position = {
      x: +note.position.x + +ui.deltaX.toFixed(0),
      y: +note.position.y + +ui.deltaY.toFixed(0)
    }
    saveNote(note)
  }

  const handleNoteChange = note => {
    saveNote(note)
  }

  return (
    <div id="content">
      <Navbar
        login={login}
        logout={logout}
        filter={filter}
        username={username}
        password={password}
        user={user}
        loginMessage={loginMessage}
      />
      <Notes
        notes={props.notes}
        newNote={newNote}
        handleRemove={handleRemove}
        handleDrag={handleDrag}
        user={user}
        handleNoteChange={handleNoteChange}
      />
    </div>
  )
}

const notesToShow = ({ notes, filter }) => {
  return notes
    ? notes.filter(note => {
        note.title.toLowerCase().includes(filter.toLowerCase()) ||
          note.content.toLowerCase().includes(filter.toLowerCase())
        return note
      })
    : []
}

const mapStateToProps = state => {
  return {
    notes: notesToShow(state)
  }
}

export default connect(
  mapStateToProps,
  { initializeNotes, saveNote, updateNote }
)(App)
