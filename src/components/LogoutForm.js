import React from 'react'

const LogoutForm = ({
  user,
  logout
}) => {
  return (
    <div id='logout'>
      <span>
        Signed in as&nbsp;
      </span>
      <span>
        { user.username }
      </span>
      <form onSubmit={ logout }>
        <button type="submit">
          Logout
        </button>
      </form>
    </div>
  )
}

export default LogoutForm