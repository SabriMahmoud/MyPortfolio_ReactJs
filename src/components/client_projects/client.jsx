import React from 'react'
import './client.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'

import IMG5 from '../../assets/portfolio5.png'
function Client() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Client Projects</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""/>
          </div>
          <h3>Bank Analytical Dashboard</h3>
          <small className='text-light'> I contributed to the creation of an analytical dashboard for a banking application that assists with the understanding of the customer's needs and helps in decision-making.</small>
            <div className="portfolio__item-cta">
            
              <a href="https://github.com" className="btn"> Github </a>
              <a href="https://github.com" className="btn btn-primary" traget="_blank"> Live Demo </a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""/>
          </div>
          <h3>Applying The European Data Protection Regulation "GDPR" in Big Data systems</h3>
          <small className='text-light'> Application of the GDPR within a banking application, work carried out in collaboration with Proxym-LAB.</small>
            <div className="portfolio__item-cta">
            
              <a href="https://github.com" className="btn"> Github </a>
              <a href="https://github.com" className="btn btn-primary" traget="_blank"> Live Demo </a>
            </div>
        </article>
        
    </div>

    </section>
  )
}

export default Client