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
            <label className={ 'color-input color-' + color }>
              <input
                name='color'
                value={ color }
                type='checkbox'
                checked={ checked }
                onChange={ saveNote(note) }
                onClick={ handleInputChange(note) }
              />
              <span className='checkmark'></span>
            </label>
          )
        })
      }
    </div>
  )
}

export default ColorChanger