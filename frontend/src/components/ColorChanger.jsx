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
          <label className={'color-input color-' + color}>
            <input
              name="color"
              value={props.color}
              type="checkbox"
              checked={checked}
              onChange={props.handleInputChange(props.note)}
            />
            <span className="checkmark" />
          </label>
        )
      })}
    </div>
  )
}

export default ColorChanger
