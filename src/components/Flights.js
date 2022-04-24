import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BookingModal from "./BookingModal";


const FlightCard=(data)=>{
    data=data.data;
    const [bookingModal,setBookingModal]=useState(false);
    const handleBook=()=>{
        setBookingModal(prev=>!prev);
    }
    const newdata=()=>{
        const booking_id=Math.ceil(Math.random()*(100000-10000)+1000);
        return {bookingId:booking_id,...data};
    }
    const boldStyle={fontWeight:'bold'}
    const buttonStyle={width:'100px',border:'1px solid crimson',color:'crimson',padding:'2px',margin:'2px'}
    return(
        <div style={{width:'60vw',border:'1px solid black',padding:'2%',margin:'5px'}}>
            <div>Airways Name:{data.name}</div>
            <div>Flight Number:{data.flightNo}</div>
            <div style={{...boldStyle}}>Origin:{data.origin}</div>
            <div>Departure Date:{data.date}</div>
            <div>Departure time:{data.departureTime}</div>
            <div style={{...boldStyle}}>Arrival:{data.destination}</div>
            <div style={{...boldStyle}}>Price :Rs.{data.price}</div>
            <button style={{...buttonStyle}} onClick={handleBook}>Book Now</button>
            {bookingModal&&<BookingModal show={bookingModal} setShowModal={setBookingModal} data={newdata()}/>}
        </div>
    )
}
export default function Flights(){
    const location=useLocation();
    const [data,setData]=useState(null);
    
    useEffect(()=>{
        console.log("We are at flights component");
        console.log(location);
        setData(location.state.data);
        },[])
    return(
        <div>
            <div>
                Searched Flights
            </div>
            {data&&data.map((d)=>{
                return(
                    <FlightCard data={d} key={d.flightNo.toString()}/>
                )
            })}
        </div>
    )
}