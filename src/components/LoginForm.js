import React from 'react'
import LoginMessage from './LoginMessage.js'
import LoginField from './LoginField.js'

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
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginForm