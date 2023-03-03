import React from 'react';
import logo from '../images/Brand.svg';
import applePodcast from '../images/Apple Podcast.png';
import soundCloud from '../images/Soundcloud.png';
import googlePodcast from '../images/Google Podcast.png';
import spotify from '../images/Spotify.png';
import sponsorLogo1 from '../images/sponsor (1).svg';
import sponsorLogo2 from '../images/sponsor (2).svg';
import sponsorLogo3 from '../images/sponsor (3).svg';
import sponsorLogo4 from '../images/sponsor (4).svg';
import sponsorLogo5 from '../images/sponsor (5).svg';

const url = 'https://fazlerabbytalukder.netlify.app/';

const Footer = () => {
    return (
        <>
            {/* footer top */}
            <div className='container mx-auto bg-bluesh font-inter relative translate-y-[35%]'>
                <div className='flex justify-center items-center pt-[72px]'>
                    <h3 className='text-h2 font-bold leading-[120%] text-white'>Our Sponsors </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center gap-5 py-[60px]">
                    <div>
                        <img src={sponsorLogo1} alt="sponsor logo" />
                    </div>
                    <div>
                        <img src={sponsorLogo2} alt="sponsor logo" />
                    </div>
                    <div>
                        <img src={sponsorLogo3} alt="sponsor logo" />
                    </div>
                    <div>
                        <img src={sponsorLogo4} alt="sponsor logo" />
                    </div>
                    <div>
                        <img src={sponsorLogo5} alt="sponsor logo" />
                    </div>
                </div>
            </div>
            {/* main footer  */}
            <footer className='bg-blackish text-white font-inter pt-[192px]'>
                <div className="container mx-auto">
                    <div className="pb-8">
                        <div className="grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
                            <div>
                                <img src={logo} alt="logo" />
                            </div>
                            <div>
                                <h2 className="footer-header">Pages</h2>
                                <ul className="">
                                    <li className="mb-4">
                                        <a href={url} className="footer-tag">Home</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href={url} className="footer-tag">Podcast</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href={url} className="footer-tag">Host</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href={url} className="footer-tag">Blog</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="footer-header">Reach Us</h2>
                                <ul className="">
                                    <li className="mb-4">
                                        <a href={url} className="footer-tag">Contact</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href={url} className="footer-tag">About</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="footer-header">Subscribe</h2>
                                <ul className="">
                                    <li className="mb-6">
                                        <a href={url} className="">
                                            <img src={applePodcast} alt="apple podcast" />
                                        </a>
                                    </li>
                                    <li className="mb-6">
                                        <a href={url} className="">
                                            <img src={googlePodcast} alt="apple podcast" />
                                        </a>
                                    </li>
                                    <li className="mb-6">
                                        <a href={url} className="">
                                            <img src={soundCloud} alt="apple podcast" />
                                        </a>
                                    </li>
                                    <li className="mb-6">
                                        <a href={url} className="">
                                            <img src={spotify} alt="apple podcast" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-bluesh py-[20px] flex justify-center items-center'>
                    <p>© Copyright Finsweet 2021</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;