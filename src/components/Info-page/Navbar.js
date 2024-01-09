import React from 'react'
import "./Info.css"
import { megaPhone, navDown, questionMark, searchIcon } from '../../Utils/Icons'
const Navbar = () => {






  return (
    <div className='navbar-container'>
      <div className="nav-left">
        <span>Payments</span>
        <span> {questionMark} How it works</span>
      </div>
      <div className="nav-search">
        {searchIcon}
        <input type='text' placeholder={ "Search features, tutorials, etc. "}/>
      </div>
      <div className="nav-right">
      {megaPhone}
    {navDown}

      </div>
    </div>
  )
}

export default Navbar
