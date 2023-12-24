import React from 'react';
import './Footer.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <>
            <div className='bar'></div>
            <div className="Footer" id="foot">
                <div className="foot">
                    <h1 className='s1 fHead'>Address</h1>
                    <h4 className='fc'>Kothrud Pune-411052</h4>
                    <h4 className='fc'>Mob-Number:- <span className='number'><a href='tel:+917083570970'>+917666742262</a></span></h4>
                    <h4 className='fc'>EmailId:- <span className='number'><a href='mailto:/sandeshpatil0008@gmail.com'>
                       chavanbhagyashri512@gmail.com
                    </a>
                    </span></h4>
                   

                </div>
                <div className="foot">
                    <h1 className='s1 fHead'>Social Media</h1>
                    <a href="https://github.com/sandeshpatil-008" target="_blank">
                        <GitHubIcon className='icon i1 ig' style={{ fontSize: '2rem' }} />
                    </a>
                    <a href="'https://www.facebook.com/profile.php?id=100008023876305'" target="_blank">
                        <FacebookIcon className='icon i1 if' style={{ fontSize: '2rem' }} />
                    </a>
                    <a href="https://instagram.com/sandeshpatil008?igshid=YmMyMTA2M2Y=" target="_blank">
                        <InstagramIcon className='icon i1' style={{ fontSize: '2rem' }} />
                    </a>
                    <a href="https://wa.me/+917083570970" target="_blank">
                        <WhatsAppIcon className='icon iw' style={{ fontSize: '2rem' }} />
                    </a>
                </div>
                <div className="foot line">
                    <h1 className='s1 fHead'>Other</h1>
                    <li className='li'>
                        <Link to="navbar" spy={true} smooth={true}>
                        Home
                    </Link></li>
                    <li className='li'>
                        <Link to="about" spy={true} smooth={true}>
                        About
                    </Link>
                    </li>
                    <li className='li'>
                        <Link to="services" spy={true} smooth={true}>
                        Services
                    </Link></li>
                    <li className='li'>
                        <Link to="contactus" spy={true} smooth={true}>
                        ContactUs
                    </Link></li>
                </div>
                <Link to="navbar" spy={true} smooth={true}>
                        <div className='top' >
                            <ArrowDropUpIcon className='arrowUp' />
                        </div>
                    </Link>
            </div>
            <div className='bar'></div>

        </>
    );
};

export default Footer;