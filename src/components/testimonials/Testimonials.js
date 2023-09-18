import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './testimonials.css'
import Data from './Data'
const Testimonials = () => {
    return (
        <section className='testimonials section container' id='testimonials'>
            <h2 className="section-title">My clients say</h2>
            <span className="section-subtitle">Testimonial</span>
            <Swiper className="testimonials-container "
                // install Swiper modules
                // modules={[Navigation, Pagination, Scrollbar, A11y]}
                // modules={[Pagination]}
                // loop={true}
                grabCursor
                spaceBetween={32}
                slidesPerView={1}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Pagination, Navigation]}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                // breakpoints={{
                //     640: {
                //         slidesPerView: 2,
                //         spaceBetween: 20,
                //     },
                //     768: {
                //         slidesPerView: 2,
                //         spaceBetween: 30,
                //     },
                //     1024: {
                //         slidesPerView: 2,
                //         spaceBetween: 50,
                //     },
                // }}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                        // spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 48,
                    },
                }}
            >
                {
                    Data.map((ele) => (
                        <SwiperSlide className='testimonial-card' key={ele.id}>
                            <img src={ele.image} alt='testimonial image' className='testimonial-img' />
                            <h3 className='testimonial-name'>{ele.title}</h3>
                            <p className='testimonial-description'>{ele.description}</p>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    )
}

export default Testimonials