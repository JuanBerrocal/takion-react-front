import React from 'react';
import { useNavigate } from 'react-router-dom';
import {cx} from '@emotion/css';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ReplayIcon from '@mui/icons-material/Replay';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';

import {linkRoutes} from '@/core/router';
import {TopicModel} from './api';
import * as classes from './topic.list.styles';
import { TopicListTable } from './components';

interface Props {
    className?: string;
    topicList: TopicModel[];
    onLoadTopicList: () => {};
}

export const TopicListComponent: React.FC<Props> = (props) => {
    const className = props.className;
    const topicList = props.topicList;
    const onLoadTopicList = props.onLoadTopicList;
    const navigate = useNavigate();

    return <div className = {cx(classes.root, className)} >
            <Stack direction="row" spacing={2}>
                <Typography color = "primary" variant="h4">
                    Temas
                </Typography>
                <Button
                    className = {classes.backButton}
                    variant="contained"
                    color = "secondary"
                    size="large"
                    onClick = {() => navigate(linkRoutes.home)}
                    startIcon={<ArrowBackIcon />}>
                    Volver
                </Button>
                <Button
                    className = {classes.reloadButton}
                    variant="contained"
                    color = "secondary"
                    size="large"
                    onClick = {onLoadTopicList}
                    startIcon={<ReplayIcon />}>
                    Actualizar
                </Button>
                <Button
                    className = {classes.newButton}
                    variant="contained"
                    color = "secondary"
                    size="large"
                    onClick = {() => navigate(linkRoutes.topic_insert)}
                    startIcon={<AddIcon />}>
                    Crear
                </Button>
            </Stack>
            <TopicListTable 
                    className = {classes.topicList} topicList = {topicList}
            />
        </div>;
}