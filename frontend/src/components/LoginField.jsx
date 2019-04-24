import React from 'react'

const LoginField = props => {
  return (
    <div className="owl-field">
      <input {...props.field} />
      <span className="border" />
    </div>
  )
}

export default LoginField
