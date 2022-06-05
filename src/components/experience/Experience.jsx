import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'



function Experience() {
  return (
    <section id="experience">
    
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className='experience__1'>
          <h3>Skill 1</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>s1</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>s1</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>s1</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>s1</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className='experience__2'>
        <h3>Skill 2</h3>
        <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>s1</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>s1</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>s1</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>s1</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
      

        </div>
      </div>
    </section>
  )
}

export default Experience