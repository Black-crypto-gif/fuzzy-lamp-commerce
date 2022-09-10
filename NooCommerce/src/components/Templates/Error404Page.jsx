import React from 'react'
import error from '../../assets/404.png'

function Error404Page() {
  return (
    <>
    <img src={error} class="four-0-four-image" alt="" />
    <p class="four-0-four-msg">look like you are lost. Head to beack to our <a href="#">homepage</a></p>
    </>
  )
}

export default Error404Page