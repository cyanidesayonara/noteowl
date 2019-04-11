import React from 'react'

const LoginField = ({ type, placeholder, name, value, handleInputChange }) => {
  return (
    <div className="owl-field">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleInputChange(null)}
      />
      <span className="border" />
    </div>
  )
}

export default LoginField
