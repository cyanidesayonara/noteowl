import React from 'react'

const LoginMessage = ({
  loginMessage,
}) => {
  if (loginMessage) {
    return (
      <div>
        <p>
          { loginMessage }
        </p>
      </div>
    )
  } else {
    return null
  }
}

export default LoginMessage