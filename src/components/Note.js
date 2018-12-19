import React from 'react';

const Note = ({ title, author, content, handleRemove }) => {
  return (
    <li>
      <h2>
        Title: { title }
      </h2>
      <h3>
        Author: { author }
      </h3>
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