import React from 'react';
import {useNavigate} from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/PowerSettingsNew';
import FeedIcon from '@mui/icons-material/Feed';
import TopicIcon from '@mui/icons-material/Topic';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

import * as classes from '@/common/app-bar/app-bar.styles';
import * as api from './api';
import { AuthContext, createEmptyUserSession } from '@/common/auth';
import {linkRoutes} from '@/core/router';

export const AppBarComponent: React.FC = () => {
    const {userSession, onChangeUserSession} = React.useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        api.logout();
        onChangeUserSession(createEmptyUserSession());
        navigate(linkRoutes.login);
    }

    return <Box className ={classes.root}>
                
            <AppBar position ="static">
                <Toolbar variant = "dense" className = {classes.appBar}>
                    <Box className={classes.titleBox}>
                        <Typography sx={{fontWeight: 'normal', fontSize:'2rem'}} >Takion Post</Typography>
                    </Box>
                    <Box className={classes.userBox}>
                        <IconButton className = {classes.button}
                            edge = "start"
                            color="inherit"
                            onClick={ () => {navigate(linkRoutes.post_list)}}>
                                <FeedIcon />
                                Articulos
                        </IconButton>
                        <IconButton className = {classes.button}
                            edge = "start"
                            color="inherit"
                            onClick={ () => {navigate(linkRoutes.topic_list)}}>
                                <TopicIcon />
                                Categorias
                        </IconButton>
                        <IconButton className = {classes.button}
                            edge = "start"
                            color="inherit"
                            onClick={handleLogout}
                        >
                             <LogoutIcon />
                             Salir
                        </IconButton>
                        <Typography>{userSession.firstName + ' ' + userSession.secondName}</Typography>
                        
                        </Box>
                    </Toolbar>
            </AppBar>
        </Box>;
}

/*
<Box className = {classes.titleBar}>
                    <Typography sx={{fontWeight: 'normal', fontSize:'h3.fontSize'}} color="primary">Takion Post</Typography>
                    <Box className = {classes.userBox}>
                        <Typography>{userSession.firstName + ' ' + userSession.secondName}</Typography>
                        <IconButton className = {classes.logout}
                            edge = "start"
                            sx={{backgroundColor: 'red', color: 'white', borderRadius: '25%'}}
                            onClick={handleLogout}
                        >
                            <LogoutIcon />
                        </IconButton>
                    </Box>
                </Box>
*/