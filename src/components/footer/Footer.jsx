import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {Blue} from '../../assets/blue.png'

function Footer() {
  return (
    <footer id='footer'>
      <a href='#' className='footer__logo'>
        <h2>Sabri Mahmoud</h2>
      </a>
      <ul className='premalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href='http://facebook.com'><FaFacebookF/></a>
        <a href='http://instagram.com'><FiInstagram/></a>
        <a href='http://twitter.com'><IoLogoTwitter/> </a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Sabri Mahmoud. All rights reserved</small>  
      </div> 
    </footer>
  )
}

export default Footer