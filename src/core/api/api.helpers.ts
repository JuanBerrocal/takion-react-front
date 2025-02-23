
import Axios from 'axios';

export const setHeader = (header: string, value: string) => {
    Axios.defaults.headers.common[header] = value;
};