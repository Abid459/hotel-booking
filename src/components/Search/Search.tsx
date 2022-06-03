import { faMinus, faMinusCircle, faPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ChangeEvent, FormEventHandler, HtmlHTMLAttributes, MouseEvent, MouseEventHandler, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';

const Search = () => {
    const [tabClicked, setTabClicked] = useState<string>('hotel')
    const [guestManuShow, setGuestManuShow] = useState<boolean>(false)
    const [adultCount, setAdultCount] = useState<number>(0)
    const [childrenCount, setchildrenCount] = useState<number>(0)
    const [infantsCount, setInfantsCount] = useState<number>(0)
    const [checkInVisible,setcheckInVisible] = useState<boolean>(false)
    const [checkOutVisible,setcheckOutVisible] = useState<boolean>(false)
    const [checkInDate, setCheckInDate] = useState<Date>();
    const [checkOutDate, setCheckOutDate] = useState<Date>();
    const [isLayerVisible, setIsLayerVisible] = useState<boolean>(false)


    const hideEveryThing = ():void =>{
        setGuestManuShow(false)
        setcheckInVisible(false)
        setcheckOutVisible(false)
        setIsLayerVisible(false)
    }
    const handleGuestShow = () =>{
        setGuestManuShow(!guestManuShow) 
        setIsLayerVisible(true)
    }
    const handleCheckIn = ():void =>{
        setcheckInVisible(!checkInVisible)
        setIsLayerVisible(true)
    }
    const handleCheckOut = ():void =>{
        setcheckOutVisible(!checkOutVisible)
        setIsLayerVisible(true)
    }

    return (
        <section>
            {/* screen layer  */}
            <div className={`w-full h-screen bg-transparent fixed top-0 z-30 ${!isLayerVisible&&'hidden'}`} onClick={hideEveryThing}></div>


            <div className="container">
                <div className="card overflow-visible w-5/6 bg-base-100 shadow-xl mx-auto">
                    <div className="card-body">


                        <div className="tabs relative overflow-visible" >
                            <a className={`tab tab-lifted ${'hotel' === tabClicked && 'tab-active'}`} onClick={() => setTabClicked('hotel')}>Hotel</a>
                            <a className={`tab tab-lifted ${'flight' === tabClicked && 'tab-active'}`} onClick={() => setTabClicked('flight')}>Flight</a>
                            <a className={`tab tab-lifted ${'carRental' === tabClicked && 'tab-active'}`} onClick={() => setTabClicked('carRental')}>Car Rental</a>



                            <div className='absolute right-0 z-40'>
                                <p className='cursor-pointer' onClick={handleGuestShow}>Guest
                                    <br />
                                    <span className='text-sm text-base-300'> {adultCount > 0 && adultCount + ' Adults'} </span>
                                    <span className='text-sm text-base-300'> {childrenCount > 0 && childrenCount + ' Children'} </span>
                                    <span className='text-sm text-base-300'> {infantsCount > 0 && infantsCount + ' Infants'} </span>
                                </p>
                                <ul className={`bg-base-100 border w-56 absolute right-0 rounded-box bottom-14 ${!guestManuShow && 'hidden'}`}>
                                    <li><div className='flex justify-between p-3'>
                                        <p> Adults<br /> <span className='text-xs text-base-300'>Age 13 or above </span></p>
                                        <div className='flex items-center'>
                                            <FontAwesomeIcon className='text-slate-400 bg-base-100 border-2 rounded-full p-1.5 cursor-pointer' icon={faMinus} onClick={() => adultCount > 0 && setAdultCount(adultCount - 1)}></FontAwesomeIcon>
                                            <input type="text" className='w-6 text-center bg-transparent border-0 outline-0' value={adultCount} name="adults" id="" readOnly />
                                            <FontAwesomeIcon className='text-slate-400 bg-base-100 border-2 rounded-full p-1.5 cursor-pointer' icon={faPlus} onClick={() => setAdultCount(adultCount + 1)}></FontAwesomeIcon>
                                        </div>
                                    </div></li>
                                    <hr />
                                    <li><div className='flex justify-between p-3'>
                                        <p> Children<br /> <span className='text-xs text-base-300'>Age 2-12 </span></p>
                                        <div className='flex items-center'>
                                            <FontAwesomeIcon className='text-slate-400 bg-base-100 border-2 rounded-full p-1.5 cursor-pointer' icon={faMinus} onClick={() => childrenCount > 0 && setchildrenCount(childrenCount - 1)}></FontAwesomeIcon>
                                            <input type="text" className='w-6 text-center bg-transparent border-0 outline-0' value={childrenCount} name="adults" id="" readOnly />
                                            <FontAwesomeIcon className='text-slate-400 bg-base-100 border-2 rounded-full p-1.5 cursor-pointer' icon={faPlus} onClick={() => setchildrenCount(childrenCount + 1)}></FontAwesomeIcon>
                                        </div>
                                    </div></li>
                                    <hr />
                                    <li><div className='flex justify-between p-3'>
                                        <p> Children<br /> <span className='text-xs text-base-300'>Age under 2</span></p>
                                        <div className='flex items-center'>
                                            <FontAwesomeIcon className='text-slate-400 bg-base-100 border-2 rounded-full p-1.5 cursor-pointer' icon={faMinus} onClick={() => infantsCount > 0 && setInfantsCount(infantsCount - 1)}></FontAwesomeIcon>
                                            <input type="text" className='w-6 text-center bg-transparent border-0 outline-0' value={infantsCount} name="adults" id="" readOnly />
                                            <FontAwesomeIcon className='text-slate-400 bg-base-100 border-2 rounded-full p-1.5 cursor-pointer' icon={faPlus} onClick={() => setInfantsCount(infantsCount + 1)}></FontAwesomeIcon>
                                        </div>
                                    </div></li>
                                    <hr />
                                </ul>
                            </div>



                        </div>




                        {/* Hotel element */}
                        {

                            tabClicked === 'hotel' && <div className='my-3 flex gap-4'>
                                <input type="text" placeholder="Where are you form" className="input w-full max-w-xs input-bordered" />
                                <div className='w-72  bg-base-200 p-2 relative rounded-lg' onClick={handleCheckIn}> <p className='font-semibold'>Check in</p>
                                    {checkInDate?<p className='text-sm'>{format(checkInDate, 'PP')}.</p >:  <p className='text-sm'>Add date</p>}
                                    <DayPicker className={`absolute left-0 top-16 border-2 bg-base-100 rounded-md p-3 z-40 ${!checkInVisible && 'hidden'}`}
                                        mode="single"
                                        selected={checkInDate}
                                        onSelect={setCheckInDate}
                                    />
                                </div>
                                <div className='w-72 h-14 bg-base-200 p-2 relative rounded-lg 'onClick={handleCheckOut}> <p className='font-semibold'>Check Out</p>
                                    {checkOutDate?<p className='text-sm'>{format(checkOutDate, 'PP')}.</p>:  <p className='text-sm'>Add date</p>}
                                    <DayPicker className={`absolute left-0 top-16 border-2 bg-base-100 rounded-md p-3 z-40 ${!checkOutVisible && 'hidden'}`}
                                        mode="single"
                                        selected={checkOutDate}
                                        onSelect={setCheckOutDate}
                                    />
                                </div>
                                {/* <input type="text" placeholder="Type here" className="input w-full max-w-xs input-bordered" /> */}
                                {/* <input type="text" placeholder="Type here" className="input w-full max-w-xs input-bordered" /> */}


                                <button className='btn'>SEARCH</button>
                            </div>
                        }


                    </div>
                </div>
            </div>
        </section>
    );
};

export default Search;