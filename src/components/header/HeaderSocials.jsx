import React from 'react'
import {BsLinkedin} from 'react-icons/bs' ;
import {BsGithub} from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/sabri-mahmoud-a30b101b7/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/SabriMahmoud" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials