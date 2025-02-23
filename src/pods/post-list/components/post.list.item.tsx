
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';

import {linkRoutes} from '@/core/router';
import {PostModel} from './../api';
import * as classes from './../post.list.styles';

interface Props {
    post: PostModel;
}

export const PostListItem:React.FC<Props> = (props) => {
    const {post} = props;
    const listenerRef = React.useRef(null);
    const navigate = useNavigate();

    // Creates Date object from ISO 8061 date strings.
    const created = new Date(post.created);
    const updated = new Date(post.updated);

    React.useEffect(()=>
        {
            const myRef = listenerRef.current;
            myRef.addEventListener('click', handleClick);
            return () => {myRef.removeEventListener('click', handleClick);};
        },
    []);

    const handleClick = (event) => {
        navigate(linkRoutes.post_update(post.id));
    }
    
    return <Box className = {classes.postBox}>
        <Box className = {classes.postTitleBox}  ref={listenerRef}>
            <Typography className = {classes.postTitle} fontSize = {36} color = 'secondary'>{post.title}</Typography>
        </Box>
        <Box className = {classes.postAuthorBox}>
            <PersonIcon color = 'primary'/>
            <Typography fontSize = {18} color = 'primary'>{post.author.firstName + ' ' + post.author.secondName} </Typography>
            <CalendarTodayIcon color = 'primary'/>
            <Typography fontSize = {18} color = 'primary'>{created.toLocaleString("es-ES", 
                    {weekday: "short", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false,})}
            </Typography>
            <Typography fontSize = {18} color = 'primary'> Actualizado: {updated.toLocaleString("es-ES", 
                    {weekday: "short", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false,})}
            </Typography>
        </Box>
        <Box className = {classes.postTopicBox}>
            <Typography fontSize = {18} color = 'primary'>Categoria: {post.subject}</Typography>
        </Box>
        <Box className = {classes.postTextBox} style = {{paddingTop: 10}}>
            <Typography fontSize = {18} color = 'primary.dark'>{post.text}</Typography>
        </Box>
    </Box>;

}


/*DEBUG return <Box>
<Card variant="outlined" ref={listenerRef}>
    <CardContent>
        <Typography variant="h3">{post.title}</Typography>
        <Typography variant="h5">{post.author.firstName + ' ' + post.author.secondName}</Typography>
        <Typography variant="h5">{created.toLocaleString("es-ES", 
            {weekday: "short", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false,})}
        </Typography>
        <Typography variant="h5">{updated.toLocaleString("es-ES", 
            {weekday: "short", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false,})}
        </Typography>
        <Typography variant="h5">{post.subject}</Typography>
        <Typography variant="h5">{post.text}</Typography>
    </CardContent>
</Card>
</Box>;*/


    /*DEBUG const article = (
        <React.Fragment>
            <CardContent>
                <CardHeader>
                    <Stack direction="column">
                        <Typography variant="h3">{post.title}</Typography>
                        <Typography variant="h5">{post.subject}</Typography>
                        <Typography variant="h5">{post.author.firstName + ' ' + post.author.secondName}</Typography>
                    </Stack>
                </CardHeader>
                    {post.text}
            </CardContent>
        </React.Fragment>); */