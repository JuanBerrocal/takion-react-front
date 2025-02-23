import React from 'react';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import * as classes from './user-list.table.header.styles';


export const UserListTableHeader: React.FC = () => {return (
    <TableHead>
        <TableRow>
            <TableCell className = {classes.header} >ID</TableCell>
            <TableCell className = {classes.header} >Name</TableCell>
        </TableRow>
    </TableHead>
);}