
export interface UserSession {
    email: string;
    firstName: string;
    secondName: string;
}

export const createEmptyUserSession = (): UserSession => (
    {email: '',
    firstName: '',
    secondName: ''
    }
);
