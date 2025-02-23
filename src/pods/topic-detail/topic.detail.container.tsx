import React from 'react';
import { useNavigate } from 'react-router-dom';

import {linkRoutes} from '@/core/router';
import { useWriteTopic, useDeleteTopic } from './topic.detail.hooks';
import { TopicDetailComponent } from './topic.detail.component';
import { deleteTopic } from './api/topic.detail.api';

interface Props {
    className: string;
    isNewTopic: boolean;
    topicId: string;
}

export const TopicDetailContainer: React.FC<Props> = (props) => {
    const {className, isNewTopic, topicId} = props;
    const navigate = useNavigate();

    const {onWriteTopic} = useWriteTopic(
        {onNavigate: () => navigate(linkRoutes.topic_list), }
    );

    const {onDeleteTopic} = useDeleteTopic(
        {onNavigate: () => navigate(linkRoutes.topic_list), }
    );

    return <TopicDetailComponent 
        className = {className}  
        isNewTopic = {isNewTopic}
        topicId = {topicId}
        onWriteTopic = {onWriteTopic}
        onDeleteTopic = {onDeleteTopic}
        />;
}