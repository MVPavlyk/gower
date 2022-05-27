import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {AdminServices} from '../../services/admin.services';

export const addPlace = createAsyncThunk(
    'adminSlice/addPlace',
    async (place, {rejectWithValue}) => {
        try {
            return AdminServices.createPlace(place);
        } catch (e) {
            rejectWithValue(e);
        }
    }
);

export const deletePlace = createAsyncThunk(
    'adminSlice/deletePlace',
    async (id, {rejectWithValue}) => {
        try {
            return AdminServices.deletePlace(id);
        } catch (e) {
            rejectWithValue(e);
        }
    }
);

export const createTable = createAsyncThunk(
    'adminSlice/createTable',
    async (table, {rejectWithValue}) => {
        try{
            return AdminServices.createTable(table)
        } catch (e) {
            rejectWithValue(e)
        }
    }
)

const adminSlice = createSlice({
        name: 'adminSlice',
        initialState: {
            status: null,
            error: null
        },


        extraReducers: {
            [addPlace.fulfilled]: (state) => {
                state.status = 'fulfilled';
            },

            [addPlace.rejected]: (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
            },

            [deletePlace.rejected]: (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
            },

            [createTable.rejected]: (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
            }
        }
    }
);

const adminReducers = adminSlice.reducer;

export default adminReducers;