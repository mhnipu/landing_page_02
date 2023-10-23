/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { GrLanguage } from 'react-icons/gr';
import { FaBars, FaXmark } from 'react-icons/fa6'
import logo_2 from '../assets/logo_2.png'
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    const navItems = [
        { link: 'Overview', path: 'home' },
        { link: 'Feature', path: 'feature' },
        { link: 'About', path: 'about' },
        { link: 'Pricing', path: 'pricing' },

    ];
    return (
        <>
            <nav className='backdrop-filter backdrop-blur-lg bg-opacity-60  bg-white md:px-14 p-4 max-w-screen-2xl  mx-auto text-NeviDBlue fixed top-0 right-0 left-0 font-bold'>
                <div className='text-lg container mx-auto flex justify-between items-center font-medium ' >
                    <div className='flex space-x-14 items-center'>
                        <a href="/" className='text-3xl  text-bold flex items-center space-x-3 text-lightGray  '><img src={logo_2} alt="" className='w-21 h-13 inline-block items-center hover:scale-95 transition-all duration-300' /></a>
                        {/* showing navItems using map */}
                        <ul className='md:flex space-x-12 hidden '>
                            {
                                navItems.map(({
                                    link, path
                                }) => <a key={link} href={path} className='block hover:text-televersantBlue hover:scale-95 transition-all duration-300'>{link}</a>)
                            }
                        </ul>
                    </div>
                    {/* language btn & signup btn */}
                    <div className="space-x-12 hidden md:flex items-center">
                        <a href="" className="hidden lg:flex items-center hover:scale-95 transition-all duration-300 text-televersantBlue"><GrLanguage className='mr-2' /><span>Language</span></a>
                        <button className="btn-primary">Sign up</button>
                    </div>
                    {/* menu btn only mobile display */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white  focus:outline-none focus:text-gray-300 ">
                            {
                                isMenuOpen ? (<FaXmark className='w-6 h-6 text-televersantBlue' />) : (<FaBars className='w-6 h-6 text-televersantBlue' />)
                            }
                        </button>
                    </div>
                </div>
            </nav>
            <div className={`backdrop-filter backdrop-blur-lg bg-opacity-60 space-y-4 px-5 pt-24 pb-5 bg-televersantlightBlue text-lg ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"} `}>
                {
                    navItems.map(({
                        link, path
                    }) => <a key={link} href={path} className='block hover:text-televersantBlue hover:scale-95 transition-all duration-300'>{link}</a>)
                }
            </div>
        </>
    )
}

export default Navbar