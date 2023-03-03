import React from 'react';

const About = () => {
    return (
        <div className='container mx-auto px-5 lg:px-0 pt-[90px]'>
            <div className='w-full lg:w-1/2 pl-0 lg:pl-20'>
                <h2 className='section-title w-full lg:w-1/2'>About Finsweet Podcast</h2>
                <p className='section-des pb-[32px]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                <button className='see-all-btn'>Subscribe Now</button>
            </div>
        </div>
    );
};

export default About;