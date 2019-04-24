import noteService from '../services/notes'

// const [notes, setNotes] = useState([])
// const [user, setUser] = useState(null)
// const [filter, setFilter] = useField('text', 'filter', 'Filter')
// const [username, setUsername] = useField('text', 'username', 'Username')
// const [password, setPassword] = useField('password', 'password', 'Password')
// const [loginMessage, setLoginMessage] = useState('')

const noteReducer = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_NOTE':
      return [...state, action.data]
    case 'UPDATE_NOTE': {
      const filteredState = state.filter(note => note.id !== action.data.id)
      return [...filteredState, action.data]
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

export const saveNote = note => {
  if (note.title !== '' && note.content !== '') {
    if (note.id === null) {
      return async dispatch => {
        const createdNote = await noteService.create(note)
        dispatch({
          type: 'SAVE_NOTE',
          data: createdNote
        })
      }
    }
    return async dispatch => {
      const updatedNote = await noteService.update(note)
      dispatch({
        type: 'UPDATE_NOTE',
        data: updatedNote
      })
    }
  }
}

export default noteReducer
