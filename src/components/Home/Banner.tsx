import React from 'react';

const Banner = () => {
    return (
        <div>
                <img className='object-cover h-96 w-full' src={'./images/banner.jpg'} alt="" />
            <h2 className='text-secondary'>This is from banner</h2>
        </div>
    );
};

export default Banner;