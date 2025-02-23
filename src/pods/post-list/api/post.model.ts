


export interface PostModel {
    id: string;
    created: string;
    updated: string;
    author: {email: string, firstName: string, secondName:string};
    title: string;
    text: string;
    subject: string;
}

export const createEmptyPost = ():PostModel => {
    return {
        id: '', 
        created: '',
        updated: '',
        author: {email: '', firstName: '', secondName: ''},
        title: '',
        text: '',
        subject: ''
    }
}
