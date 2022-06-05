import React from 'react'
import './testimonials.css'
import Avatar1 from '../../assets/avatar1.jpg'
import Avatar2 from '../../assets/avatar2.jpg'
import Avatar3 from '../../assets/avatar3.jpg'
import Avatar4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




function Testimonials() {
  return (
    <section id="testimonilas">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
       >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Avatar1} alt=""/>
          </div>
          <h5 className='client__name'>Takoua Abdellatif</h5>
            <small className='client__review'>
                Recommandation .......................
            </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Avatar2} alt=""/>
          </div>
          <h5 className='client__name'>Takoua Abdellatif</h5>
            <small className='client__review'>
                Recommandation .......................
            </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Avatar3} alt=""/>
          </div>
          <h5 className='client__name'>Takoua Abdellatif</h5>
            <small className='client__review'>
                Recommandation .......................
            </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Avatar4} alt=""/>
          </div>
          <h5 className='client__name'>Takoua Abdellatif</h5>
            <small className='client__review'>
                Recommandation .......................
            </small>
        </SwiperSlide>

      </Swiper>
    </section>
  )
}

export default Testimonials