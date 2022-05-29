import {axiosServices} from './axios.services';

import {urls} from '../config';

export const GetUsersServices = {
    getPaginated: (reqObj) => axiosServices.post(urls.getPaginatedUsers, reqObj).then(value => value.data),
    getOne: (id) => axiosServices.get(`${urls.getOneUser}/${id}`).then(value => value.data),
    getUserRole: (id) => axiosServices.get(`${urls.getUserRole}/${id}`).then(value => value.data),
    updateRoles: (id, roles) => axiosServices.put(`${urls.updateUserRoles}/${id}`, roles).then(value => value.data)
};