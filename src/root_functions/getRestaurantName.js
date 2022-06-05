import {placesServices} from '../services';

export const getRestaurantName = async (id) => {
    try {
        return await placesServices.getOnePlace(id);
    } catch (e) {
        console.error(e);
    }
};