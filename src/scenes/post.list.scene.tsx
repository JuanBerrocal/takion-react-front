import React from 'react';

import {AppLayout} from '@/layouts';
import {PostListContainer} from '@/pods/post-list';


export const PostListScene: React.FC = () => {
 
    return (
        <AppLayout>
            {({className}) => <PostListContainer className = {className} />}
        </AppLayout>);
}