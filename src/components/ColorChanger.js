import React from 'react'

const ColorChanger = ({
  colors,
  note,
  handleInputChange,
  saveNote,
}) => {
  return (
    <div className='color-changer' >
      {
        colors.map(color => {
          let checked = false
          if (note.color === color) {
            checked = true
          }
          return (
            <div
              className={ 'color-input color-' + color }
            >
              <input
                name='color'
                value={ color }
                onMouseDown={ handleInputChange(note) }
                onMouseUp={ saveNote(note) }
                type='checkbox'
                checked={ checked }
              />
            </div>
          )
        })
      }
    </div>
  )
}

export default ColorChanger