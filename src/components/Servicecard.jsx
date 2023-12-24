import React, { useState, useEffect } from 'react';

const Servicecard = (props) => {

    const [textup, settextup] = useState(false);
    useEffect(() => {
        setTimeout(() => settextup(true), 600)
    }, []);

    return (
        <>
            <div className='servicCard'>
                <h3 className='contentS fadUp'>
                    <div style={{ top: textup ? '0px' : '18px' }}>
                        {props.content}
                    </div>
                </h3>
                <img src={props.image} alt="" />
            </div>
        </>
    );
};

export default Servicecard;