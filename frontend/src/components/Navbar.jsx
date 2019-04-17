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
        handleFilterChange={props.handleFilterChange}
      />
      {props.user === null && (
        <LoginForm
          login={props.login}
          username={props.username}
          password={props.password}
          handleUsernameChange={props.handleUsernameChange}
          handlePasswordChange={props.handlePasswordChange}
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
