// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Item from '../Item'

// Styles
import './style.css'

const RowWall = ({ customComponent: CustomComponent, className}) => {

  if(CustomComponent !== undefined) {
    return (
      <div className={`rowWall rowWall${className}`}>
        <CustomComponent data='data'/>
      </div>
    )
  }

  return (
    <div className={`rowWall rowWall${className}`}>
      <Item />
    </div>
  )
}

RowWall.propTypes = {
  customComponent: PropTypes.elementType,
  className: PropTypes.string.isRequired,
}

export default RowWall
