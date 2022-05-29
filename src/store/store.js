import {
    configureStore
} from '@reduxjs/toolkit';
import placeReducers from './slices/onePlace.slice';
import tableReducers from './slices/table.Slice';
import themeReducers from './slices/theme.slice';
import userReducers from './slices/user.slice';
import languageReducers from './slices/language.slice';
import adminReducers from './slices/admin.slice';
import getUsersReducers from './slices/getUsers.slice';


const store = configureStore({
    reducer: {
        adminReducers,
        placeReducers,
        tableReducers,
        themeReducers,
        languageReducers,
        userReducers,
        getUsersReducers
    }
});

export default store;