import React from 'react';

import {PostListComponent} from './post.list.component'
import * as api from './api';

interface Props {
    className: string;
}

export const PostListContainer: React.FC<Props> = (props) => {

    const {className} = props;
    const [postList, setPostList] = React.useState([]);

    React.useEffect(() => {handleList()}, []);

    const handleList = async () => {
        try {
            const list = await api.getPostList();
            setPostList(list);
        }
        catch (error) {
            
            setPostList([]);
        }
    }

    
    return (<PostListComponent 
        className = {className}
        postList = {postList}
        onLoadPostList = {handleList}
        />);

}