import './Testimonials.css';
import { Data } from './Data';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function () {

    return (
        <section className="testimonial container section" id='testimonials'>
            <h2 className="section__title">My client says</h2>
            <span className="section__subtitle">Testimonials</span>

            <Swiper className="testimonial__container"
                loop={true}
                grabCursor={true}
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 48,
                    }
                }}
                modules={[Pagination]}
            >
                {Data.map(({ id, image, title,relation, description }) => {
                    return (
                        <SwiperSlide key={id} className="testimonial__card" >
                            <img src={image} alt="" className='testimonial__img' />

                            <h3 className="testimonial__name">{title}</h3>
                            <span className="testimonial__category">({relation})</span>
                            <p className="testimonial__description">{description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section >

    )
};