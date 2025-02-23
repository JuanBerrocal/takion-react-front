import Axios from 'axios';

//const url = '/api/securiy/logout';
const url = '/logout';

export const logout = async (): Promise<boolean> => {

    const ax = Axios.create({
        baseURL: 'http://localhost:8000',
        withCredentials: true,
    });

    await ax.post(url);

    return true;
}
