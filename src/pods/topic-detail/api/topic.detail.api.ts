import Axios from 'axios';
import { generatePath } from "react-router-dom";

import { TopicModel } from '@/pods/topic-list/api/topic.model';

export const doWriteTopic = async (isNewTopic: boolean, topic: TopicModel) => {

    // Creates axios instance.
    const ax = Axios.create({
        baseURL: 'http://localhost:8000',
        withCredentials: true
    });

    try {
        if (isNewTopic) {
            const response = await ax.post('/topicinsert', topic);            
            return response;
        }
        else {
            // Here we update an existing topic.
            const response = await ax.post(`/topicupdate/${topic.id}`, topic);
            return response;
        }
    }
    catch (error) {
        console.log('Axios error:', error.message);
    }
}

export const readTopic = async (topicId: string) => {
    const ax = Axios.create({
        baseURL: 'http://localhost:8000',
        withCredentials: true
    });

    try {
        console.log(`/topicread/${topicId}`);
        const { data } = await ax.get(`/topicread/${topicId}`);
        return data;
    }
    catch (error) {
        console.log('Axios error:', error.message);
    }
}

export const deleteTopic = async (topicId: string) => {
    const ax = Axios.create({
        baseURL: 'http://localhost:8000',
        withCredentials: true
    });

    try {
        
        const response = await ax.delete(`/topicdelete/${topicId}`);
        return response;
    }
    catch (error) {
        console.log('Axios error:', error.message);
    }
}

