import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div id="about">
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
      <h3>This is the about page</h3>
    </div>
  )
}

export default About
