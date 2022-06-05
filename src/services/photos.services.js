import {axiosServices} from './axios.services';
import {urls} from '../config';


export const PhotosServices = {
    uploadPhoto: (type, placeId, file, description) => axiosServices.post(`${urls.uploadPhoto}?type=${type}&placeId=${placeId}`, {
        file: file,
        description: description
    }).then(value => value.data),
    downloadPhoto: (type, placeId) => axiosServices.get(`${urls.downloadPhoto}?type=${type}&placeId=${placeId}`)
        .then(value => value.data),
    getDescription: (type, placeId) => axiosServices.get(`${urls.getDescription}?type=${type}&placeId=${placeId}`)
        .then(value => value.data),
    deletePhoto: (type, placeId) => axiosServices.delete(`${urls.deletePhoto}?type=${type}&placeId=${placeId}`)
};