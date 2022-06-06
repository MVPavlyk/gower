import {axiosServices} from './axios.services';

import {urls} from '../config';

export const bookingServices = {
    createBooking: (reqObj) => axiosServices.post(urls.createBooking, reqObj).then(value => value.data),
    getMyBookings: (pageNum, pageSize) => axiosServices.get(`${urls.getMyBookings}?Page=${pageNum}&PageSize=${pageSize}`).then(value => value.data),
    getBookingsForToday: (placeId) => axiosServices.get(`${urls.getBookingsForToday}?placeId=${placeId}`).then(value => value.data),
    updateBooking: (reqObj) => axiosServices.put(urls.updateBooking, reqObj).then(value => value.data),
    deleteBooking: (id) => axiosServices.delete(`${urls.deleteBooking}?bookingId=${id}`).then(value => value.data)
};