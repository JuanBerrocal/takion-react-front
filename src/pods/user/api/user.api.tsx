import Axios from "axios";
import {axiosClient} from '@/core/api';
import  { UserApi }  from "./user.api-model";

export async function getUserList(): Promise<UserApi[]> {

    //const url = "http://127.0.0.1:8000/getalluser";
    /*const ax = Axios.create({
        baseURL: 'http://localhost:8000',
        withCredentials: true,
    });*/

    try {
        const { data } = await axiosClient.get('/getalluser');
        return data;
    }
    catch (error) {
        console.log(error);
    }
}