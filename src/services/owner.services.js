import {axiosServices} from './axios.services';

import {urls} from '../config';

export const OwnerServices = {
    getMyPlaces: () => axiosServices.get(urls.getMyPlaces).then(value => value.data),
    occupyTable: (id) => axiosServices.put(`${urls.occupyTable}${id}`).then(value => value.data),
    freeTable: (id) => axiosServices.put(`${urls.freeTable}${id}`).then(value => value.data)
};