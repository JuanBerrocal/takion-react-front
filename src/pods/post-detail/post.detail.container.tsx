import React from 'react';
import { useNavigate } from 'react-router-dom';

import {linkRoutes} from '@/core/router';
import { useWritePost, useDeletePost } from './post.detail.hooks';
import { PostDetailComponent } from './post.detail.component';

interface Props {
    className: string;
    isNewPost: boolean;
    postId: string;
}

export const PostDetailContainer: React.FC<Props> = (props) => {
    const {className, isNewPost, postId} = props;
    const navigate = useNavigate();

    console.log("DEBUG. In the PostDetailContainer the post id is: ", postId);

    const {onWritePost} = useWritePost(
        {onNavigate: () => navigate(linkRoutes.post_list), }
    );

    const {onDeletePost} = useDeletePost(
        {onNavigate: () => navigate(linkRoutes.post_list), }
    );

    return <PostDetailComponent 
        className = {className}  
        isNewPost = {isNewPost}
        postId = {postId}
        onWritePost = {onWritePost}
        onDeletePost = {onDeletePost}
        />;
}