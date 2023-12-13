import React from 'react'
import Marquee from 'react-fast-marquee'

const Skills = () => {

    return (
        <div className='max-w-7xl mx-auto bg-[#bbb9b9] -mt-16 p-5 rounded-md'>
            <h4 className='text-center text-white font-serif font-bold text-3xl pb-3 border-b mb-5'>Skills</h4>
            <Marquee pauseOnHover= {true} speed={100} >
                <a href="https://skillicons.dev">
                    <img src="https://skillicons.dev/icons?i=github,html,css,tailwind,javascript,react,firebase" />
                </a>
            </Marquee>
        </div>
    )
}

export default Skills