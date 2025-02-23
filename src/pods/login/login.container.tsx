
import React from "react";
import { useNavigate } from 'react-router-dom';
import { LoginComponent } from '@/pods/login/login.component';
import { linkRoutes } from '@/core/router';
import { useLogin } from './login.hooks';

export const LoginContainer: React.FC = () => {

    const navigate = useNavigate();
    const { onLogin } = useLogin({
        onNavigate: () => navigate(linkRoutes.home),
        });

    return <LoginComponent onLogin = {onLogin} />
}