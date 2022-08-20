import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/challenge-87efa/us-central1/api'
    // set the link to your firebase function url 
});

export default instance;
