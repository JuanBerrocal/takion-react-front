import { css } from '@emotion/css';

export const root = css`
    display: grid;
    grid-template-areas:
        'topicForm'
        'deleteButton'
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
`;

export const deleteButton = css`
    grid-area: deleteButton;
    background-color: brown;
    color: white;
`;

export const writeButton = css`
    background-color: blue;
    color: white;
`;

export const topicForm = css`
    grid-area: topicForm;
`;