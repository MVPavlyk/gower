import {PhotosServices} from '../services';

export const getPhoto = async (type, placeId) => {
    try {
        return await PhotosServices.downloadPhoto(type, placeId);
    } catch (e) {
        console.error(e);
    }
};