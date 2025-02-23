import { css } from '@emotion/css';

export const root = css`
    display: grid;
    grid-template-areas:
        'mainArea sideArea';
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
`;

export const reloadButton = css`
    grid-area: sideArea;
`;

export const postList = css`
    grid-area: mainArea;
`;