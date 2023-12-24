import React from 'react';
import { Link } from 'react-scroll';

const Serchbar = () => {
    return (
        <>
            <div className="inline">
                <input type="email" placeholder="Email address" className='mail' />
                <Link to="contactus" spy={true} smooth={true}>
                <button type='submit'><a href=""></a> Get Started </button>
                </Link>
            </div>
        </>
    );
};

export default Serchbar;