import React from 'react';
import { useParams } from 'react-router-dom';

import { AppLayout } from '@/layouts';
import {TopicDetailContainer} from '@/pods/topic-detail/topic.detail.container';

interface Props {
    isNewTopic: boolean;
}

export const TopicDetailScene: React.FC<Props> = (props) => {
    const {isNewTopic} = props;
    const { id } = useParams();
    
    return (
        <AppLayout>
            {({className}) => <TopicDetailContainer className = {className} isNewTopic = {isNewTopic} topicId = {id} />}
        </AppLayout>);
}