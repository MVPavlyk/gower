import {configureStore} from '@reduxjs/toolkit';
import placeReducers from './slices/onePlace.slice'
import tableReducers from './slices/table.Slice';


const store = configureStore({
    reducer: {
        placeReducers,
        tableReducers
    }
});

export default store;