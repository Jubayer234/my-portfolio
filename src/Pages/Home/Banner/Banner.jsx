import React from 'react'
import banner from '../../../assets/Saly-13.png'
import bannerBg from '../../../assets/bg.jpg'

const Banner = () => {
    return (
        <div style={{
            backgroundImage: `url(${bannerBg})`,
            backgroundRepeat : 'no-repeat',
            backgroundSize: 'cover'
            
        }} className="hero py-36 bg-[#25282e]">
  <div className="hero-content flex-col lg:flex-row-reverse gap-16 rounded-3xl  border border-[#ffffff80]">
    <img src={banner} />
    <div className='text-center lg:text-start text-white'>
      <h1 className="text-3xl font-bold font-serif mb-4 ">Hi, I am</h1>
      <h1 className='text-3xl font-bold font-serif text-[#ef6f18]'>Zubayer Ahmed Tanvir</h1>
      <p className="py-6 text-lg text-[#bdbcbc] font-medium">Front-end Developer</p>
      <button className="btn bg-[#ef6f18] text-white rounded-badge">View More</button>
    </div>
  </div>
</div>
    )
}

export default Banner