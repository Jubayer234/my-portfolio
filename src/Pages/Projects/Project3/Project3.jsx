import React from 'react'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import slide12 from '../../../assets/slide12.png'
import slide13 from '../../../assets/slide13.png'
import slide14 from '../../../assets/slide14.png'
import slide15 from '../../../assets/slide15.png'
import slide16 from '../../../assets/slide16.png'
import { Link } from 'react-router-dom'

const Project3 = () => {
  return (
    <div className='mt-10'>
        <h1 className='text-center my-4 text-xl font-bold '>Project-3 :  (<span className='text-orange-500'>Social Event</span>)</h1>
        <h1 className='text-center mb-4 text-xl font-medium'>See The Project : <a className='btn bg-[#ff7214] text-white rounded-badge' href="https://react-router-assignment-9.web.app/">Live Link</a> </h1>
        <div className='bg-[#f8f7f3] rounded-lg shadow-lg p-8'>
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
            <img src={slide12} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide13} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide14} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide15} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide16} alt="" />
        </SwiperSlide>
    </Swiper>
        </div>
        </div>
  )
}

export default Project3