import {axiosServices} from './axios.services';

import {urls} from '../config';

export const tablesServices = {
    getTablesByPlace: (id) => axiosServices.get(`${urls.tablesOfPlace}/${id}`).then(value => value.data)
};