import axios from 'axios'

// const URL = 'http://localhost:9090/api/v1/flights';
import base_url from '../api/apiURL';

class AdminAirportService{

    getAllAirports(){
        return axios.get(base_url+'/airport/allAirport');
    }

    createAirport(airport){
        return axios.post(base_url+'/airport/addAirport', airport)
    }

    getAirportByAirportCode(airportCode){
        return axios.get(URL + '/' + airportCode);
    }

    updateAirport(airportCode, airport){
        return axios.put(URL + '/' +airportCode, airport);
    }

    deleteAirport(airportCode){
        return axios.delete(base_url+'/airport/deleteAirport/'+airportCode);
       
    }
}

export default new AdminAirportService();