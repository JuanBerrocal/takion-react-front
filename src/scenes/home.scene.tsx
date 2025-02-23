import React from "react";
import {Route, Routes, Link, } from 'react-router-dom';
import { AppLayout } from '@/layouts';
import { HomeContainer } from '@/pods/home/home.container';

export const HomeScene: React.FC = () => {

    return (
        <AppLayout>
            {({ className }) => <HomeContainer /> }    
            
        </AppLayout>

        //{({ className }) => <UserListContainer className = {className}/> }    
        );
        
}
