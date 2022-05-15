import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const modeSlice = createSlice({
    name: 'modeSlice',
    initialState: {
        dark: false
    },
    reducers: {
        switchMode: (state) => {
            state.dark = !state.dark;
        }
    }
});

const modeReducers = modeSlice.reducer;

export const {switchMode} = modeSlice.actions;

export default modeReducers;
