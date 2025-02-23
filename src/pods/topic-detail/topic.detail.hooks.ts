import React from 'react';

import { TopicModel } from '@/pods/topic-list/api/topic.model';
import * as api from './api/topic.detail.api';
import {useSnackbarContext} from '@/common/snackbar';

interface Props {
    onNavigate: () => void;
}

export const useWriteTopic = (props: Props) => {
    const {showMessage} = useSnackbarContext();

    const writeTopic = React.useCallback( async (isNewTopic: boolean, topic: TopicModel) => {
        try {
            const response = await api.doWriteTopic(isNewTopic, topic);
            
            if (response.status == 200) {
                showMessage((isNewTopic) ? 'Nueva categoria creada' : 'Categoria actualizada' , 'success');    
            }
            else if (isNewTopic && response.status == 204) {
                showMessage('No pueden crearse categorias repetidas', 'error');    
            }
            else {
                showMessage("No se pudo escribir la categoria. " + response.statusText, 'error');    
            }
            
            props.onNavigate();
        }
        catch (error) {
            console.log('Something went wrong: ' + error);
            showMessage('No pudo crearse la categoria. ' + error.message, 'error');
        }
    }, []);

    return {onWriteTopic: writeTopic};
}

export const useDeleteTopic = (props: Props) => {
    const {showMessage} = useSnackbarContext();
    
    const deleteTopic = React.useCallback( async (topicId: string) => {
        try {
            const response = await api.deleteTopic(topicId);

            if (response.status == 200) {
                showMessage('Categoria eliminada', 'success');    
            }
            else if (response.status == 204) {
                showMessage("Todavia existen articulos con esta categoria. No se puede eliminar", 'error');    
            }
            else {
                showMessage("No se pudo eliminar esta categoria. " + response.statusText, 'error');    
            }
            
            props.onNavigate();
        }
        catch (error) {
            console.log('Something went wrong: ' + error.message);
            showMessage('No se pudo boorar la categoria. ' + error.message, 'error');
        }
    }, []);

    return {onDeleteTopic: deleteTopic};
}
