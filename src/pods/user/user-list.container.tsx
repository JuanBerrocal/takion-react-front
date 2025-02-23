import React from 'react';
import { UserVM, createEmptyUserList, createErrorUserList } from './user-list.vm';
import { mapListFromApiToVm } from './user-list.mappers';
import { UserListComponent } from './user-list.component';
import * as api from './api';

interface Props {
    className?: string;
};

export const UserListContainer: React.FC<Props> = (props) => {
    const { className } = props;
    const [userList, setUserList] = React.useState(createEmptyUserList());

    const handleLoadUserList = async ()  => {
       try {
            const apiList = await api.getUserList();
            const vmList = mapListFromApiToVm(apiList);
            setUserList(vmList);
        }
        catch {
            setUserList(createErrorUserList());
        }
    }

    // To be removed. When use this here it sends requests to the server all the time.
    //handleLoadUserList();

    return <UserListComponent 
        className = {className}
        userList = {userList}
        onLoadUserList = {handleLoadUserList}
        />;
}