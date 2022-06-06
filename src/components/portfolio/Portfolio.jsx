import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/smart-home-automation-2.jpg'
import IMG2 from '../../assets/intelligent-personal-assistant.jpg'
import IMG3 from '../../assets/snake.png'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Academic and Personnal Projects</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""/>
          </div>
          <h3>Home Security</h3>
          <small className='text-light'>This project aims to control a machine through an application via the Internet. The application is based on facial recognition.</small>
            <div className="portfolio__item-cta">
            
              <a href="https://github.com" className="btn"> Github </a>
              <a href="https://github.com" className="btn btn-primary" traget="_blank"> Live Demo </a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt=""/>
          </div>
          <h3>Web page creation assistant</h3>
          <small className='text-light'>This innovation project allows people with special needs to create web applications.
          <br />Application based on voice recognition.</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com" className="btn"> Github </a>
              <a href="https://github.com" className="btn btn-primary" traget="_blank"> Live Demo </a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt=""/>
          </div>
          <h3>Snake Game with Reinforcement Learning</h3>
          <small className='text-light'>This project aims to have fun with coding and applying the Bellman equation for Reinforcement Learning.</small>
           
            <div className="portfolio__item-cta">
              <a href="https://github.com" className="btn"> Github </a>
              <a href="https://github.com" className="btn btn-primary" traget="_blank"> Live Demo </a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt=""/>
          </div>
          <h3>Real-Time Object Tracking</h3>
          
          <small className='text-light'>The goal of the project is to apply the Kalman filter.</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com" className="btn"> Github </a>
              <a href="https://github.com" className="btn btn-primary" traget="_blank"> Live Demo </a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt=""/>
          </div>
          <h3>Automaton Determinization</h3>

          <small className='text-light'>The goal of the project is to determinize any given automaton.</small>
          <div className="portfolio__item-cta">
              <a href="https://github.com" className="btn"> Github </a>
              <a href="https://github.com" className="btn btn-primary" traget="_blank"> Live Demo </a>
            </div>
        </article>
    </div>

    </section>
  )
}

export default Portfolio