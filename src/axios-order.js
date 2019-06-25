import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-web-burger.firebaseio.com/'
});

export default instance;