import {createSlice} from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState: {
        dark: false
    },
    reducers: {
        switchTheme: (state) => {
            state.dark = !state.dark;
        }
    }
});

const themeReducers = themeSlice.reducer;

export const {switchTheme} = themeSlice.actions;

export default themeReducers;