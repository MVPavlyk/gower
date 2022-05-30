import {axiosServices} from './axios.services';

import {urls} from '../config';

export const UserServices = {
    login: (loginData) => axiosServices.post(urls.login, loginData).then(value => value.data),
    register: (registerData) => axiosServices.post(urls.register, registerData).then(value => value.data),
    logout: () => axiosServices.post(urls.logout).then(value => value.data),
    changePsw: (pwsData) => axiosServices.put(urls.changePsw, pwsData).then(value => value.data),
    deleteUser: () => axiosServices.delete(urls.deleteUser),
    updateUser: (user) => axiosServices.post(urls.update, user).then(value => value.data),
    getMyRoles: () => axiosServices.get(urls.getMyRoles).then(value => value.data)
};