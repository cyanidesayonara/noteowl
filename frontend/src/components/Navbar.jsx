import React from 'react'
import Logo from './Logo.jsx'
import FilterNotes from './FilterNotes'
import LoginForm from './LoginForm'
import LogoutForm from './LogoutForm'

const Navbar = props => {
  return (
    <nav id="navbar">
      <Logo />
      <FilterNotes
        filterValue={props.filterValue}
        handleInputChange={props.handleInputChange}
      />
      {props.user === null && (
        <LoginForm
          login={props.login}
          username={props.username}
          password={props.password}
          handleInputChange={props.handleInputChange}
          loginMessage={props.loginMessage}
        />
      )}
      {props.user !== null && (
        <LogoutForm logout={props.logout} user={props.user} />
      )}
    </nav>
  )
}

export default Navbar
