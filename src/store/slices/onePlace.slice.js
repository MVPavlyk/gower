import {createSlice} from '@reduxjs/toolkit';
import storage from '../../db';

const onePlaceSlice = createSlice({
    name: 'onePlaceSlice',
    initialState: {
        oneRestaurant: {},
        status: null,
        error: null
    },
    reducers: {
        getRestaurant: (state, action) => {
            state.oneRestaurant = storage[action.payload.id - 1];
        }
    }
});

const placeReducers = onePlaceSlice.reducer;

export const {getRestaurant} = onePlaceSlice.actions;

export default placeReducers;