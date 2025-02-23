import React from 'react';
import { useNavigate } from 'react-router-dom';
import  Button from '@mui/material/Button';
import * as classes from './home.styles';
import { linkRoutes } from '@/core/router';


export const HomeContainer: React.FC = () => {

    const navigate = useNavigate();

    return <>
        <h1>Front Home Page</h1>
        <Button
            className = {classes.root}
            variant = "contained"
            color = "secondary"
            onClick = { () => navigate(linkRoutes.listalluser) }>
            Usuarios
        </Button>
        <Button
            className = {classes.root}
            variant = "contained"
            color = "secondary"
            onClick = { () => navigate(linkRoutes.topic_list) }>
            Categorias
        </Button>
        <Button
            className = {classes.root}
            variant = "contained"
            color = "secondary"
            onClick = { () => navigate(linkRoutes.post_list) }>
            Articulos
        </Button>
        </>
}

/*
    This is to be moved to the topic pod.

    const [topicList, setTopicList] = React.useState([]);

    const handleTopicList = async ()  => {
        
        try {
            const list = await api.getTopicList();
            const vmList = mapListFromApiToVm(apiList);
            setTopicList(list);
        }
        catch {
            setUserList(createErrorUserList());
        }
    }*/