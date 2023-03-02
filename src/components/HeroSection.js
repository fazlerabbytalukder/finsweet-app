import React from 'react';
import soundImg from '../images/Audio track.svg'

const HeroSection = () => {
    return (
        <div className='container mx-auto py-[50px] lg:py-[100px] font-inter'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 place-items-center">
                <div className='flex flex-col items-center'>
                    <div className='w-2/3'>
                        <h1 className='website-heding'>Become The Hero Of Your Own Story</h1>
                        <p className='about-website'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                    </div>
                    <div className="search-box flex items-center">
                        <input className='input-style' type="text" placeholder='Enter Your Email id' />
                        <button className='subscribe-button'>Subscribe</button>
                    </div>
                </div>
                <div className='hidden lg:block'>
                    <img src={soundImg} alt="audio track" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;