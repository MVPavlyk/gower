import {configureStore} from '@reduxjs/toolkit';
import placeReducers from './slices/onePlace.slice'


const store = configureStore({
    reducer: {
        placeReducers
    }
});

export default store;