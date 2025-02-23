import { css } from '@emotion/css';

export const root = css`
    display: grid;
    grid-template-areas:
        'listTitle'
        'toolBar'
        'postList';
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

export const button = css`

`;

export const postList = css`
    grid-area: postList;
`;

export const postTitle = css`
    &:hover {text-decoration: underline;}
    cursor: pointer;
`;

export const postBox = css`
    display: flex;
    flex-direction: column;  
`;

export const postTitleBox = css`
    display: flex;
    flex-direction: row;  
`;

export const postAuthorBox = css`
    display: flex;
    flex-direction: row;  
    column-gap: 10px;
`;

export const postTopicBox = css`
    display: flex;
    flex-direction: row;  
`;

export const postTextBox = css`
    display: flex;
    flex-direction: row;  
`;