import React from 'react'
import arrow1 from '../../assets/arrow.png'

function BtnSlider() {
  return (
  <div>
    <button class="pre-btn"><img src={arrow1} alt=""/></button>
    <button class="nxt-btn"><img src={arrow1} alt=""/></button>
  </div>
  )
}

export default BtnSlider