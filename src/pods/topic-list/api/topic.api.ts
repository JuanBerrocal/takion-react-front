
import Axios from 'axios';
import {axiosClient} from '@/core/api';
import { TopicModel } from './topic.model'

export const getTopicList = async ():Promise<TopicModel[]> => {

    /*const ax = Axios.create(
        {
            baseURL: 'http://localhost:8000',
            withCredentials: true,
        });*/

    try {
        const {data} = await axiosClient.get('/topic');
        return data;
    }
    catch {

    }

}