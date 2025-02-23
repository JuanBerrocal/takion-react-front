import { css } from '@emotion/css';

export const root = css`
    display: grid;
    grid-template-areas:
        'listTitle'
        'toolBar'
        'topicList';
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
`;

export const toolBar = css`
    grid-area: toolBar;
    display: flex;
    flex-direction: row;
    padding: 5px;
`;

/* Note: Implemented via custom styled components.
export const tableRow = css`
    &:nth-of-type(even) {background-color: lightgray};
`;*/

export const listHeader = css`
    color: white;
    background-color: black;
`;

export const headerList = css`
    
`;

export const backButton = css`
    
`;

export const reloadButton = css`
    
`;

export const newButton = css`
    
`;

export const topicList = css`
    grid-area: topicList;
`;