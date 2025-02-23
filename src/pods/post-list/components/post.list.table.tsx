import React from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import {PostModel} from './../api';
import {PostListItem} from './post.list.item';

interface Props {
    className: string;
    list: PostModel[];
}

export const PostListTable: React.FC<Props> = (props) => {

    const {className, list} = props;

    return <>
        <TableContainer>
            <Table>
                <TableBody>
                    {list.map((item) => <TableRow key = {item.id}>
                                            <TableCell padding='none' style={{border: 0, paddingTop: 10, paddingBottom: 10}}>
                                                <PostListItem post = {item}/>
                                            </TableCell>
                                        </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
        </>;
}