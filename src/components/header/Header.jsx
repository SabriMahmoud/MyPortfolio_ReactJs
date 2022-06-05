import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/sabri.png'
import HeaderSocials from './HeaderSocials'
function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Sabri MAHMOUD</h1>
        <h5 className="text-light">Computer Science Student at The National Engineering School of Sousse</h5><br></br>
        <CTA/>
        <HeaderSocials/>
        
        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header