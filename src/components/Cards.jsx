import React, { useState, useEffect } from 'react';
import './Cards.css';
import S1 from '../img/img1.png'
import S2 from '../img/img2.png'
import S3 from '../img/img3.png'
import S4 from '../img/img4.png'
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Cards = () => {

    const Navigate = useNavigate();

    const [textup, settextup] = useState(false);
    useEffect(() => {
        setTimeout(() => settextup(true), 600)
    }, []);

    return (
        <>
            <div className='serviceHead' id="services">
                <h1 className='s1'>
                    <div style={{ top: textup ? '0px' : '100px' }}>
                        Services
                    </div>
                </h1>
            </div>
            <div className='cardsC'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide className='swiperS newSS'>
                        <div className="c1">
                            <img src={S1} alt="" />
                            <div className='bton'>
                                <p className='cardContent'>Hi Hello</p>
                                <button className='button' onClick={() => Navigate("/more")}>More</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiperS'>
                        <div className="c1 c2">
                            <img src={S2} alt="" />
                            <div className='bton'>
                                <p className='cardContent'>Hi Hello</p>
                                <button className='button' onClick={() => Navigate("/more")}>More</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiperS'>
                        <div className="c1 c3">
                            <img src={S3} alt="" />
                            <div className='bton'>
                                <p className='cardContent'>Hi Hello</p>
                                <button className='button' onClick={() => Navigate("/more")}>More</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiperS'>
                        <div className="c1 c4">
                            <img src={S4} alt="" />
                            <div className='bton'>
                                <p className='cardContent'>Hi Hello</p>
                                <button className='button' onClick={() => Navigate("/more")}>More</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiperS'>
                        <div className="c1 c4">
                            <img src={S4} alt="" />
                            <div className='bton'>
                                <p className='cardContent'>Hi Hello</p>
                                <button className='button' onClick={() => Navigate("/more")}>More</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiperS'>
                        <div className="c1 c4">
                            <img src={S4} alt="" />
                            <div className='bton'>
                                <p className='cardContent'>Hi Hello</p>
                                <button className='button' onClick={() => Navigate("/more")}>More</button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='bar'></div>

        </>
    );
};

export default Cards;