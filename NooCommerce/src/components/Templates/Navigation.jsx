import React from 'react'
import { FaCartArrowDown, FaHouseUser } from "react-icons/fa";

import logo from '../../assets/dark-logo.png'


function Navigation() {
  return (
    <nav class="navbar">
    <div class="nav">
        <img src={logo} class="brand-logo" alt=""/>
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="search brand, product"/>
                <button class="search-btn">search</button>
            </div>
            <a href='#'><FaCartArrowDown className='logo-color' /></a>
            <a href='#'><FaHouseUser className='logo-color' /></a>
        </div>
    </div>
    </nav>
  )
}

export default Navigation