
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';

import * as classes from './app-layout.styles';
import {AppBarComponent} from '@/common/app-bar/app-bar.component';


interface ChildrenProps  {
    className: string;
};

interface Props {
    children: (props: ChildrenProps) => React.ReactNode;
};

export const AppLayout: React.FC<Props> = (props) => {
    const { children } = props;


    return <>
        <ThemeProvider theme={classes.appTheme}>
            <AppBarComponent />
            <main>
                <Box className = {classes.wrapper}>
                    {children({ className: classes.content })}
                </Box>
            </main>        
        </ThemeProvider>
        </>;
}