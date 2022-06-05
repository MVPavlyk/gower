import {getUsersServices} from '../services';

export const getUser = async (id) => {
    try {
        return await getUsersServices.getOne(id);
    } catch (e) {
        console.error(e);
    }
};