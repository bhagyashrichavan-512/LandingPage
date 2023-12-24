import React, { useState, useEffect } from 'react';
import Servicecard from './Servicecard';
import S1 from '../img/img1.png'
import S2 from '../img/img2.png'
import S3 from '../img/img3.png'
import S4 from '../img/img4.png'
const Services = () => {

    const [textup, settextup] = useState(false);
    useEffect(() => {
        setTimeout(() => settextup(true), 600)
    }, []);



   
    return (
        <>
            <div className='serviceHead' id="about">
                <h1 className='s1'>
                    <div style={{ top: textup ? '0px' : '100px' }}>
                        About
                    </div>
                </h1>
            </div>
            <div className="services">
                <Servicecard
                    content="  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos quia, blanditiis,
                                eius id consectetur cum error repellendus ullam molestiae dolorum iusto ab adipisci saepe atque magnam aliquid vero,
                                 a maiores."
                    image={S1}
                />
                <div className='bar1'></div>
                <div style={{ flexDirection: "row-reverse", direction: "rtl" }}>
                    <Servicecard
                        content="  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos quia, blanditiis,
                                eius id consectetur cum error repellendus ullam molestiae dolorum iusto ab adipisci saepe atque magnam aliquid vero,
                                 a maiores."
                        image={S2}
                    />
                </div>
                <div className='bar1'></div>
                <Servicecard
                    content="  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos quia, blanditiis,
                                eius id consectetur cum error repellendus ullam molestiae dolorum iusto ab adipisci saepe atque magnam aliquid vero,
                                 a maiores."
                    image={S3}
                />
                <div className='bar1'></div>
                <div style={{ flexDirection: "row-reverse", direction: "rtl" }}>
                    <Servicecard
                        content="  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos quia, blanditiis,
                                eius id consectetur cum error repellendus ullam molestiae dolorum iusto ab adipisci saepe atque magnam aliquid vero,
                                 a maiores."
                        image={S4}
                    />
                </div>
            </div>
            <div className='bar'></div>
        </>
    );
};

export default Services;