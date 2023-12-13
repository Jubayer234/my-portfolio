import React from 'react'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import slide7 from '../../../assets/slide7.png'
import slide8 from '../../../assets/slide8.png'
import slide9 from '../../../assets/slide9.png'
import slide10 from '../../../assets/slide10.png'
import slide11 from '../../../assets/slide11.png'

const Project2 = () => {
  return (
    <div className='mt-10'>
        <h1 className='text-center my-4 text-xl font-bold '>Project-2 :  (<span className='text-orange-500'>Library Management</span>)</h1>
        <h1 className='text-center mb-4 text-xl font-medium'>See The Project : <a className='btn bg-[#ff7214] text-white rounded-badge' href="https://library-management-f4870.web.app/">Live Link</a> </h1>
        <div className='bg-white rounded-lg shadow-lg p-8'>
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
            <img src={slide7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide9} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide10} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide11} alt="" />
        </SwiperSlide>
    </Swiper>
        </div>
        </div>
  )
}

export default Project2