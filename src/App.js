import React, { Component } from 'react';
import Header from './components/Header.js'
import AddNote from './components/AddNote.js'
import FilterNotes from './components/FilterNotes.js'
import Notes from './components/Notes.js'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
      newName: '',
      newNote: '',
      filter: ''
    }
  }

  componentDidMount() {
    axios.get("http://localhost:3002/notes").then(response => {
      this.setState({ notes: response.data })
    })
  }

  setNewName = (event) => {
    event.preventDefault()
    const exists = this.state.notes.find(person => person.name === this.state.newName)
    if (!exists) {
      const persons = this.state.persons.concat({
        name: this.state.newName,
        number: this.state.newNumber
      })
      this.setState({
        persons: persons,
        newName: '',
        newNumber: '',
      })
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
      const notes = this.state.notes.filter(note => note.title.toLowerCase().includes(this.state.filter.toLowerCase()))
      return (
        <div>
          <Header />
          <AddNote />
          <FilterNotes />
          <Notes notes={ notes } />
        </div>
      )
    }
    else {
      return (
        <div>
          <Header />
          <AddNote />
        </div>
      )      
    }
  }
}

export default App
