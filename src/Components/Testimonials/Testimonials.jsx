import React from 'react'
import './Testimonials.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'
import profilePic5 from '../../img/profile5.jpg'
import profilePic6 from '../../img/profile6.jpg'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'

export const Testimonials = () => {
    const clients = [
        {
            img: profilePic1,
            rating: 4.8,
            review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia unde vel ea laborum et dicta molestias velit nihil deleniti distinctio."
        },
        {
            img: profilePic2,
            rating: 4.2,
            review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia unde vel ea laborum et dicta molestias velit nihil deleniti distinctio."
        },
        {
            img: profilePic3,
            rating: 5,
            review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia unde vel ea laborum et dicta molestias velit nihil deleniti distinctio."
        },
        {
            img: profilePic4,
            rating: 3.8,
            review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia unde vel ea laborum et dicta molestias velit nihil deleniti distinctio."
        },
        {
            img: profilePic5,
            rating: 4.5,
            review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia unde vel ea laborum et dicta molestias velit nihil deleniti distinctio."
        },
        {
            img: profilePic6,
            rating: 3,
            review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia unde vel ea laborum et dicta molestias velit nihil deleniti distinctio."
        }
    ]
  return (
    <div className="t-wrapper" id="Testimonials">
        <div className="t-heading">
            <span>Clients always get </span>
            <span>Exceptional Work </span>
            <span>from me...</span>
            <div className="blur t-blur1" style={{background:'var(--purple)'}}></div>
            <div className="blur t-blur2" style={{background:'skyblue'}}></div>
        </div>

        {/* Slider */}

        <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable:true}}
        >
            {clients.map((client, index)=>{
                return(
                    <SwiperSlide>
                        <div className="testimonials">
                            <img src={client.img} alt="" />
                            <span>{client.rating}/5</span>
                            <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    </div>
  )
}
