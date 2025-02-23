import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import TableRow from '@mui/material/TableRow';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import {styled} from '@mui/material/styles';
//import Link from '@mui/material/Link';

import { TopicModel } from '@/pods/topic-list/api';
import {linkRoutes} from '@/core/router';
import * as classes from './../topic.list.styles';


interface Props {
    topic: TopicModel;
}

const StyledTableRow = styled(TableRow)(({ theme })=>(
    {
    '&:nth-of-type(even)': {backgroundColor: theme.palette.secondary.light,},
    }
));



export const TopicListRow: React.FC<Props> = (props) => {
    const listenerRef = React.useRef(null);
    const {topic} = props;
    const navigate = useNavigate();
    
    React.useEffect(()=>
            {
                const myRef = listenerRef.current;
                myRef.addEventListener('click', handleClick);
                return () => {myRef.removeEventListener('click', handleClick);};
            },
    []);

    const handleClick = (event) => {
        
        navigate(linkRoutes.topic_update(topic.id));
    }

    return <>
        <StyledTableRow hover={true} ref={listenerRef}>
            <TableCell align="left">
                {topic.id}
            </TableCell>
            <TableCell align="left">
                <span>{topic.subject}</span>
            </TableCell>
        </StyledTableRow>
    </>;
}