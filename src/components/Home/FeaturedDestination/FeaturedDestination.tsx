import _ from 'lodash';
import React, { useEffect, useState } from 'react';

interface Destination {
    name: string,
    image: string,
    activities: number,
    _id: string
}

const FeaturedDestination = () => {
    const [destinations, setDestinations] = useState<Array<Destination>>([])
    useEffect(() => {
        fetch('./featuredDestination.json')
            .then(res => res.json())
            .then(data => setDestinations(data))
    }, [])
    const sixDestinations = _.sampleSize(destinations, 6)
    return (
        <section className=''>
            <div className='mx-auto my-10 w-5/6 '>
            <h3>Featured Destination</h3>
            <p className='mb-6 text-sm'>Popular destinations open to all visitors</p>
                <div className=' grid grid-cols-3 gap-4'>

                    {
                        sixDestinations.map(d => {
                            // console.log(d)
                            return <div className=" bg-base-100 shadow-xl image-full relative rounded-md" key={d._id}>
                                <figure><img className='opacity-100 rounded-md' src={d.image} alt={d.name} /></figure>
                                <div className="absolute bottom-10 left-5 text-white">
                                    <h3>{d.name}</h3>
                                    <p>Activities: {d.activities}</p>
                                </div>
                            </div>


                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default FeaturedDestination;