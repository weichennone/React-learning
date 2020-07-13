import axios from 'axios';

const instance = axios.create({
    baseURL: "https://react-my-burger-758ab.firebaseio.com/"
});

export default instance;