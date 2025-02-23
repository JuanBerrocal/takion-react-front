import React from 'react';
import Axios from 'axios';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import {Login} from '@/pods/login/login.vm';
import {LoginSession} from '@/pods/login/api/login.session';
import {doLogin} from '@/pods/login/api/login.api';

interface Props {
    onLogin: (login :Login) => void;
}

export const LoginFormComponent: React.FC<Props> = (props) => {

    const {onLogin} = props;

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [emailError, setEmailError] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        setEmailError(false);
        setPasswordError(false);

        if (email == '') {
            setEmailError(true);
        }
        if (password == '') {
            setPasswordError(true);
        }

        await onLogin({email, password});
    }

    return (
        <>
        <form autoComplete="off" onSubmit={handleSubmit}>
            <h2>Login Form</h2>
                <TextField 
                    label="email"
                    onChange={e => setEmail(e.target.value)}
                    required
                    type="email"
                    variant="outlined"
                    fullWidth
                    color="secondary"
                    value = {email}
                    error = {emailError}
                />
                <TextField 
                    label="password"
                    onChange={e => setPassword(e.target.value)}
                    required
                    type="password"
                    variant="outlined"
                    fullWidth
                    color="secondary"
                    value = {password}
                    error = {passwordError}
                />
                <Button variant="outlined" type="submit">Submit</Button>
            </form> 
    </>);
}