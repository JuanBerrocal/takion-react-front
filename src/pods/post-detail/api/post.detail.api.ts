import Axios from 'axios';
import {axiosClient} from '@/core/api'
import { generatePath } from "react-router-dom";

import { PostModel } from '@/pods/post-list/api/post.model';

export const doWritePost = async (isNewPost: boolean, post: PostModel) => {

    // Creates axios instance.
    /*const ax = Axios.create({
        baseURL: 'http://localhost:8000',
        withCredentials: true
    });*/

    try {
        var now = new Date();
        post.updated = now.toISOString();

        if (isNewPost) {
            post.created = now.toISOString();
            const response = await axiosClient.post('/postinsert', post);
            return response;
        }
        else {
            
            const response = await axiosClient.post(`/postupdate/${post.id}`, post);
            return response;
        }
    }
    catch (error) {
        console.log(error);
    }
}

export const readPost = async (postId: string) => {
    /*const ax = Axios.create({
        baseURL: 'http://localhost:8000',
        withCredentials: true
    });*/

    try {
        console.log(`/postread/${postId}`);
        const { data } = await axiosClient.get(`/postread/${postId}`);

        console.log("DEBUG. El ID del post leido es: ", data['id']);
        console.log("DEBUG. El titulo del post leido es: ", data['title']);
        console.log("DEBUG. La fecha de creacion del post leido es: ", data['created']);

        let now = new Date();
        let offset = now.getTimezoneOffset();

        //let created = new Date(data.created);
        //let updated = new Date(data.updated);

        let created = new Date();
        let updated = new Date();
        
        //created.setMinutes(created.getMinutes() - offset);
        //updated.setMinutes(updated.getMinutes() - offset);

        created.setTime(Date.parse(data.created));
        created.setMinutes(created.getMinutes() - offset);
        updated.setTime(Date.parse(data.updated));
        updated.setMinutes(updated.getMinutes() - offset);

        data.created = created.toISOString();        
        data.updated = updated.toISOString();        

        

        return data;
    }
    catch (error) {
        console.log(error);
    }
}

export const deletePost = async (postId: string) => {
    /*const ax = Axios.create({
        baseURL: 'http://localhost:8000',
        withCredentials: true
    });*/

    try {
        console.log(`/postread/${postId}`);
        await axiosClient.delete(`/postdelete/${postId}`);
    }
    catch (error) {
        console.log(error);
    }
}

