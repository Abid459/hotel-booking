import { faAngleDoubleRight, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { HtmlHTMLAttributes, useEffect, useLayoutEffect, useRef, useState } from 'react';
import Slider from "react-slick";
import { TimerOptions } from 'timers';
import './TopTour.css'


// Import css files


interface tour {
    _id: number,
    name: string,
    image: string

}

const TopTour = () => {
    let [count,setCount] = useState<any>(2)
    // const [stopInterval,setStopInterval] = useState(false)
    // const id = useRef<any>()
    // const distanceRef = useRef<any>(0)
    const wrapper = useRef<any>()
    const [topTours, setTopTours] = useState<Array<tour>>([])
    useEffect(() => {
        fetch('./topTour.json')
            .then(res => res.json())
            .then(data => setTopTours(data))
    }, [])


    // const mouseScroll = (e:any) =>{
    //     const iconBtn = e.target.dataset.icon;
    //     console.log('important event',e.target.dataset.icon)
    //     console.log('type', e.type)
    //     if(e.type === 'mousedown'){
    //         let distance = 0;
    //            let scrollInterval = setInterval(()=>{
    //                 iconBtn === 'angle-right' ? wrapper.current.scrollTo({ left:wrapper.current.scrollLeft +=count, behavior: 'smooth' }): wrapper.current.scrollTo({ left:wrapper.current.scrollLeft -= count, behavior: 'smooth' })
    //                 wrapper.current.scrollIntoView({behavior: 'smooth'})
    //                 distance++
    //                 if(distance >= 300){
    //                     // distanceRef.current = ;
    //                     clearInterval(scrollInterval)
    //                     }
    //             },1)
    //             id.current=scrollInterval;
    //         }
    //         else if(e.type === 'mouseup' ){
                
    //              console.log(distanceRef.current)
    //             //  distanceRef.current>=300 && clearInterval(id.current)
    //         // distanceRef.current = 0;
    //         // clearInterval(idClick.current)
    //     }
    // }

    const clickScroll = (e:any) =>{
        const iconBtn = e.target.dataset.icon;
        let distance = 0;
        let clickScrollInterval = setInterval(()=>{
            iconBtn === 'angle-right' ? wrapper.current.scrollTo({ left:wrapper.current.scrollLeft +=count, behavior: 'smooth' }): wrapper.current.scrollTo({ left:wrapper.current.scrollLeft -= count, behavior: 'smooth' })
            wrapper.current.scrollIntoView({behavior: 'smooth'})
            distance++;
            console.log(distance)
            // idClick.current=clickScrollInterval;
            if(distance >= 200){
            console.log('inside')
                clearInterval(clickScrollInterval)
            }
        },1)
    }

  

    // const settings:any = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    //   };

    return (
        <section>
            <div className="container w-5/6 mx-auto my-10">
                <div className='flex justify-between'>
                <h3>Top Tour</h3>
                <div >
                <FontAwesomeIcon className='p-3 cursor-pointer bg-base-300 rounded-full w-3 h-3 mr-2 select-none' icon={faAngleLeft} onClick={clickScroll}></FontAwesomeIcon>
                <FontAwesomeIcon className='p-3 cursor-pointer bg-base-300 rounded-full w-3 h-3 select-none' icon={faAngleRight} onClick={clickScroll}></FontAwesomeIcon>
                </div>
                </div>
                <div ref={wrapper} className=' wrapper  w-full overflow-x-scroll  scrollba gap-3 flex '>

                    
             

                {
                    topTours.map(t => {
                        return <div className=" bg-base-100 w-80 flex-shrink-0 shadow-xl image-full rounded-md" key={t._id}>
                        <figure><img className='opacity-100 rounded-md' src={t.image} alt={t.name} /></figure>
                        <div className=" bottom-10 left-5 text-white">
                            <h3>{t.name}</h3>
                            {/* <p>Activities: {d.activities}</p> */}
                        </div>
                    </div>                     
                    })
                }
                </div>

            </div>
        </section>
    );
};

export default TopTour;