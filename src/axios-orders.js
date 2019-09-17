import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-app-55617.firebaseio.com/'
});

export default instance;