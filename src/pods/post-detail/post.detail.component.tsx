import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { PostModel } from '@/pods/post-list/api/post.model';
import { PostDetailForm } from './components/post.detail.form'
import * as classes from './post.detail.styles';
import {linkRoutes} from '@/core/router';

interface Props {
    className: string;
    isNewPost: boolean;
    postId: string;
    onWritePost: (boolean, PostModel) => void;
    onDeletePost: (string) => void;
}

export const PostDetailComponent: React.FC<Props> = (props) => {
    const {className, isNewPost, postId, onWritePost, onDeletePost} = props;
    const navigate = useNavigate();

    
    const handleDelete = async (event) => {
        event.preventDefault();
        await onDeletePost(postId);
    }
    

     const deleteButton = (!isNewPost) ? <Button
                                                className = {className}
                                                variant = "contained"
                                                color = "secondary"
                                                onClick = {handleDelete}
                                                sx = {{color:'white', backgroundColor: 'red'}}
                                                startIcon={<DeleteIcon sx={{stroke: "white", strokeWidth: 2}} />}>
                                                Borrar
                                                </Button>
                                            : null;
        
   

    return <>
            <Stack spacing = {2}>
                <Stack direction='row' spacing = {2} style={{paddingTop: 10, paddingBottom: 10}}>
                    <Button variant = "contained"
                        color = "secondary"
                        onClick = {() => navigate(linkRoutes.post_list)}
                        startIcon={<ArrowBackIcon sx={{stroke: "white", strokeWidth: 2}} />}>
                        Atrás
                    </Button>
                    {deleteButton}
                </Stack>
                <PostDetailForm 
                    className = {className}
                    isNewPost = {isNewPost}
                    postId = {postId}
                    onWritePost = {onWritePost}
                    />
            </Stack>
            
        </>;
}