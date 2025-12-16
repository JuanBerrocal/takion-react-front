
import Axios from 'axios';
import {axiosClient} from '@/core/api';
import {PostModel} from './post.model';

/*const ax = Axios.create(
    {baseURL: 'http://localhost:8000', withCredentials: true}
);*/

export const getPostList = async ():Promise<PostModel[]> => {

    try {
        const {data} = await axiosClient.get('/postlist');

        // We must set the offset for every DateTime in the array.
        let now = new Date();
        let created = new Date();
        let updated = new Date();
        let offset = now.getTimezoneOffset();
        
        data.map(post => {
            created.setTime(Date.parse(post.created));
            created.setMinutes(created.getMinutes() - offset);
            updated.setTime(Date.parse(post.updated));
            updated.setMinutes(updated.getMinutes() - offset);
            post.created = created.toISOString();
            post.updated = updated.toISOString();
        });
    
        return data;
    }
    catch (error) {
        console.log(error);
    }

}