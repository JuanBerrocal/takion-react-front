import React from 'react';
import {useNavigate} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ReplayIcon from '@mui/icons-material/Replay';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import {linkRoutes} from '@/core/router';
import {PostModel} from './api';
import {PostListTable} from './components';
import * as classes from './post.list.styles';

interface Props {
    className: string;
    postList: PostModel[];
    onLoadPostList: () => {};
}

export const PostListComponent: React.FC<Props> = (props) => {

    const {className, postList, onLoadPostList} = props;
    const navigate = useNavigate();

    return (<div>
        <Stack direction = "column" spacing={5} style = {{paddingTop: 10}}>
                <Stack direction="row" spacing={2}>
                    <Button
                        className = {classes.button}
                        variant="contained"
                        color = "secondary"
                        onClick = {() => navigate(linkRoutes.home)}
                        startIcon={<ArrowBackIcon sx={{stroke: "white", strokeWidth: 2}} />}>
                        Volver
                    </Button>
                    <Button
                        className = {classes.button}
                        variant="contained"
                        color = "secondary"
                        onClick = {onLoadPostList}
                        startIcon={<ReplayIcon  sx={{stroke: "white", strokeWidth: 2}}/>}>
                        Actualizar
                    </Button>
                    <Button
                        className = {classes.button}
                        variant="contained"
                        color = "secondary"
                        onClick = {() => {navigate(linkRoutes.post_insert)}}
                        startIcon={<AddIcon  sx={{stroke: "white", strokeWidth: 2}}/>}>
                        Crear
                    </Button>
                </Stack>
                <PostListTable className = {className} list = {postList}></PostListTable>
            </Stack>
        </div>);

}