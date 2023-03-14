import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assests/173640-L.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: "Name",
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem animi cum, quo, dolorum quibusdam sunt dicta eveniet molestiae corporis facilis asperiores facere iure sit aliquid? Expedita, alias numquam. Obcaecati, veniam."
  },
  {
    avatar: AVTR1,
    name: "Name",
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem animi cum, quo, dolorum quibusdam sunt dicta eveniet molestiae corporis facilis asperiores facere iure sit aliquid? Expedita, alias numquam. Obcaecati, veniam."
  },
  {
    avatar: AVTR1,
    name: "Name",
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem animi cum, quo, dolorum quibusdam sunt dicta eveniet molestiae corporis facilis asperiores facere iure sit aliquid? Expedita, alias numquam. Obcaecati, veniam."
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews From Coworkers</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      Navigation
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) =>{
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className='client__avatar'>
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials