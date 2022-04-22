import axios from 'axios'

import base_url from '../api/apiURL';
// const FLIGHT_BASE_REST_API_URL = 'http://localhost:9090/api/v1/flights';

class FlightService{

    getAllFlights(){
        return axios.get(base_url+'/flight/allFlight');
    }

    createFlight(addFlight){
        return axios.post(base_url+'/flight/'+addFlight);
    }

    // getFlightByFlightNo(flightNo){
    //     return axios.get(FLIGHT_BASE_REST_API_URL + '/' + flightNo);
    // }

    // updateFlight(flightNo, flight){
    //     return axios.put(FLIGHT_BASE_REST_API_URL + '/' +flightNo, flight);
    // }

    deleteFlight(flightNo){
        return axios.delete(base_url+'/flight/deleteFlight/'+flightNo);
    }
}

export default new FlightService();