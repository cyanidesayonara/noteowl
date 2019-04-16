import React from 'react'
import Moment from 'react-moment'

const NoteDate = props => {
  return (
    <div className="note-date">
      <span>{props.text}</span>
      {props.date === null && <span>Never</span>}
      {props.date !== null && (
        <Moment format="ddd DD MMM YYYY HH:mm">{props.date}</Moment>
      )}
    </div>
  )
}

export default NoteDate
