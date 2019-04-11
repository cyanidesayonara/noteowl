import React from 'react'
import Logo from './Logo.jsx'
import FilterNotes from './FilterNotes'
import LoginForm from './LoginForm'
import LogoutForm from './LogoutForm'

const Navbar = ({
  login,
  logout,
  filterValue,
  handleInputChange,
  username,
  password,
  user,
  loginMessage,
}) => {
  return (
    <nav id='navbar'>
      <Logo />
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