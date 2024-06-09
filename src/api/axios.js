import axios from 'axios';
import { clientId } from '@/app.config'
const instance = axios.create({
  baseURL: clientId, 
  headers: {
    'Content-Type': 'application/json',
  }
});
console.log(clientId)
export default instance;
