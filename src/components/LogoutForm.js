import React from 'react'

const LogoutForm = ({
  user,
  logout
}) => {
  return (
    <div id='logout'>
      <p>
        Signed in as
      </p>
      <p>
        { user.username }
      </p>
      <form onSubmit={ logout }>
        <button type="submit">
          Logout
        </button>
      </form>
    </div>
  )
}

export default LogoutForm