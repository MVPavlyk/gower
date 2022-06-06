import {tablesServices} from '../services';

export const getTables = async (placeId) => {
    try {
        return await tablesServices.getTablesByPlace(placeId);
    } catch (e) {
        console.error(e);
    }
};
