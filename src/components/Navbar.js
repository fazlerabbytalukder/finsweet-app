import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Logo.svg';

const Navbar = () => {
    return (
        <header className='px-5 lg:px-0'>
            <div className="container mx-auto flex justify-between items-center py-[26px]">
                <Link to='/' className="logo">
                    <img src={logo} alt="logo" />
                </Link>
                <ul>
                    <li>
                        <Link to='/about'><button className='font-inter h5 font-semibold'>About</button></Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;