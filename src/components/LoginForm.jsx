import React from 'react'
import LoginMessage from './LoginMessage'
import LoginField from './LoginField'

const LoginForm = ({
  login,
  username,
  password,
  handleInputChange,
  loginMessage
}) => {
  return (
    <div id='login'>
      <LoginMessage loginMessage={ loginMessage } />
      <form onSubmit={ login }>
        <div>
          <LoginField
            type='text'
            placeholder='Username'
            name='username'
            value={ username }
            handleInputChange ={ handleInputChange }
          />
          <LoginField
            type='password'
            placeholder='Password'
            name='password'
            value={ password }
            handleInputChange ={ handleInputChange }
          />
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginForm