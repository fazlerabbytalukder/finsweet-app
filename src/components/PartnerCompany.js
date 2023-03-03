import React from 'react';
import podcast from '../images/Podcast Available On.svg';
import applePodcast from '../images/Apple Podcast.svg';
import soundCloud from '../images/Sound Cloud.svg';
import googlePodcast from '../images/Google Podcast.svg';
import spotify from '../images/Spotify.svg';

const PartnerCompany = () => {
    return (
        <div className='container mx-auto mb-[50px] lg:mb-[140px] px-5 lg:px-0'>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-5 place-items-center">
                <div>
                    <img className='object-cover object-center' src={podcast} alt="podcast" />
                </div>
                <div>
                    <img className='object-cover object-center' src={applePodcast} alt="podcast" />
                </div>
                <div>
                    <img className='object-cover object-center' src={soundCloud} alt="podcast" />
                </div>
                <div>
                    <img className='object-cover object-center' src={spotify} alt="podcast" />
                </div>
                <div>
                    <img className='object-cover object-center' src={googlePodcast} alt="podcast" />
                </div>
            </div>
        </div>
    );
};

export default PartnerCompany;