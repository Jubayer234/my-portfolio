import React from 'react'
import Skills from '../Pages/Home/Skills/Skills'
import { FaCss3, FaGithub, FaHtml5, FaJava, FaReact } from "react-icons/fa";
import { SiFirebase, SiJavascript, SiTailwindcss } from "react-icons/si";

const HaveSkill = () => {
    return (
        <div className='max-w-screen-xl mx-auto mt-16'>
            <Skills></Skills>
            <h2 className='text-4xl font-serif font-bold text-center my-6 border-b border-black pb-6 w-3/6 mx-auto'>Skill Quantity</h2>
            <div className='grid grid-cols-2 gap-6 mt-8'>
                <div>
                    <p className='text-2xl font-medium flex items-center'><FaHtml5 /> Html </p>
                    
                <div class="border-2 border-black rounded-lg">
                    <div class=" text-center w-[85%] h-full  text-white font-bold  bg-gray-400 rounded-lg">85%</div>
                </div>
                </div>
                <div>
                    <p className='text-2xl font-medium flex items-center'><FaCss3 /> Css </p>
                    
                <div class="border-2 border-black rounded-lg">
                    <div class=" text-center w-[80%] h-full  text-white font-bold  bg-gray-400 rounded-lg">80%</div>
                </div>
                </div>
                <div>
                    <p className='text-2xl font-medium flex items-center'><SiTailwindcss/> Tailwind Css </p>
                    
                <div class="border-2 border-black rounded-lg">
                    <div class=" text-center w-[85%] h-full  text-white font-bold  bg-gray-400 rounded-lg">85%</div>
                </div>
                </div>
                <div>
                    <p className='text-2xl font-medium flex items-center'><SiJavascript /> Javascript </p>
                    
                <div class="border-2 border-black rounded-lg">
                    <div class=" text-center w-[60%] h-full  text-white font-bold  bg-gray-400 rounded-lg">60%</div>
                </div>
                </div>
                <div>
                    <p className='text-2xl font-medium flex items-center'><FaReact /> React </p>
                    
                <div class="border-2 border-black rounded-lg">
                    <div class=" text-center w-[80%] h-full  text-white font-bold  bg-gray-400 rounded-lg">80%</div>
                </div>
                </div>
                <div>
                    <p className='text-2xl font-medium flex items-center'><FaGithub /> GitHub </p>
                    
                <div class="border-2 border-black rounded-lg">
                    <div class=" text-center w-[85%] h-full  text-white font-bold  bg-gray-400 rounded-lg">85%</div>
                </div>
                </div>
                <div>
                    <p className='text-2xl font-medium flex items-center'><SiFirebase /> Firebase </p>
                    
                <div class="border-2 border-black rounded-lg">
                    <div class=" text-center w-[80%] h-full  text-white font-bold  bg-gray-400 rounded-lg">80%</div>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default HaveSkill