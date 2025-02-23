import { css } from '@emotion/css';

export const root = css`
    display: grid;
    grid-template-areas:
        'reloadButton'
        'userList';
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
`;

export const reloadButton = css`
    grid-area: reloadButton;
`;

export const userList = css`
    grid-area: userList;
`;