import React from 'react'
import './about.css'

import {MdWorkOutline} from 'react-icons/md'
import {AiOutlineProject} from 'react-icons/ai'
function About() {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        
        <div className="container about__container">
    
        <div className="about__me">
              <div className="about__me-image">
                <img src={require('../../assets/about_sabri.png')} alt="" />
              </div>
          </div>

          <div className="about__content">
            <div className='about__cards'>
              <article className='about__card'>
                <MdWorkOutline className='about__icon'/>
                <h5>Experience</h5>
                <small>1+ Year</small>

              </article>
              <article className='about__card'>
                <AiOutlineProject className='about__icon'/>
                <h5>Projects</h5>
                <small>10+ Completed </small>

              </article>
            </div>
            <p>
              Speak about yourself
            </p>
            <a href='#contact' className='btn btn-primary'>Contact Me</a>
          </div>        
        </div>
       
    </section>
  )
}

export default About

