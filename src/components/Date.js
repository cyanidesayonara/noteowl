import React from 'react'
import Moment from 'react-moment'

const Date = ({ text, date }) => {
  if (date === null) {
    return null
  }
  return (
    <div>
      <span>{ text }</span>
      <Moment format='ddd DD MMM YYYY HH:mm'>{ date }</Moment>
    </div>
  )
}

export default Date