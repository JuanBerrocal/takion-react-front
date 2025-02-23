import React from "react";
import {Route, Routes, Link, } from 'react-router-dom';
import Axios from "axios";
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';

import { UserApi } from "@/pods/user/api/user.api-model";
import {getUserList} from "@/pods/user/api/user.api";
import { UserListRow } from "@/pods/user/components/user-list.row";
import { AppLayout } from '@/layouts';
import {UserListContainer} from '@/pods/user/user-list.container';



export const UserListScene: React.FC = () => {

  
    return (
        <AppLayout>
            {({ className }) => <UserListContainer className = {className}/> }
        </AppLayout>
        );
}

 /* const [users, setUsers] = React.useState<UserEntity[]>([]);
    
    
    React.useEffect( () => {
        getUserCollection().then((data) => setUsers(data));
        },
        []);



    const showUsers = (users) => {
        return (!users.length) 
              ? (<><TableRow><TableCell align = "left"><h3>Buscando usuarios...</h3></TableCell></TableRow></>)
              : users.map((user) => <ListUserLine key = {user.id} user = {user}/>);
         } 
*/
/*<h1>Takion users</h1>
        
<br></br><br></br>

<Button variant="outlined" type="submit">Logout</Button>      
<TableContainer>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell align="left">Id</TableCell>
                <TableCell align="left">Email</TableCell>
            </TableRow>
        </TableHead>      
        <TableBody>
            {showUsers(users)}
        </TableBody>
    </Table>
</TableContainer>
*/
