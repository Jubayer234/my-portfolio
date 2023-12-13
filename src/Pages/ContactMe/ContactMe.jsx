import React from 'react'
import banner from '../../assets/Saly-13.png'
import bannerBg from '../../assets/bg.jpg'
import { Link } from 'react-router-dom'
import { MdEmail } from 'react-icons/md'

const ContactMe = () => {
    return (
        <div style={{
            backgroundImage: `url(${bannerBg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'

        }} className="hero py-36 flex flex-col">
            <div>
                <p className='text-2xl text-white font-bold text-center'>Contact With Me</p>
                <p className='text-xl text-white font-bold flex justify-center items-center gap-2 my-6'>  <MdEmail /> Email : jubayerahmedtanvi@gmail.com</p>
            </div>
            <div className="hero-content  gap-16 rounded-3xl  border border-[#ffffff80]">
                <div className="pt-10">
                    <h2 className='text-center pb-5 text-4xl text-white font-semibold border-b w-96 mx-auto'>Sent A Email</h2>
                    <div className="card w-[400px] mx-auto  shadow-2xl">
                        <form className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input type="email" placeholder="Enter Name" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email" placeholder="Enter Email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Massage</span>
                                </label>
                                <textarea className="textarea textarea-bordered" placeholder="sent a massage"></textarea>
                            </div>
                            
                            <div className="form-control mt-6">
                                <button className="btn  bg-gray-500 text-white text-xl font-bold ">Send</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe