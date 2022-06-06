import {bookingServices} from '../services/booking.services';

export const getBookingByPlace = async (placeId) => {
    try {
        return await bookingServices.getBookingsForToday(placeId);
    } catch (e) {
        console.error(e);
    }
};