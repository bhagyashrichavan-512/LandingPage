import React from 'react';
import './Navbar.css';
import Logo from '../img/logo.png';
import Serchbar from './Serchbar';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Think from '../img/think.jpg';

const Navbar = () => {

    const Navigate = useNavigate();

    const [click, setClick] = React.useState(false);
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);

    return (
        <>
            {/* <div className='navBar'> */}

            <nav class="navbar" >

                <div class="navbar-container container" >
                    <h1 className='s spin' onClick={() => Navigate("/")}>S</h1>
                    <input type="checkbox" name="" id="" />
                    <div class="hamburger-lines">
                        <span class="line line1"></span>
                        <span class="line line2"></span>
                        <span class="line line3"></span>
                    </div>
                    <ul class="menu-items" onClick={() => Close()}>
                        <li>
                            <Link activeClass="active" to="navbar" spy={true} smooth={true} onClick={handleClick}>
                                Home
                            </Link></li>
                        <li onClick={() => Close()}>
                            <Link to="about" spy={true} smooth={true}  >
                                About
                            </Link></li>
                        <li >
                            <Link to="services" spy={true} smooth={true} onClick={() => handleClick()} >
                                Serivces
                            </Link></li>
                        <li>
                            <Link to="contactus" spy={true} smooth={true}>
                                ContactUs
                            </Link></li>
                    </ul>
                    {/* <h1 class="logo">Navbar</h1> */}
                </div>
            </nav>
            {/* </div> */}


            <Carousel>
                <Carousel.Item interval={1500} className="CarouselI">
                    <img
                        className="d-block w-100"
                        src={Think}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="middleSec" id="navbar" onClick={() => Close()}>
                            <div className="imgSec">
                                <div className='imgContent'>
                                    <h1 className='s1'>Get Started With Conversation</h1>
                                    <h3 className='sContent'>Hi About This Me</h3>
                                    <Serchbar />
                                </div>

                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500} className="CarouselI">
                    <img
                        className="d-block w-100 "
                        src={Think}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <div className="middleSec" id="navbar" onClick={() => Close()}>
                            <div className="imgSec">
                                <div className='imgContent'>
                                    <h1 className='s1'>Get Started With Conversation</h1>
                                    <h3 className='sContent'>Hi About This Me</h3>
                                    <Serchbar />
                                </div>

                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500} className="CarouselI">
                    <img
                        className="d-block w-100"
                        src={Think}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <div className="middleSec" id="navbar" onClick={() => Close()}>
                            <div className="imgSec">
                                <div className='imgContent'>
                                    <h1 className='s1'>Get Started With Conversation</h1>
                                    <h3 className='sContent'>Hi About This Me</h3>
                                    <Serchbar />
                                </div>

                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className='bar'></div>
        </>
    );
};

export default Navbar;