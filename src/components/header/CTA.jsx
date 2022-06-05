import React from 'react'
import Resume from '../../assets/sabri_mahmoudRes.pdf'
function CTA() {
  return (
    <div className='cta'>
        <a href={Resume} download className='btn'>Download My Resume</a>
        <a href="#contact" className='btn btn-primary'>Contact me</a>
    </div>
  )
}

export default CTA