import {axiosServices} from './axios.services';

import {urls} from '../config';

export const UserServices = {
    login: (loginData) => axiosServices.post(urls.login, loginData).then(value => value.data),
    register: (registerData) => axiosServices.post(urls.register, registerData).then(value => value.data),
    logout: () => axiosServices.post(urls.logout)
};