import {createSlice} from '@reduxjs/toolkit';

const tableSlice = createSlice({
    name: 'onePlaceSlice',
    initialState: {
        status: null,
        tables: []
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
            state.tables = []
        }
    }
});

const tableReducers = tableSlice.reducer;

export const {addTable, deleteTable, sendReserve} = tableSlice.actions;

export default tableReducers;