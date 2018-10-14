// import constants
import { FETCH_OPTIONS, ROOT_URL } from './constants';
// import axios
import axios from 'axios';


// Function to fetch options from the API
export function fetchOptions(searchQuery, searchDate) {
    const requestFromAPI = `${ROOT_URL}/options?search=${searchQuery}&date=${searchDate}`;
    console.log(requestFromAPI);
    let request = axios.get(requestFromAPI);
    return {
        type: FETCH_OPTIONS,
        payload: request
    }
}
