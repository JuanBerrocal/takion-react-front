import React from 'react';
import Snackbar, {SnackbarOrigin} from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close'

import {SnackbarContext} from './snackbar.context'
import * as classes from './snackbar.styles';

interface Props {
    autoHideDuration?: number;
    position?: SnackbarOrigin;
}

export const SnackbarComponent:React.FC<Props> = (props) => {

    const {autoHideDuration, position} = props;
    const {open, onClose, options} = React.useContext(SnackbarContext);

    return (
        <Snackbar
            anchorOrigin = {position}
            autoHideDuration = {autoHideDuration}
            open = {open}
            onClose = {onClose}
            >
            <SnackbarContent
                className = {classes[options.variant]}
                message = {options.message}
                action = {[
                    <IconButton key="close" color="inherit" onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                ]}>
            </SnackbarContent>
        </Snackbar>
        );
}