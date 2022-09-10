import React from 'react'
import light from '../assets/light-logo.png'
function Hero() {
  return (
<header class="hero-section">
    <div class="content">
        <img src={light} class="logo" alt="" />
        <p class="sub-heading">Best fashion collection of all time</p>
    </div>
</header>
  )
}

export default Hero