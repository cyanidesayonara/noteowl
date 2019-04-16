import React from 'react'

const LoginMessage = props => {
  if (props.loginMessage) {
    return (
      <div>
        <p>{props.loginMessage}</p>
      </div>
    )
  } else {
    return null
  }
}

export default LoginMessage
