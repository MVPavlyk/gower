import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {bookingServices} from '../../services/booking.services';

export const createBooking = createAsyncThunk(
    'bookingSlice/createBooking',
    async (reqObj, {rejectWithValue}) => {
        try {
            return await bookingServices.createBooking(reqObj);
        } catch (e) {
            rejectWithValue(e);
        }
    }
);

export const getMyBookings = createAsyncThunk(
    'bookingSlice/getMyBookings',
    async ({pageNum, pageSize}, {rejectWithValue}) => {
        try {
            return await bookingServices.getMyBookings(pageNum, pageSize);
        } catch (e) {
            rejectWithValue(e);
        }

    }
);

export const getBookingsForToday = createAsyncThunk(
    'bookingSlice/getBookingsForToday',
    async (placeId, {rejectWithValue}) => {
        try {
            return await bookingServices.getBookingsForToday(placeId);
        } catch (e) {
            rejectWithValue(e);
        }
    }
);

export const updateBooking = createAsyncThunk(
    'bookingSlice/updateBooking',
    async (reqObj, {rejectWithValue}) => {
        try {
            return await bookingServices.updateBooking(reqObj);
        } catch (e) {
            rejectWithValue(e);
        }
    }
);

export const deleteBooking = createAsyncThunk(
    'bookingSlice/deleteBooking',
    async (id, {rejectWithValue}) => {
        try {
            return await bookingServices.deleteBooking(id);
        } catch (e) {
            rejectWithValue(e);
        }
    }
);


const bookingSlice = createSlice({
    name: 'bookingSlice',
    initialState: {
        status: null,
        error: null,
        myBookings: []
    },
    extraReducers: {
        [createBooking.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [createBooking.fulfilled]: (state) => {
            state.status = 'fulfilled';
            state.error = null;
        },

        [getMyBookings.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [getMyBookings.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.myBookings = action.payload;
        }
    }


});

const bookingReducers = bookingSlice.reducer;

export default bookingReducers;