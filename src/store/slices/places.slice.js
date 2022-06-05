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

export const getPlacesByQuery = createAsyncThunk(
    'placesSlice/getPlacesPaginated',
    async ({pageNum, pageSize, query}, {rejectWithValue}) => {
        try {
            return await placesServices.getPlacesByQuery(pageNum, pageSize, query);
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
        pageNum: 1,
        query: null
    },

    reducers: {
        setCurrent: (state, action) => {
            state.pageNum = action.payload;
        },
        setQuery: (state, action) => {
            console.log(action.payload);
            state.query = action.payload;
        }
    },

    extraReducers: {
        [getPlacesPaginated.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.placesPage = action.payload;
        },

        [getPlacesPaginated.pending]: (state) => {
            state.status = 'pending';
        },

        [getPlacesByQuery.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.placesPage = action.payload;
        },

        [getPlacesByQuery.pending]: (state) => {
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

export const {setCurrent, setQuery} = placesSlice.actions;

const placesReducers = placesSlice.reducer;

export default placesReducers;