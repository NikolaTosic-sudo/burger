import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-3ad6b.firebaseio.com/'
})


export default instance