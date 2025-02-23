
import React from 'react';
import {Login} from './login.vm';
import {LoginFormComponent} from '@/pods/login/components/login-form.component';

interface Props {
    onLogin: (login: Login) => Promise<void>;
}

export const LoginComponent: React.FC<Props> = (props) => {
    const {onLogin} = props;

    return (<>
      <LoginFormComponent onLogin = {onLogin} />

    </>);
}