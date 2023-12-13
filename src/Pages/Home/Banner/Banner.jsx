import React from 'react'
import banner from '../../../assets/Saly-13.png'
import bannerBg from '../../../assets/bg.jpg'
import pdf from '../../../assets/self-brand.pdf'

const Banner = () => {
  return (
    <div style={{
      backgroundImage: `url(${bannerBg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'

    }} className="hero py-36 bg-[#25282e]">
      <div className="hero-content flex-col lg:flex-row-reverse gap-16 rounded-3xl  border border-[#ffffff80]">
        <img src={banner} />
        <div className='text-center lg:text-start text-white'>
          <h1 className="text-3xl font-bold font-serif mb-4 ">Hi, I am</h1>
          <h1 className='text-3xl font-bold font-serif text-[#ff7214]'>Zubayer Ahmed Tanvir</h1>
          <p className='mt-2'>Email : jubayerahmedtanvi@gmail.com</p>
          <p className="pt-6 text-lg text-[#bdbcbc] font-medium">Front-end Developer</p>
          <p className=" pb-6 text-lg text-[#bdbcbc] font-medium">Started New Journey To Become A Web Developer..</p>
          <a href={pdf} download="resume"> <button className="btn bg-[#ff7214] text-white rounded-badge">Download Resume</button> </a>
        </div>

      </div>
    </div>
  )
}

export default Banner