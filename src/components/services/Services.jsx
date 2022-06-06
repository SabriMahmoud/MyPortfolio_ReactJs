import React from 'react'
import './services.css'
import {AiOutlineCheck} from 'react-icons/ai'

function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
            <div className="service__head">
              <h3>Data Science</h3>
            </div>
            <ul className='service__list'>
              <li>
                <AiOutlineCheck className='service__list-icon' />
                <p>Data Collection and Cleaning</p>
              </li>
              <li>
                <AiOutlineCheck className='service__list-icon' />
                <p>Data Analytics</p>
              </li>
              <li>
                <AiOutlineCheck className='service__list-icon' />
                <p>Machine Learning models development</p>
              </li>
              <li>
                <AiOutlineCheck className='service__list-icon' />
                <p>Model Deploiment and Maintenance</p>
              </li>
            </ul>
          
          </article>

          <article className="service">
            <div className="service__head">
              <h3>Big Data</h3>
            </div>
            <ul className='service__list'>
              <li>
                <AiOutlineCheck className='service__list-icon' />
                <p>Data warhousing</p>
              </li>
              <li>
                <AiOutlineCheck className='service__list-icon' />
                <p>Speak about the service</p>
              </li>
              <li>
                <AiOutlineCheck className='service__list-icon' />
                <p>Speak about the service</p>
              </li>
              <li>
                <AiOutlineCheck className='service__list-icon' />
                <p>Speak about the service</p>
              </li>
            </ul>
          
          </article>

          <article className="service">
            <div className="service__head">
              <h3>Big Data </h3>
            </div>
            <ul className='service__list'>
              <li>
                <AiOutlineCheck className='service__list-icon' />
                <p>Speak about the service</p>
              </li>
              <li>
                <AiOutlineCheck className='service__list-icon' />
                <p>Speak about the service</p>
              </li>
              <li>
                <AiOutlineCheck className='service__list-icon' />
                <p>Speak about the service</p>
              </li>
              <li>
                <AiOutlineCheck className='service__list-icon' />
                <p>Speak about the service</p>
              </li>
            </ul>
          
          </article>
        </div>
    </section>
  )
}

export default Services