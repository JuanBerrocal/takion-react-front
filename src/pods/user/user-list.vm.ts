

export interface UserVM {
    id: string;
    email: string;
}

export const createEmptyUserList = (): UserVM[] => [{
        id: '',
        email: 'No data',
    }];

export const createErrorUserList = (): UserVM[] => [{
       id: '',
       email: "Error. Couldn't get any user.",
    }];