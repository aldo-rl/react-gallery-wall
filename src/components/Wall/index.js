// Dependencies
import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

// Components
import RowWall from '../RowWall'

// Styles
import './style.css'

const Wall = forwardRef(({className}, ref) => {
  return (
    <div className={`wall ${className}`}>
      <div className={`wallContent ${className}Content`} ref={ref}>
        <RowWall />
        <RowWall />
      </div>
    </div>
  )
})

Wall.propTypes = {
  className: PropTypes.string.isRequired,
}

export default Wall