

import { UserVM } from './user-list.vm';
import { UserApi } from './api/user.api-model';

export const mapListFromApiToVm = (list: UserApi[]): UserVM[] => {

    const mapFn = (x: UserApi): UserVM => {
        return {id: x.id, email: x.email};
    }

    return list.map(mapFn);
}