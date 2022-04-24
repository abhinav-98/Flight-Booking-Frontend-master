import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import AdminAirportService from './AdminAirportService';

const AdminAddAirport = () => {

    const [airportName, setAirportName] = useState('')
    const [airportLocation, setAirportLocation] = useState('')
    
    // const history = useHistory();
    const navigate = useNavigate();
    const {airportCode} = useParams();

    const saveOrUpdateAirport = (e) => {
        e.preventDefault();
        

        const airport = {airportName, airportLocation}

        if(airportCode){
            AdminAirportService.updateAirport(airportCode, airport).then((response) => {
                
                navigate('/airports')
            }).catch(error => {
                console.log(error)
            })

        }else{
            AdminAirportService.createAirport(airport).then((response) =>{

                console.log(response.data)
    
                navigate('/airports')
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        AdminAirportService.getAirportByAirportCode(airportCode).then((response) =>{
            setAirportName(response.data.airportName)
            setAirportLocation(response.data.airportCode)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(airportCode){
            return <h2 className = "text-center">Airport Name</h2>
        }else{
            return <h2 className = "text-center">Airport Location</h2>
        }
    }

    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           title()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Airport Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "airport name"
                                        name = "airportName"
                                        className = "form-control"
                                        value = {airportName}
                                        onChange = {(e) => setAirportName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Airport Location :</label>
                                    <input
                                        type = "text"
                                        placeholder = "airport location"
                                        name = "airportLocation"
                                        className = "form-control"
                                        value = {airportLocation}
                                        onChange = {(e) => setAirportLocation(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateAirport(e)} >Submit </button>
                                <Link to="/airports" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AdminAddAirport
