import React from 'react'

import womenCollection from '../../assets/women-collection.png'

function Collection() {
  return (
    <section class="collection-container">
    <a href="#" class="collection">
        <img src={womenCollection} alt=""/>
        <p class="collection-title">women <br/> apparels</p>
    </a>
    <a href="#" class="collection">
        <img src={womenCollection} alt=""/>
        <p class="collection-title">men <br/> apparels</p>
    </a>
    <a href="#" class="collection">
        <img src={womenCollection} alt=""/>
        <p class="collection-title">accessories</p>
    </a>
    </section>
  )
}

export default Collection