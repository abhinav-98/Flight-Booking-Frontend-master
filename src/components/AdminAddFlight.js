import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams } from 'react-router-dom';
import AdminFlightService from './AdminFlightService';

const AddEmployeeComponent = () => {

    const [carrierName, setCarrierName] = useState('')
    const [flightModel, setFlightModel] = useState('')
    const [seatCapacity, setSeatCapacity] = useState('')
    const history = useHistory();
    const {flightNo} = useParams();

    const saveOrUpdateFlight = (e) => {
        e.preventDefault();

        const flight = {carrierName, flightModel, seatCapacity}

        if(flightNo){
            AdminFlightService.updateFlight(flightNo, flight).then((response) => {
                history.push('/flights')
            }).catch(error => {
                console.log(error)
            })

        }else{
            AdminFlightService.createFlight(flight).then((response) =>{

                console.log(response.data)
    
                history.push('/flights');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        AdminFlightService.getFlightByFlightNo(flightNo).then((response) =>{
            setCarrierName(response.data.carrierName)
            setFlightModel(response.data.flightModel)
            setSeatCapacity(response.data.seatCapacity)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(flightNo){
            return <h2 className = "text-center">Update Flight</h2>
        }else{
            return <h2 className = "text-center">Add Flight</h2>
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
                                    <label className = "form-label"> Carrier Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "carrier name"
                                        name = "carrierName"
                                        className = "form-control"
                                        value = {carrierName}
                                        onChange = {(e) => setCarrierName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Flight Model :</label>
                                    <input
                                        type = "text"
                                        placeholder = "flight model"
                                        name = "flightModel"
                                        className = "form-control"
                                        value = {flightModel}
                                        onChange = {(e) => setFlightModel(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Seat Capacity :</label>
                                    <input
                                        type = "number"
                                        placeholder = "seat capacity"
                                        name = "seatCapacity"
                                        className = "form-control"
                                        value = {seatCapacity}
                                        onChange = {(e) => setSeatCapacity(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateFlight(e)} >Submit </button>
                                <Link to="/flights" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddEmployeeComponent
