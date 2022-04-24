import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import AdminAirportService from './AdminAirportService'
import AdminNavbar from './AdminNavbar'

const AdminViewAirport = () => {

    const [airports, setAirports] = useState([])

    useEffect(() => {

        getAllAirports();
    }, [])

    const getAllAirports = () => {
        AdminAirportService.getAllAirports().then((response) => {
            setAirports(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteAirport = (airportCode) => {
       AdminAirportService.deleteAirport(airportCode).then((response) =>{
        getAllAirports();

       }).catch(error =>{
           console.log(error);
       })
        
    }

    return (
        <>
        <AdminNavbar />
        <div className = "container">
            
           <h1> <div class="p-3 mb-2 bg-light text-dark text-center">AIRPORT LIST</div></h1>
           <Link to = "/add-airport" className = "btn btn-secondary mb-2" > Add Airport </Link>
           
            <table className="table table-success table-striped">
                <thead >
                    <th>Airport Code</th>
                    <th> Airport Name </th>
                    <th> Airport Location </th>
                    <th> Actions </th>
                </thead>
                <tbody>
                    {
                        airports.map(
                            airport =>
                            <tr key = {airport.airportCode}> 
                                <td> {airport.airportCode} </td>
                                <td> {airport.airportName} </td>
                                <td>{airport.airportLocation}</td>
                                <td>
                                   
                                    <button className = "btn btn-danger" onClick = {() => deleteAirport(airport.airportCode)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div></>
    )
}

export default AdminViewAirport
