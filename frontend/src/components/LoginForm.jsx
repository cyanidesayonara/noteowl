import React from 'react'
import LoginMessage from './LoginMessage'
import LoginField from './LoginField'

const LoginForm = props => {
  return (
    <div id="login">
      <LoginMessage loginMessage={props.loginMessage} />
      <form onSubmit={props.login}>
        <div>
          <LoginField field={props.username} />
          <LoginField field={props.password} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginForm
