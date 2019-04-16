import React from 'react'

const LogoutForm = props => {
  return (
    <div id="logout">
      <form onSubmit={props.logout}>
        <div>
          <span>Signed in as</span>
          <br />
          <span>{props.user.username}</span>
        </div>
        <button type="submit">Logout</button>
      </form>
    </div>
  )
}

export default LogoutForm
