import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../../../assets/slide1.png'
import slide2 from '../../../assets/slide2.png'
import slide3 from '../../../assets/slide3.png'
import slide4 from '../../../assets/slide4.png'
import slide5 from '../../../assets/slide5.png'
import slide6 from '../../../assets/slide6.png'


const Project1 = () => {
  return (
    <div>
        <h1 className='text-center my-4 text-xl font-bold '>Project-1 :  (<span className='text-orange-500'>Pet Adoption</span>)</h1>
        <h1 className='text-center mb-4 text-xl font-medium'>See The Project : <a className='btn bg-[#ff7214] text-white rounded-badge' href="https://pet-adoption-90f1a.web.app/">Live Link</a> </h1>
        <div  className='bg-[#f8f7f3] rounded-lg shadow-lg p-8'>
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
            clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper">
        <SwiperSlide>
            <img src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide6} alt="" />
        </SwiperSlide>
    </Swiper>
        </div>
    </div>
  )
}

export default Project1