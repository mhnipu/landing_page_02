/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import about1 from '../assets/about1.png'
const About = () => {
    return (
        <div className="md:px-14 p-4 max-w-screen mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 hover:translate-y-4 transition-all duration-500">
                <div className="md:w-1/2 hover:scale-90 translate-y-4 transition-all duration-500">
                    <img src={about1} alt="" />
                </div>
                {/* about content */}
                <div className='md:w-2/5'>
                    <h2 className="md:text-5xl text-3xl font-bold text-NeviDBlue mb-5 leading-normal ">We have been improving our product <span className='text-televersantBlue'>for many years.</span></h2>
                    <p className='text-DarkGray text-lg mb-7'>A good example of a paragraph contains a topic conclusion.
                        'There are many different kinds of animals that live in China.</p>
                    <button className='btn-primary'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default About