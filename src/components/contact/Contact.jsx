import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'

function Contact() {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>sabri.mahmoud@eniso.u-sousse.tn</h5>
            <a href="mailto:sabri.mahmoud@eniso.u-sousse.tn" target="_blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Sabri Mahmoud</h5>
            <a href="https://m.me/sabri.mahmoud654" target="_blank">Send a message</a>
          </article>
        </div>
        <form action=''>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='text' name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
          {/* Complete Email js*/}
        </form>
      </div>
    </section>
  )
}

export default Contact