import {configureStore} from '@reduxjs/toolkit';
import placeReducers from './slices/onePlace.slice'
import tableReducers from './slices/table.Slice';
import modeReducers from "./slices/mode.slice";


const store = configureStore({
    reducer: {
        placeReducers,
        tableReducers,
        modeReducers
    }
});

export default store;