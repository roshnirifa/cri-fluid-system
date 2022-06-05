import React from 'react';
import './Footer.css'
import { FaBeer, FaPhoneAlt, FaFacebook } from 'react-icons/fa';
import { BsGlobe } from "react-icons/bs";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-content'>
                <FaPhoneAlt className='icon' />
                <p>Tool free 1800 200 1234</p>
            </div>
            <div className='footer-content'>
                <FaFacebook className='icon' />
                <p>www.facebook.com/cripumps</p>
            </div>
            <div className='footer-content'>
                <BsGlobe className='icon' />
                <p>www.crigroups.com</p>
            </div>


        </div>
    );
};

export default Footer;