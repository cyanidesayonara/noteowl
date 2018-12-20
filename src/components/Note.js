import React from 'react';

const Note = ({ title, author, date, content, handleRemove }) => {
  return (
    <li className="note">
      <h2>
        Title: { title }
      </h2>
      <h3>
        Author: { author }
      </h3>
      <h4>
        Date: { date }
      </h4>
      <p>
        { content }
      </p>
      <button onClick={ handleRemove }>
        Delete
      </button>
    </li>
  )
}

export default Note