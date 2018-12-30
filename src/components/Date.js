import React from 'react'
import Moment from 'react-moment'

const Date = ({ date }) => {
  if (date === null) {
    return null
  }
  return (
    <Moment
      date={ date }
    />
  )
}

export default Date