import React from 'react';
import  TableContainer from '@mui/material/TableContainer';
import  Table from '@mui/material/Table';
import  TableBody from '@mui/material/TableBody';
import { UserVM } from '../user-list.vm';
import { UserListTableHeader } from './user-list.table.header';
import { UserListRow } from './user-list.row';

interface Props  {
    className?: string;
    userList: UserVM[];
}

export const UserListTable: React.FC<Props> = (props) => {
    const {className, userList} = props;

    return (
        <TableContainer className = {className}>
            <Table>
                <UserListTableHeader />
                <TableBody>
                    { userList.map((item) => <UserListRow key={item.id} user={item} />) }
                </TableBody>
            </Table>


        </TableContainer >
    );
}