import Axios from 'axios';

//const baseURL = process.env.API_URL || 'http://localhost:8000';

const baseURL = 'https://takion-1.onrender.com';
//const baseURL = 'http://localhost:8000';

export const axiosClient = Axios.create({
            baseURL,
            withCredentials: true,
          });
