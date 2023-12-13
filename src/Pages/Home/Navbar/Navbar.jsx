import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const navLinks = <div className='lg:flex gap-14 text-xl text-white font-semibold'>
        <p>
            <NavLink className={({ isActive }) =>
                isActive ? " underline text-[#ef6f18] " : ""} to="/">Home</NavLink>
        </p>
        <p>
            <NavLink className={({ isActive }) =>
                isActive ? " underline text-[#ef6f18]" : ""} to="/projects"> Projects</NavLink>
        </p>
        <p>
            <NavLink className={({ isActive }) =>
                isActive ? " underline text-[#ef6f18]" : ""} to="/skills">
                  Skills</NavLink>
        </p>
        <p>
            <NavLink className={({ isActive }) =>
                isActive ? " underline text-[#ef6f18]" : ""} to="/resume">Resume</NavLink>
        </p>
        <p>
            <NavLink className={({ isActive }) =>
                isActive ? " underline text-[#ef6f18]" : ""} to="/aboutMe">About Me</NavLink>
        </p>
        <p>
            <NavLink className={({ isActive }) =>
                isActive ? " underline text-[#ef6f18]" : ""} to="/contact">Contact Me</NavLink>
        </p>
  
    </div>
  
    return (
        <div className=' mx-auto py-4 bg-[#1b1c1f] border-b border-gray-300'>
                <div >
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-black mt-3 z-[1] p-2 shadow rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                </div>
                <div className=" hidden  lg:flex justify-center">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
        </div>
    )
  }

export default Navbar