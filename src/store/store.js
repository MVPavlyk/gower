import {
    configureStore
} from '@reduxjs/toolkit';
import placeReducers from './slices/onePlace.slice';
import tableReducers from './slices/table.Slice';
import themeReducers from './slices/theme.slice';
import userReducers from './slices/user.slice';
import languageReducers from "./slices/language.slice";



const store = configureStore({
    reducer: {
        placeReducers,
        tableReducers,
        themeReducers,
        languageReducers,
        userReducers
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types
                ignoredActions: ['your/action/type'],
                // Ignore these field paths in all actions
                ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
                // Ignore these paths in the state
                ignoredPaths: ['items.dates'],
            },
        }),
});

export default store;