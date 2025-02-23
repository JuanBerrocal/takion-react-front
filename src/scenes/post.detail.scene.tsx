import React from 'react';
import { useParams } from 'react-router-dom';

import { AppLayout } from '@/layouts';
import {PostDetailContainer} from '@/pods/post-detail/post.detail.container';

interface Props {
    isNewPost: boolean;
}

export const PostDetailScene: React.FC<Props> = (props) => {
    const {isNewPost} = props;
    const { id } = useParams();
    
    return (
        <AppLayout>
            {({className}) => <PostDetailContainer className = {className} isNewPost = {isNewPost} postId = {id} />}
        </AppLayout>);
}