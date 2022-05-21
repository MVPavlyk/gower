import {createSlice} from '@reduxjs/toolkit';

const languageSlice = createSlice({
    name: 'languageSlice',
    initialState: {
        EN: false
    },
    reducers: {
        switchLanguage: (state) => {
            state.EN = !state.EN;
        }
    }
});

const languageReducers = languageSlice.reducer;

export const {switchLanguage} = languageSlice.actions;

export default languageReducers;