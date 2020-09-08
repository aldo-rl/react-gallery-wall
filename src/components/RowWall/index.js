// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Item from '../Item'

// Styles
import './style.css'

const RowWall = ({ customComponent: CustomComponent}) => {

  if(CustomComponent !== undefined) {
    return (
      <div className="rowWall">
        <CustomComponent />
      </div>
    )
  }

  return (
    <div className='rowWall'>
      <Item />
    </div>
  )
}

RowWall.propTypes = {
  customComponent: PropTypes.elementType
}

export default RowWall
