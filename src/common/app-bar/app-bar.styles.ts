import {css} from '@emotion/css';

export const root = css`
  display: flex;
  flex-direction: column;
`;

export const appBar = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  color: white;
  background-color: #354f52;
`;

export const titleBox = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  fontSize="2em";
  color: inherit;
  background-color: inherit;
`;


export const userBox = css`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
    fontSize="1.6em";
    color: inherit;
    background-color: inherit;
`;

export const button = css`
    margin-left: auto;
    &:hover {color: #9da518;}
`;