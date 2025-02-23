
export interface TopicModel {
    id: string;
    subject: string;
}

export const createEmptyTopicList = ():TopicModel[] => [{
        id: '',
        subject: 'No data'
    }];

export const createEmptyTopic = ():TopicModel => {
    return {id: '', subject: 'No data'}
}
