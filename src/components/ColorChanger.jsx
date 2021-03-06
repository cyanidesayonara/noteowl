import React from 'react'

const ColorChanger = ({ colors, note, handleInputChange }) => {
  return (
    <div className="color-changer">
      {colors.map(color => {
        let checked = false
        if (note.color === color) {
          checked = true
        }
        return (
          <label className={'color-input color-' + color}>
            <input
              name="color"
              value={color}
              type="checkbox"
              checked={checked}
              onChange={handleInputChange(note)}
            />
            <span className="checkmark" />
          </label>
        )
      })}
    </div>
  )
}

export default ColorChanger
