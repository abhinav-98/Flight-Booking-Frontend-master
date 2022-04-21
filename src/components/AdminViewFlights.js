import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import AdminFlightService from './AdminFlightService'
import AdminNavbar from './AdminNavbar'

const ListFlightComponent = () => {

    const [flights, setFlights] = useState([])

    useEffect(() => {

        getAllFlights();
    }, [])

    const getAllFlights = () => {
        AdminFlightService.getAllFlights().then((response) => {
            setFlights(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    // const deleteFlight = (flightNo) => {
    //    FlightService.deleteFlight(flightNo).then((response) =>{
    //     getAllFlights();

    //    }).catch(error =>{
    //        console.log(error);
    //    })
        
    // }

    return (
        <>
        <AdminNavbar />
        <div className = "container">
            
           <h1> <div class="p-3 mb-2 bg-light text-dark text-center">FLIGHT LIST</div></h1>
            
            <Link to = "/add-flight" className = "btn btn-secondary mb-2" > Add Flight </Link>
            <table className="table table-success table-striped">
                <thead >
                    <th> Flight No </th>
                    <th> CarrierName </th>
                    <th> Flight Model </th>
                    <th> Seat Capacity </th>
                    <th> Actions </th>
                </thead>
                <tbody>
                    {
                        flights.map(
                            flight =>
                            <tr key = {flight.flightNo}> 
                                <td> {flight.flightNo} </td>
                                <td> {flight.carrierName} </td>
                                <td>{flight.flightModel}</td>
                                <td>{flight.seatCapacity}</td>
                                <td>
                                    <Link className="btn btn-secondary" to={`/edit-flight/${flight.flightNo}`} >Update</Link>
                                    {/* <button className = "btn btn-danger" onClick = {() => deleteFlight(flight.flightNo)}
                                    style = {{marginLeft:"10px"}}> Delete</button> */}
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div></>
    )
}

export default ListFlightComponent
