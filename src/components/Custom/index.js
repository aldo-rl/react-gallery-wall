// Dependencies
import React from 'react'

// Styles
import './style.css'

const Custom = (props) => {
  console.log('props -> ', props)
  return (
    <div className="custom">
      <img className='rowWallImage' src="https://w.wallhaven.cc/full/5w/wallhaven-5we787.jpg" alt="sd"/>
      <h2>Custom</h2>
    </div>
  )
}

export default Custom
