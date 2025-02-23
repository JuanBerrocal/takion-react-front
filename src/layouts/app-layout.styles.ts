import {css} from '@emotion/css';
import {createTheme} from '@mui/material/styles';
import {green, blue, lightGreen, lime, grey} from '@mui/material/colors';

export const appTheme = createTheme({
    palette: {
        primary: {
            main: grey[500],
            light:  grey[300],
            dark:  grey[700],
            contrastText: '#fff'
        },
        secondary: {
            main: '#20B2AA', //LightSeaGreen
            contrastText: '#fff'
        },
        action: {
            hover: '#cfe5b4',
        }
    },
    typography: {
        button: {
            textTransform: 'none',
            fontSize: 18,
            fontWeight: 700,
        },
    },
});

export const wrapper = css`
    margin: 0 auto;
    max-width: 1000px;
`;

export const content = css`
    margin: 0 auto;
    
`;