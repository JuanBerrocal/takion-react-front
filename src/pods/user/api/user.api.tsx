import Axios from "axios";
import  { UserApi }  from "./user.api-model";

export async function getUserList(): Promise<UserApi[]> {

    //const url = "http://127.0.0.1:8000/getalluser";
    const ax = Axios.create({
        baseURL: 'http://localhost:8000',
        withCredentials: true,
    });

    try {
        const { data } = await ax.get('/getalluser');
        return data;
    }
    catch (error) {
        console.log(error);
    }
}