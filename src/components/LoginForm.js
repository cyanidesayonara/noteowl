import React from 'react'

const LoginForm = ({
  login,
  username,
  password,
  handleInputChange,
  loginMessage
}) => {
  return (
    <form onSubmit={ login }>
      <span>
        { loginMessage }
      </span>
      <input
        type='text'
        placeholder='Username'
        name='username'
        value={ username }
        onChange={ handleInputChange(null) }
      />
      <input
        type='password'
        placeholder='Password'
        name='password'
        value={ password }
        onChange={ handleInputChange(null) }
      />
      <button type='submit'>Login</button>
    </form>
  )
}

export default LoginForm