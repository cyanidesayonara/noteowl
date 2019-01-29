import React from 'react'
import FilterNotes from './FilterNotes.js'
import LoginForm from './LoginForm.js'
import LogoutForm from './LogoutForm.js'

const Navbar = ({
  title,
  login,
  logout,
  filterValue,
  handleInputChange,
  username,
  password,
  user,
  loginMessage
}) => {
  return (
    <nav>
      <h1>
        { title }
      </h1>
      <FilterNotes
        filterValue={ filterValue }
        handleInputChange={ handleInputChange }
      />
      {
        user === null &&
        <LoginForm
          login={ login }
          username={ username }
          password={ password }
          handleInputChange={ handleInputChange }
          loginMessage={ loginMessage }
        />
      }
      {
        user !== null &&
        <LogoutForm
          logout={ logout }
          user={ user }
        />
      }

    </nav>
  )
}

export default Navbar