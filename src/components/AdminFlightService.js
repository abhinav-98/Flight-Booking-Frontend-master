import axios from 'axios'

import apiUrl from '../api/apiURL';
// const FLIGHT_BASE_REST_API_URL = 'http://localhost:9090/api/v1/flights';

class FlightService{

    getAllFlights(){
        return axios.get(apiUrl+'/flight/allFlight');
    }

    // createFlight(flight){
    //     return axios.post(FLIGHT_BASE_REST_API_URL, flight)
    // }

    // getFlightByFlightNo(flightNo){
    //     return axios.get(FLIGHT_BASE_REST_API_URL + '/' + flightNo);
    // }

    // updateFlight(flightNo, flight){
    //     return axios.put(FLIGHT_BASE_REST_API_URL + '/' +flightNo, flight);
    // }

    // deleteFlight(flightNo){
    //     return axios.delete(FLIGHT_BASE_REST_API_URL + '/' + flightNo);
    // }
}

export default new FlightService();