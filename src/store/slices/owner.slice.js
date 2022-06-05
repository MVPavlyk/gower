import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {OwnerServices} from '../../services';

export const getMyPlaces = createAsyncThunk(
    'ownerSlice/getMyPlaces',
    async (_, {rejectWithValue}) => {
        try {
            return await OwnerServices.getMyPlaces();
        } catch (e) {
            rejectWithValue(e);
        }
    }
);

export const occupyTable = createAsyncThunk(
    'ownerSlice/occupyTable',
    async (id, {rejectWithValue}) => {
        try {
            return await OwnerServices.occupyTable(id);
        } catch (e) {
            rejectWithValue(e);
        }
    }
);

export const freeTable = createAsyncThunk(
    'ownerSlice/freeTable',
    async (id, {rejectWithValue}) => {
        try {
            return await OwnerServices.freeTable(id);
        } catch (e) {
            rejectWithValue(e);
        }
    }
);


const ownerSlice = createSlice({
    name: 'ownerSlice',
    initialState: {
        places: [],
        status: null,
        error: null
    }, extraReducers: {

        [getMyPlaces.fulfilled]: (state, action) => {
            state.status = 'rejected';
            state.places = action.payload;
        },

        [getMyPlaces.pending]: (state, action) => {
            state.status = 'pending';
        },

        [getMyPlaces.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [freeTable.fulfilled]: (state) => {
            state.status = 'fulfilled';
        },

        [freeTable.pending]: (state) => {
            state.status = 'pending';
        },

        [freeTable.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },

        [occupyTable.pending]: (state) => {
            state.status = 'pending';
        },

        [occupyTable.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});

const ownerReducers = ownerSlice.reducer;

export default ownerReducers;