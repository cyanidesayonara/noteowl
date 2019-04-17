import React from 'react'

const ColorChanger = props => {
  return (
    <div className="color-changer">
      {props.colors.map(color => {
        let checked = false
        if (props.note.color === color) {
          checked = true
        }
        return (
          <label key={color} className={'color-input color-' + color}>
            <input
              name="color"
              value={color}
              type="checkbox"
              checked={checked}
              onChange={props.handleNoteChange(props.note)}
            />
            <span className="checkmark" />
          </label>
        )
      })}
    </div>
  )
}

export default ColorChanger
