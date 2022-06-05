import {
    configureStore
} from '@reduxjs/toolkit';
import tableReducers from './slices/table.Slice';
import themeReducers from './slices/theme.slice';
import userReducers from './slices/user.slice';
import languageReducers from './slices/language.slice';
import adminReducers from './slices/admin.slice';
import getUsersReducers from './slices/getUsers.slice';
import ownerReducers from './slices/owner.slice';
import photosReducers from './slices/photos.slice';
import bookingReducers from './slices/booking.slice';
import placesReducers from './slices/places.slice';


const store = configureStore({
    reducer: {
        adminReducers,
        tableReducers,
        themeReducers,
        languageReducers,
        userReducers,
        placesReducers,
        getUsersReducers,
        ownerReducers,
        photosReducers,
        bookingReducers
    }
});

export default store;