import React from 'react'
import LoginMessage from './LoginMessage'
import LoginField from './LoginField'

const LoginForm = props => {
  return (
    <div id="login">
      <LoginMessage loginMessage={props.loginMessage} />
      <form onSubmit={props.login}>
        <div>
          <LoginField
            type="text"
            placeholder="Username"
            name="username"
            value={props.username}
            handleInputChange={props.handleInputChange}
          />
          <LoginField
            type="password"
            placeholder="Password"
            name="password"
            value={props.password}
            handleInputChange={props.handleInputChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginForm
