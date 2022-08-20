import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/challenge-87efa/us-central1/api'
    // baseURL: 'https://us-central1-challenge-87efa.cloudfunctions.net/api'
});

export default instance;