import React from 'react'

const Notification = ({ message }) => {
  console.log(message === undefined)
  console.log(message)
  if (message === undefined) {
    return null
  }
  return (
    <div className="error">
      { message }
    </div>
  )
}

export default Notification