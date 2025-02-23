import React from 'react';

import { PostModel } from '@/pods/post-list/api/post.model';
import * as api from './api/post.detail.api';
import {useSnackbarContext} from '@/common/snackbar';

interface Props {
    onNavigate: () => void;
}

export const useWritePost = (props: Props) => {
    const {showMessage} = useSnackbarContext();
    
    const writePost = React.useCallback( async (isNewPost: boolean, post: PostModel) => {
        try {
            const response = await api.doWritePost(isNewPost, post);
            if (response.status == 200) {
                showMessage((isNewPost) ? 'Nuevo articulo creado' : 'Articulo actualizado' , 'success');    
            }
            else {
                showMessage("No se pudo grabar el articulo. " + response.statusText, 'error');    
            }
            props.onNavigate();
        }
        catch (error) {
            console.log('Something went wrong: ' + error);
        }
    }, []);

    return {onWritePost: writePost};
}

export const useDeletePost = (props: Props) => {
    
    const deletePost = React.useCallback( async (postId: string) => {
        try {
            await api.deletePost(postId);
            props.onNavigate();
        }
        catch (error) {
            console.log('Something went wrong: ' + error);
        }
    }, []);

    return {onDeletePost: deletePost};
}
