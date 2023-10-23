/* eslint-disable no-unused-vars */
import React from 'react'
import banner from "../assets/banner.png";
const Banners = ({ banner, heading, subheading, btn1, btn2 }) => {
    return (
        <div className='gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9 '>
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
                <div className='hover:scale-90 translate-y-4 transition-all duration-500'>
                    <img src={banner} alt="" className='lg:h-[386px]' />
                </div>
                {/* banner Content */}
                <div className='md:w-3/5 '>
                    <h2 className='md:text-7xl text-3xl font-bold text-white mb-6 leading-relaxed hover:scale-90 transition-all duration-500'>
                        {heading}
                    </h2>
                    <p className='text-[#EBEBEB] text-2xl mb-8 hover:scale-90 transition-all duration-500'>{subheading}</p>
                    <div className='space-x-5 space-y-4'>
                        <button className='btnSecondary'>{btn1}</button>
                        <button className='btnSecondary'>{btn2}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banners