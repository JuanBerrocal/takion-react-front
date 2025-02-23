import React from 'react';
import Button from '@mui/material/Button';

import { TopicModel } from '@/pods/topic-list/api/topic.model';
import { TopicDetailForm } from './components/topic.detail.form'
import * as classes from './topic.detail.styles';

interface Props {
    className: string;
    isNewTopic: boolean;
    topicId: string;
    onWriteTopic: (boolean, TopicModel) => void;
    onDeleteTopic: (string) => void;
}

export const TopicDetailComponent: React.FC<Props> = (props) => {
    const {className, isNewTopic, topicId, onWriteTopic, onDeleteTopic} = props;

    
    const handleDelete = async (event) => {
        event.preventDefault();
        await onDeleteTopic(topicId);
    }

    const deleteButton = (!isNewTopic) ? <Button
                                            className = {classes.deleteButton}
                                            variant = "contained"
                                            color = "secondary"
                                            onClick = {handleDelete}
                                            sx = {{color:'white', backgroundColor: 'red'}}>
                                            Borrar
                                            </Button>
                                        : null;

    return <>
            <TopicDetailForm 
                className = {className}
                isNewTopic = {isNewTopic}
                topicId = {topicId}
                onWriteTopic = {onWriteTopic}
                />
            {deleteButton}
            
        </>;
}