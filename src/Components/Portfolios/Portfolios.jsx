import React from 'react'
import './Portfolios.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import Ecommerce from '../../img/ecommerce.png'
import HOC from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'

export const Portfolios = () => {
  return (
    <div className='portfolio' id='Portfolio'>
      {/* Heading */}
      <span>Recent Projects</span>
      <span>Portfolio</span>

      {/* Slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >

        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>

      </Swiper>
    </div>
  )
}
