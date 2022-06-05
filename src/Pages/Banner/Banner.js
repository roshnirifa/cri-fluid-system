import React from 'react';
import './Banner.css'
import award from '../assets/1.png'
import award1 from '../assets/2.png'

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='award-img-1'>
                <img src={award} alt="" />
            </div>
            <div className='banner-description'>
                <div>
                    <div className='heading-text'>
                        <h3>C.R.I pumps wins the national energy conservation award 2018 for the 4th time </h3>
                    </div>
                    <div>
                        <li>C.R.I.'s energy efficient products are well rcognized by various Government Institutions, as trustworthy products various projects the globe to save energy.</li>
                        <li>
                            C.R.I. is the higest contributor in the country for the projects of ESSL(Energy Efficinecy Services Limited) to replace the old inefficent pumps with 5 Start rated energy efficinet smart pumps with loT enavble control panel
                        </li>
                    </div>
                    <div className='award-img-2'>
                        <img src={award1} alt="" />
                    </div>
                    <p>
                        Governemnt of India has awarded the <span>"National Energy Conversation Award"</span>. Mr. G.Sevaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Sabla & Shiri. Raj Kumar Singh, Honorable Minister of State
                    </p>
                </div>

            </div>

        </div>
    );
};

export default Banner;