import React from 'react';

import { TopicListComponent } from './topic.list.component';
import * as api  from './api';

interface Props {
    className?: string;
} 

export const TopicListContainer: React.FC<Props> = (props) => {
    const { className } = props;
    const [topicList, setTopicList] = React.useState(api.createEmptyTopicList());

    React.useEffect(()=>{handleTopicList()}, []);
    
    const handleTopicList = async () => {
        try {
            const list = await api.getTopicList();
            setTopicList(list);
        }
        catch {
            setTopicList([{
                id: '', 
                subject: "Error. Couldn't read any topic."}]);
        }
    }

    return <TopicListComponent 
        className = {className} 
        topicList = {topicList}
        onLoadTopicList = {handleTopicList}
        />;
}