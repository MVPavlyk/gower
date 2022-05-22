import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {UserServices} from '../../services/user.services';

export const login = createAsyncThunk(
    'userSlice/login',
    async (obj, {rejectWithValue}) => {
        try {
            return await UserServices.login(obj);
        } catch (error) {
            return rejectWithValue(error.message);
        }

    }
);


export const registration = createAsyncThunk(
    'userSlice/register',
    async (obj, {rejectWithValue}) => {
        try {
            return await UserServices.register(obj);
        } catch (error) {
            return rejectWithValue(error.message);
        }

    }
);

export const logout = createAsyncThunk(
    'userSlice/logout',
    async (_, {rejectWithValue}) => {
        try {
            return await UserServices.logout();
        } catch (error) {
            console.log(error);
        }
    }
);


export const changePsw = createAsyncThunk(
    'userSlice/changePsw',
    async (obj, {rejectWithValue}) => {
        try {
            return await UserServices.changePsw(obj);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const deleteUser = createAsyncThunk(
    'userSlice/deleteUser',
    async (_, {rejectWithValue}) => {
        try {
            return await UserServices.deleteUser();
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const updateUser = createAsyncThunk(
    'userSlice/updateUser',
    async (user, {rejectWithValue}) => {
        try {
            return await UserServices.updateUser(user);
        } catch (e) {
            return rejectWithValue(e);
        }
    }
);


const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        error: null,
        status: null,
        user: null
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
        },


        [logout.fulfilled]: (state) => {
            state.status = 'fulfilled';
            state.user = null;
        },

        [logout.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },

        [changePsw.fulfilled]: (state) => {
            state.status = 'fulfilled';
            state.error = null;
        },

        [changePsw.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },

        [deleteUser.fulfilled]: (state) => {
            state.status = 'fulfilled';
            state.user = null;
        },

        [deleteUser.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },

        [updateUser.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.user = action.payload;
        },

        [updateUser.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }

    }
});

const userReducers = userSlice.reducer;


export default userReducers;