import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { TopicModel, createEmptyTopic } from '@/pods/topic-list/api/topic.model';
import { readTopic } from '@/pods/topic-detail/api/topic.detail.api';

interface Props {
    className: string;
    isNewTopic: boolean;
    topicId: string;
    onWriteTopic: (boolean, TopicModel) => void;
}

export const TopicDetailForm: React.FC<Props> = (props) => {
    const {className, isNewTopic, topicId, onWriteTopic} = props;

    const [subject, setSubject] = React.useState('');
    const [subjectError, setSubjectError] = React.useState(false);

    React.useEffect(() => {loadTopic(isNewTopic, topicId)}, []);

    const loadTopic = async (isNewTopic: boolean, topicId: string) => {
        if (!isNewTopic) {
            try {
                const topic = await readTopic(topicId);
                setSubject(topic.subject);
                setSubjectError(false);
            }
            catch (error) {
                setSubjectError(true);
                console.log('Could not read the topic. Something went wrong: ' + error);
            }
        } 
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        setSubjectError(false);
        if (subject == '') {
            setSubjectError(true);
        }
        await onWriteTopic(isNewTopic, {id: topicId, subject: subject});
    }

    return <form autoComplete="off" onSubmit={handleSubmit}>
        <h2>Categorias</h2>
        <TextField 
            label="ID"
            disabled
            type="text"
            variant="outlined"
            fullWidth
            color="secondary"
            value = {topicId}
        />
        <TextField
            label="materia"
            onChange={e => setSubject(e.target.value)}
            required
            type="text"
            variant="outlined"
            fullWidth
            color="secondary"
            value = {subject}
            error = {subjectError}
        />
        <Button variant = "outlined" type="submit">Grabar</Button>
    </form>;
}