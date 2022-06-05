import {axiosServices} from './axios.services';

import {urls} from '../config';

export const AdminServices = {
    createPlace: (place) => axiosServices.post(urls.createPlace, place).then(value => value.data),
    deletePlace: (id) => axiosServices.delete(`${urls.deletePlace}/${id}`).then(value => value.data),
    createTable: (table) => axiosServices.post(urls.createTable, table).then(value => value.data)
};