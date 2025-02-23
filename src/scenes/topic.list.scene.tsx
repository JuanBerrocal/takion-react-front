import React from 'react';

import {AppLayout} from '@/layouts';
import { TopicListContainer } from '@/pods/topic-list/topic.list.container';

export const TopicListScene: React.FC = () => {

    return (
    <AppLayout>
        {({className}) => <TopicListContainer className = {className}/>}
    </AppLayout>);
}