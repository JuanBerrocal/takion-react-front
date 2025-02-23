
import Axios from 'axios';
import {LoginSession} from './login.session';
import {Login} from '@/pods/login/login.vm';
import {setHeader, headerConstants} from '@/core/api';

/*export const login = async (login: Login): Promise<LoginToken> => {

    const url = 'http://localhost:8000/login';

    try {
        const {data} = await Axios.post(url, login);
        return data;
    }
    catch (error) {
        console.log(error);
    }

}*/

export const doLogin = async (user: string, password: string): Promise<LoginSession> => {
    
    //const url = 'http://localhost:8000/login';    

    try {
        //Axios.defaults.withCredentials = true;
        const ax = Axios.create({
            baseURL: 'http://localhost:8000',
            withCredentials: true,
          });

        const {data} = await ax.post<LoginSession>('/login', {user, password});
        
        // When we use cookies, we don't need this any longer.
        //setHeader(headerConstants.authorization, data.token);
        return data;
    }
    catch (error) {
        console.log(error);
    }
}