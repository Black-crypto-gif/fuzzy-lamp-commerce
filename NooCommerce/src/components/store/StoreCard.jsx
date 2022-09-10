import React from 'react'
import card1 from '../../assets/card1.png'
import BtnSlider from './BtnSlider'


function StoreCard() {
  return (
    <>
        <div class="product-container">
            <div class="product-card">
                <div class="product-image">
                    <span class="discount-tag">50% off</span>
                    <img src={card1} class="product-thumb" alt="" />
                    <button class="card-btn">add to whislist</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">brand</h2>
                    <p class="product-short-des">a short line about the cloth..</p>
                    <span class="price">$20</span><span class="actual-price">$40</span>
                </div>
            </div>
            +7 more cards
        </div>
        <BtnSlider />
    </>
  )
}

export default StoreCard