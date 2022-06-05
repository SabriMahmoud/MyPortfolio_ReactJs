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
              <h3>Service 1</h3>
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

          <article className="service">
            <div className="service__head">
              <h3>Service 2</h3>
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

          <article className="service">
            <div className="service__head">
              <h3>Service 2</h3>
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