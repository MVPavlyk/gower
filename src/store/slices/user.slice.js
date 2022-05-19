import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {UserServices} from '../../services/user.services';

export const login = createAsyncThunk(
    'userSlice/login',
    async (obj) => {
        try {
            const user = await UserServices.login(obj);
            return user;
        } catch (error) {
            console.log(error);
        }

    }
);


export const registration = createAsyncThunk(
    'userSlice/register',
    async (obj) => {
        try {
            const user = await UserServices.register(obj);
            return user;
        } catch (error) {
            console.log(error);
        }

    }
);


const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        error: null,
        status: null,
        user: {}
    },
    extraReducers: {
        [login.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [login.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.user = action.payload;
        },
        [login.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [registration.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [registration.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.user = action.payload;
        },
        [registration.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});

const userReducers = userSlice.reducer;


export default userReducers;