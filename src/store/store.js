import {
    configureStore
} from '@reduxjs/toolkit';
import placeReducers from './slices/onePlace.slice';
import tableReducers from './slices/table.Slice';
import themeReducers from './slices/theme.slice';
import userReducers from './slices/user.slice';



const store = configureStore({
    reducer: {
        placeReducers,
        tableReducers,
        themeReducers,
        userReducers
    }
});

export default store;