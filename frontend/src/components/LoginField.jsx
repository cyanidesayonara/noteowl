import React from 'react'

const LoginField = props => {
  return (
    <div className="owl-field">
      <input
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.handleInputChange}
      />
      <span className="border" />
    </div>
  )
}

export default LoginField
