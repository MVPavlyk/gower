import {axiosServices} from './axios.services';

import {urls} from '../config';

export const placesServices = {
    getPlacesPaginated: (pageNum, pageSize) => axiosServices.get(`${urls.getPlacesPaginated}?Page=${pageNum}&PageSize=${pageSize}&isOnlyFree=false`).then(value => value.data),
    getPlacesByQuery: (pageNum, pageSize, query) => axiosServices.get(`${urls.getPlacesPaginated}?Page=${pageNum}&PageSize=${pageSize}&isOnlyFree=false&filter=${query}`).then(value => value.data),
    getOnePlace: (placeId) => axiosServices.get(`${urls.getOnePlace}/${placeId}`).then(value => value.data)
};