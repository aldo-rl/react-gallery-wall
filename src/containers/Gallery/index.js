// Dependencies
import React, { useRef } from 'react'

// Components
import Wall from '../../components/Wall'

// Helpers
import { setTranslate } from '../../helpers'

// Styles
import './style.css'

const Gallery = () => {

  const leftWallRef = useRef(null)
  const centerWallRef = useRef(null)
  const rightWallRef = useRef(null)
  const walls = [leftWallRef, centerWallRef, rightWallRef]




  // Variables
  let xOffset = 0
  let initialX = 0
  let currentX = 0


  // onDeag
  const onDragStart = (e) => {
    if(e.type === 'touchstart') initialX = e.touches[0].clientX - xOffset
    else initialX = e.clientX - xOffset
  }

  const onDrag = (e) => {
    if(e.clientX === 0) return
    if(e.type === 'touchmove') currentX = e.touches[0].clientX - initialX
    else currentX = e.clientX - initialX
    xOffset = currentX
  }

  const onDragEnd = () => {
    initialX = currentX
    setTranslate(walls, currentX)
  }

  // handlers

  return (
    <div className='galleryWall'
      onDragStart={onDragStart}
      onDrag={onDrag}
      onDragEnd={onDragEnd}
      onTouchStart={onDragStart}
      onTouchMove={onDrag}
      onTouchEnd={onDragEnd}>
      <Wall className='leftWall' ref={leftWallRef}/>
      <Wall className='centerWall' ref={centerWallRef}/>
      <Wall className='rightWall' ref={rightWallRef}/>
    </div>
  )
}

export default Gallery
