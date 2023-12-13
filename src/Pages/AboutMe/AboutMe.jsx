import React from 'react'
import svg from '../../assets/Formula-amico 1.png'
import { MdEmail, MdOutlineLocationOn } from "react-icons/md";
import { FaSearchLocation } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <div className='max-w-screen-xl mx-auto mt-5'>
        <div className='bg-gradient-to-t from-[#4EBFE9] to-[#383D58] w-[800px] h-[800px] mx-auto rounded-full '>
            <div >
            <img className='h-[400px]' src={svg} alt="" />
            </div>
            <div className='p-10 ml-4'>
            <h3 className='text-2xl font-serif font-bold text-center text-white'>Hi I am Zubayer Ahmed Tanvir.</h3>
                <p className='font-bold py-3'>
                  I’m a web developer and a student of honours also. I’m curently learning with Programming-Hero. I’m passionate about creating digital experiences and teaching design. My goal is to become more and more skillfull... <br />
                
                </p>
                <p className='text-xl text-white font-bold flex justify-center items-center gap-2'>  <MdEmail /> Email : jubayerahmedtanvi@gmail.com</p>
                <p className='text-xl text-white font-bold text-center flex justify-center items-center gap-2'>
                <MdOutlineLocationOn /> Location : Dhaka,Bangladesh
                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutMe