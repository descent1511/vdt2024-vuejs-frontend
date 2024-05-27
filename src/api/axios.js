import axios from 'axios';

const instance = axios.create({
  baseURL: "http://192.168.0.109:8000", 
  headers: {
    'Content-Type': 'application/json',
  }
});
console.log(process.env.VUE_APP_API_URL )
export default instance;
