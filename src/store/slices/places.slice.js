import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {placesServices} from '../../services';

export const getPlacesPaginated = createAsyncThunk(
    'placesSlice/getPlacesPaginated',
    async ({pageNum, pageSize}, {rejectWithValue}) => {
        try {
            return await placesServices.getPlacesPaginated(pageNum, pageSize);
        } catch (e) {
            rejectWithValue(e);
        }
    }
);

export const getOnePlace = createAsyncThunk(
    'placesSlice/getOnePlace',
    async (placeId, {rejectWithValue}) => {
        try {
            return await placesServices.getOnePlace(placeId);
        } catch (e) {
            rejectWithValue(e);
        }
    }
);


const placesSlice = createSlice({
    name: 'placesSlice',
    initialState: {
        status: null,
        error: null,
        placesPage: [],
        onePlace: null,
        pageNum: 1
    },

    reducers: {
        setCurrent: (state, action) => {
            state.pageNum = action.payload;
        },
    },

    extraReducers: {
        [getPlacesPaginated.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.placesPage = action.payload.results;
        },

        [getPlacesPaginated.pending]: (state) => {
            state.status = 'pending';
        },

        [getOnePlace.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.onePlace = action.payload;
        },

        [getOnePlace.pending]: (state) => {
            state.status = 'pending';
        },


    }

});

export const {setCurrent} = placesSlice.actions;

const placesReducers = placesSlice.reducer;

export default placesReducers;