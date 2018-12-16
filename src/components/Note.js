import React from 'react';

const Note = ({ title, author, text }) => {
  return (
    <li>
      <h2>
        { title }
      </h2>
      <p>
        { author }
      </p>
      <p>
        { text }
      </p>
    </li>
  )
}

export default Note