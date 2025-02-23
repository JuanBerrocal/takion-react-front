
import React from 'react';
import {AuthContext} from '@/common/auth/auth.context';
import { Login } from './login.vm';
import { doLogin } from './api/login.api';
import { LoginSession } from './api/login.session';
import { mapUserSessionFromLoginSession } from './login.mappers';
import {useSnackbarContext} from '@/common/snackbar';

interface Props {
    onNavigate: () => void;
}

export const useLogin = (props: Props) => {

    const {onChangeUserSession} = React.useContext(AuthContext);
    const {showMessage} = useSnackbarContext();
    
    const handleLogin = React.useCallback(async (login: Login) => {
        try {
            const loginSession = await doLogin(login.email, login.password);
            const userSession = mapUserSessionFromLoginSession(loginSession);
            onChangeUserSession(userSession);
            // Goes to alluserslist page.
            props.onNavigate();
        }
        catch (error) {
            console.log('Invalid credentials' + error);
            error && showMessage('Invalid credentials', 'error');
        }
    }, []);

    return {onLogin: handleLogin,};
};