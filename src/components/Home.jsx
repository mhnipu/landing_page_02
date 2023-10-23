/* eslint-disable no-unused-vars */
import React from 'react'
import banner from "../assets/banner.png";
import Banners from '../shared/Banners';
const Home = () => {
    return (
        <div className='md:px-12 p-4 max-w-screen-2xl max-h-screen-4xl mx-auto mt-24 hover:translate-y-4 transition-all duration-700'>
            <Banners banner={banner} heading=" Develop your skills without diligence" subheading="A good example of a paragraph contains a topic sentence, details and a conclusion. There are many different kinds of animals that live in China." btn1={"Get Started"} btn2={"Discount"} />
        </div>
    )
}

export default Home