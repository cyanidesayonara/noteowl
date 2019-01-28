import React from 'react'
import Moment from 'react-moment'

const NoteDate = ({ text, date }) => {
  if (date === null) {
    return null
  }
  return (
    <div className='note-date'>
      <span>{ text }</span>
      <Moment format='ddd DD MMM YYYY HH:mm'>{ date }</Moment>
    </div>
  )
}

export default NoteDate