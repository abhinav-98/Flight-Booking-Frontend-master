import React,{useRef,useState,useEffect} from 'react'
import './modal.css';

export default function BookingModal({data=null,show,setShowModal}) {
    const modelref=useRef();
    console.log(data)
    const [bookingData,setBookingData]=useState(null);
    const closeModel=e=>{
        if(modelref.current===e.target)
        {
            setShowModal(false);
        }
    }
    return (
        <div>
       {show?
            <div className="main-container" ref={modelref} onClick={closeModel}>
            <div className="sub-container">
                <div className="labels">
                    <span>Your booking is succesfull</span>
                </div>
                {data&&
                <div className="message">
                    <div className="dt">
                        <span>Booking id</span>
                        <span>{data.bookingId}</span>
                    </div>
                    <div className="dt">
                        <span>Flight Number</span>
                        <span>{data.flightNo}</span>
                    </div>
                    <div className="dt">
                        <span>From</span>
                        <span>{data.origin}</span>
                    </div>
                    <div className="dt">
                        <span>To</span>
                        <span>{data.destination}</span>
                    </div>
                    <div className="dt">
                        <span>Departure Date</span>
                        <span>{data.date}</span>
                    </div>
                    <div className="dt">
                        <span>Departure Time</span>
                        <span>{data.departureTime}</span>
                    </div>
                    <div className="dt"></div>
                </div>
                }
                <button onClick={()=>{setShowModal(false)}}>Close</button>
            </div>
            </div>
            :null
       }
       </div>
    )
}
