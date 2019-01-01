import React from 'react'

const LogoutForm = ({
  user,
  logout
}) => {
  return (
    <form onSubmit={ logout }>
      <button type="submit">
        Logout&nbsp;
        { user.username }
      </button>
    </form>
  )
}

export default LogoutForm