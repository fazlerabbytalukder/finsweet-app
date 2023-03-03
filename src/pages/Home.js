import React from 'react';
import HeroSection from '../components/HeroSection';
import PartnerCompany from '../components/PartnerCompany';
import News from './News';
import RecentEpisode from './RecentEpisode';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <PartnerCompany />
            <RecentEpisode />
            <News/>
        </div>
    );
};

export default Home;