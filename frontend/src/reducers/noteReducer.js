import noteService from '../services/notes'

const noteReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_NOTES':
      return action.data
    case 'SAVE_NOTE':
      return [...state, action.data]
    case 'UPDATE_NOTE': {
      const filteredState = state.filter(note => note.id !== action.data.id)
      return [...filteredState, action.data]
    }
    case 'REMOVE_NOTE': {
      const filteredState = state.filter(note => note.id !== action.data.id)
      return filteredState
    }
    default:
      return state
  }
}

export const initializeNotes = () => {
  return async dispatch => {
    const notes = await noteService.getAll()
    dispatch({
      type: 'INIT_NOTES',
      data: notes
    })
  }
}

export const newNote = () => {
  return async dispatch => {
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
    dispatch({
      type: 'NEW_NOTE',
      data: note
    })
  }
}

export const saveNote = note => {
  return async dispatch => {
    const createdNote = await noteService.create(note)
    dispatch({
      type: 'SAVE_NOTE',
      data: createdNote
    })
  }
}

export const updateNote = note => {
  return async dispatch => {
    const updatedNote = await noteService.update(note)
    dispatch({
      type: 'UPDATE_NOTE',
      data: updatedNote
    })
  }
}

export const removeNote = note => {
  return async dispatch => {
    if (note.id === null) {
      noteService.remove(note)
    }
    dispatch({
      type: 'REMOVE_NOTE',
      data: note
    })
  }
}

export default noteReducer
