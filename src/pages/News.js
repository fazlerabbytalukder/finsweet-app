import React from 'react';
import newsImg1 from '../images/news-img-1.png'
import newsImg2 from '../images/news-img-2.png'
import cardMask from '../images/Mask Group.svg'

const News = () => {
    return (
        <div className='container mx-auto pb-[50px]'>
            {/* news cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
                {/* single card */}
                <div className="bg-offWhite h-full">
                    <div>
                        <h2 className='text-[32px] font-bold leading-[120%] text-blackish px-[40px] pt-[40px] pb-[16px]'>Read our articles & news</h2>
                        <button className='read-now-btn pl-[40px] pb-[70px]'>See More</button>
                    </div>
                    <div className='card-img'>
                        <img className="img-size" src={cardMask} alt="card-img" />
                    </div>
                </div>
                {/* single card */}
                <div className="bg-white">
                    <div className='card-img'>
                        <img className="img-size" src={newsImg2} alt="card-img" />
                    </div>
                    <div className="card-text">
                        <h3 className='card-title'>Getting the first 100 customers for your business</h3>
                        <p className='card-text'>Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
                        <button className='read-now-btn'>Read Now</button>
                    </div>
                </div>
                {/* single card */}
                <div className="bg-white">
                <div className='card-img'>
                        <img className="img-size" src={newsImg1} alt="card-img" />
                    </div>
                    <div className="card-text">
                        <h3 className='card-title'>Apparently we had reached a great height in the atmosphere, ...</h3>
                        <p className='card-text'>Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
                        <button className='read-now-btn'>Read Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;