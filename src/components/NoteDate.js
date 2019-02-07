import React from 'react'
import Moment from 'react-moment'

const NoteDate = ({ text, date }) => {
  return (
    <div className='note-date'>
      <span>{ text }</span>
      {
        date === null &&
        <span>Never</span>
      }
      {
        date !== null &&
        <Moment format='ddd DD MMM YYYY HH:mm'>{ date }</Moment>
      }
    </div>
  )
}

export default NoteDate