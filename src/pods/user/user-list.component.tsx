import React from 'react';
import { cx } from '@emotion/css';
import  Button from '@mui/material/Button';
import * as classes from './user-list.styles'
import { UserVM } from './user-list.vm';
import {UserListTable} from './components';


interface Props {
    className: string;
    userList: UserVM[];
    onLoadUserList: () => {};
}

export const UserListComponent: React.FC<Props> = (props) => {
    const className = props.className;
    const userList = props.userList;
    const onLoadUserList= props.onLoadUserList;

    return <div className={cx(classes.root, className)}>
        <Button
            className = {classes.reloadButton}
            variant = "contained"
            color = "secondary"
            onClick = {onLoadUserList}
        >
            Reload users
        </Button>
        <UserListTable className = {classes.userList} userList = {userList} />
    </div>;
}
