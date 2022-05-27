import {createSlice} from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState: {
        dark: false
    },
    reducers: {
        getTheme: (state) => {
            state.dark = JSON.parse(localStorage.getItem('darkMode'))
        },
        switchTheme: (state) => {
            const currentState = !state.dark;
            state.dark = currentState;
            localStorage.setItem('darkMode', `${currentState}`);
        }
    }
});

const themeReducers = themeSlice.reducer;

export const {switchTheme, getTheme} = themeSlice.actions;

export default themeReducers;