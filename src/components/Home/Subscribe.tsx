import React from 'react';

const Subscribe = () => {
    return (
        <div>
            <div className="container w-5/6 mx-auto flex justify-around bg-blue-600 text-white p-10 rounded-md my-6 relative overflow-hidden">
                <img src="./images/particle.svg" className='w-14 absolute left-10 top-1 opacity-10' alt="" />
                <img src="./images/particle-1.svg" className='w-24 z-0 absolute right-96 -bottom-2 opacity-60 rotate-90' alt="" />
                <div>
                    <h2 className='text-3xl'>Get our pro offers</h2>
                    <p>Create a visual identity of your company, <br /> and an overall brand</p>
                </div>
                <div className='z-10'>
                    <div className='bg-white bordered rounded-md  w-full p-2 z-10 '>
                        <input type="text" placeholder="Type your email  here" className="outline-none text-black z-10" />
                        <button className='btn '>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;