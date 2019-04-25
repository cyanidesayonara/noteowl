import React from 'react'
import Logo from './Logo.jsx'
import FilterNotes from './FilterNotes'
import LoginForm from './LoginForm'
import LogoutForm from './LogoutForm'
import { Link } from 'react-router-dom'

const Navbar = props => {
  return (
    <nav id="navbar">
      <Logo />
      <FilterNotes filter={props.filter} />
      {props.user === null && (
        <LoginForm
          login={props.login}
          username={props.username}
          password={props.password}
          loginMessage={props.loginMessage}
        />
      )}
      {props.user !== null && (
        <LogoutForm logout={props.logout} user={props.user} />
      )}
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
