import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {tablesServices} from '../../services';

export const getTablesOfPlace = createAsyncThunk(
    'onePlaceSlice/getTablesOfPlace',
    async (id, {rejectWithValue}) => {
        try {
            return await tablesServices.getTablesByPlace(id);
        } catch (e) {
            rejectWithValue(e);
        }
    }
);

const tableSlice = createSlice({
    name: 'onePlaceSlice',
    initialState: {
        status: null,
        tables: [],
        placeTables: []
    },
    reducers: {
        addTable(state, action) {
            state.tables.push(action.payload);
        },
        deleteTable(state, action) {
            const toDelete = action.payload;
            state.tables = state.tables.filter(table => table.number !== toDelete.number);
        },
        sendReserve(state) {
            state.tables = [];
        }
    },
    extraReducers: {
        [getTablesOfPlace.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.placeTables = action.payload;
        },
        [getTablesOfPlace.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },

    }
});

const tableReducers = tableSlice.reducer;

export const {addTable, deleteTable, sendReserve} = tableSlice.actions;

export default tableReducers;