import React from 'react';
import cardImg1 from '../images/card-img-1.png';
import cardImg2 from '../images/card-img-2.png';
import cardImg3 from '../images/card-img-3.png';
import audioTrack from '../images/Icon.svg';
import soundCloud from '../images/Episode Icon.svg';

const RecentEpisode = () => {
    return (
        <div className='container mx-auto font-inter px-5 lg:px-0 mb-[50px] lg:mb-[120px]'>
            {/* header part */}
            <div className="header-part">
                <div className='header-text'>
                    <h2 className='section-title'>Recent Episodes</h2>
                    <p className='section-des'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black.</p>
                </div>
                <div className='header-btn'>
                    <button className='see-all-btn'>See All Episode</button>
                </div>
            </div>
            {/* recent episode cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* single card */}
                <div className="bg-white">
                    <div className='card-img relative'>
                        <img className="img-size" src={cardImg1} alt="card-img" />
                        <div className='absolute top-4 right-4'>
                            <img src={soundCloud} alt="soundCloud" />
                        </div>
                    </div>
                    <div className="card-text">
                        <h3 className='card-title'>Ep 1: How to build a world-class business brand</h3>
                        <p className='card-text'>Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
                        <button className='card-btn flex items-center'>
                            <img className='mr-2' src={audioTrack} alt="audioTrack" />
                            <span>Listen Now</span>
                        </button>
                    </div>
                </div>
                {/* single card */}
                <div className="bg-white">
                    <div className='card-img relative'>
                        <img className="img-size" src={cardImg2} alt="card-img" />
                        <div className='absolute top-4 right-4'>
                            <img src={soundCloud} alt="soundCloud" />
                        </div>
                    </div>
                    <div className="card-text">
                        <h3 className='card-title'>Ep 2: Getting the first 100 customers for your business</h3>
                        <p className='card-text'>Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
                        <button className='card-btn flex items-center'>
                            <img className='mr-2' src={audioTrack} alt="audioTrack" />
                            <span>Listen Now</span>
                        </button>
                    </div>
                </div>
                {/* single card */}
                <div className="bg-white">
                    <div className='card-img relative'>
                        <img className="img-size" src={cardImg3} alt="card-img" />
                        <div className='absolute top-4 right-4'>
                            <img src={soundCloud} alt="soundCloud" />
                        </div>
                    </div>
                    <div className="card-text">
                        <h3 className='card-title'>Ep 3: Should I raise money for my startup, or not?</h3>
                        <p className='card-text'>Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
                        <button className='card-btn flex items-center'>
                            <img className='mr-2' src={audioTrack} alt="audioTrack" />
                            <span>Listen Now</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentEpisode;