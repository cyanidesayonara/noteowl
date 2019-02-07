import React from 'react'

const LogoutForm = ({
  user,
  logout
}) => {
  return (
    <div id='logout'>
      <form onSubmit={ logout }>
        <div>
          <span>
            Signed in as
          </span>
          <br />
          <span>
            { user.username }
          </span>
        </div>
        <button type="submit">
          Logout
        </button>
      </form>
    </div>
  )
}

export default LogoutForm