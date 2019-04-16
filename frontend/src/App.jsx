import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Notes from './components/Notes'
import noteService from './services/notes'
import loginService from './services/login'
import update from 'immutability-helper'
import ReactGA from 'react-ga'

const App = props => {
  const [notes, setNotes] = useState(props.notes)
  const [user, setUser] = useState(null)
  const [filter, setFilter] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginMessage, setLoginMessage] = useState('')

  useEffect(() => {
    document.title = 'NoteOwl'
    // save user to local storage
    const loggedUserJSON = window.localStorage.getItem('user')
    if (loggedUserJSON) {
      const loggedUser = JSON.parse(loggedUserJSON)
      setUser(loggedUser)
      noteService.setToken(loggedUser.token)
    }
    noteService.getAll().then(notes => {
      setNotes(notes)
    })
    // initialize GA
    ReactGA.initialize('UA-120584024-4')
    ReactGA.pageview('/')
  }, [])

  // set notification to null after timeout
  const hideNotification = note => {
    setTimeout(() => {
      const index = notes.findIndex(n => n.id === note.id)
      // index is -1 if note not in notes
      if (index > -1) {
        const updatedNotes = update(notes, {
          [index]: {
            ['notification']: {
              $set: null
            }
          }
        })
        setNotes(updatedNotes)
      }
    }, 3000)
  }

  const logout = async event => {
    event.preventDefault()

    try {
      noteService.removeToken(user.token)
      window.localStorage.removeItem('user')
      setUser(null)
      noteService.getAll().then(notes => setNotes(notes))
    } catch (exception) {
      setUser(null)
    }
  }

  const login = async event => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username: username,
        password: password
      })

      window.localStorage.setItem('user', JSON.stringify(user))
      noteService.setToken(user.token)

      setUser(user)
      setUsername('')
      setPassword('')
      // if notes are unsaved
      notes.map(note => (note.modified === true ? saveNote(note) : null))
    } catch (exception) {
      setLoginMessage('Username and/or password incorrect')
      setPassword('')
      setTimeout(() => setLoginMessage(''), 3000)
    }
  }

  const newNote = () => {
    if (!notes.find(n => n.id === null)) {
      const note = {
        id: null,
        title: '',
        content: '',
        created: new Date(),
        updated: null,
        important: false,
        notification: null,
        position: {
          x: 0,
          y: 0
        },
        user: null,
        color: 'yellow'
      }
      setNotes(notes.concat(note))
    }
  }

  const saveNote = note => {
    if (note.title && note.content) {
      clearTimeout(note.saveTimeout)
      note.saveTimeout = setTimeout(() => {
        if (user) {
          if (note.id === null) {
            noteService
              .create(note)
              .then(createdNote => {
                createdNote.notification = 'Note saved'
                const index = notes.findIndex(n => n.id === null)
                const updatedNotes = update(notes, {
                  [index]: {
                    $set: createdNote
                  }
                })
                setNotes(updatedNotes)
                hideNotification(createdNote)
              })
              .catch(error => console.log(error))
          } else {
            noteService
              .update(note)
              .then(updatedNote => {
                updatedNote.notification = 'Note saved'
                const index = notes.findIndex(n => n.id === updatedNote.id)
                const updatedNotes = update(notes, {
                  [index]: {
                    $set: updatedNote
                  }
                })
                setNotes(updatedNotes)
                hideNotification(updatedNote)
              })
              .catch(error => console.log(error))
          }
        } else {
          note.notification = 'Login to save note'
          const index = notes.findIndex(n => n.id === note.id)
          const updatedNotes = update(notes, {
            [index]: {
              $set: note
            }
          })
          setNotes(updatedNotes)
          hideNotification(note)
        }
      }, 3000)
    }
  }

  const handleRemove = note => () => {
    if (!note.author) {
      if (window.confirm('Are you sure you want to remove this note?')) {
        if (note.id === null) {
          const filteredNotes = notes.filter(n => n.id !== note.id)
          setNotes(filteredNotes)
        } else {
          noteService
            .remove(note)
            .then(response => {
              const filteredNotes = notes.filter(n => n.id !== note.id)
              setNotes(filteredNotes)
            })
            .catch(error => {
              const filteredNotes = notes.filter(n => n.id !== note.id)
              setNotes(filteredNotes)
            })
        }
      }
    }
  }

  const handleDrag = note => (event, ui) => {
    const position = {
      x: +note.position.x + +ui.deltaX.toFixed(0),
      y: +note.position.y + +ui.deltaY.toFixed(0)
    }
    const index = notes.findIndex(n => n.id === note.id)
    const updatedNotes = update(notes, {
      [index]: {
        ['modified']: {
          $set: true
        },
        ['position']: {
          $set: position
        }
      }
    })
    setNotes(updatedNotes)
    saveNote(notes[index])
  }

  const handleInputChange = note => event => {
    const value = event.target.value
    const name = event.target.name
    if (note) {
      const index = notes.findIndex(n => n.id === note.id)
      const updatedNotes = update(notes, {
        [index]: {
          ['modified']: {
            $set: true
          },
          [name]: {
            $set: value
          }
        }
      })
      setNotes(updatedNotes)
      saveNote(notes[index])
    } else {
      console.log('uh oh')
    }
  }

  const shownNotes = notes
    ? notes.filter(note => {
        note.title.toLowerCase().includes(filter.toLowerCase()) ||
          note.content.toLowerCase().includes(filter.toLowerCase())
        return note
      })
    : []

  return (
    <div id="content">
      <Navbar
        login={login}
        logout={logout}
        handleInputChange={handleInputChange}
        filter={filter}
        username={username}
        password={password}
        user={user}
        loginMessage={loginMessage}
      />
      <Notes
        notes={shownNotes}
        newNote={newNote}
        handleRemove={handleRemove}
        handleDrag={handleDrag}
        user={user}
        handleInputChange={handleInputChange}
      />
    </div>
  )
}

export default App
