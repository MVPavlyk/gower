import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {GetUsersServices} from '../../services';

export const getAllPaginated = createAsyncThunk(
    'getUsersSlice/getAllPaginated',
    async (reqObj, {rejectWithValue}) => {
        try {
            return GetUsersServices.getPaginated(reqObj);
        } catch (e) {
            rejectWithValue(e);
        }
    }
);

export const getOneUser = createAsyncThunk(
    'getUsersSlice/getOneUser',
    async (id, {rejectWithValue}) => {
        try {
            return GetUsersServices.getOne(id);
        } catch (e) {
            rejectWithValue(e);
        }
    }
);

export const getUserRoles = createAsyncThunk(
    'getUsersSlice/getUserRoles',
    async (id, {rejectWithValue}) => {
        try {
            return GetUsersServices.getUserRole(id);
        } catch (e) {
            rejectWithValue(e);
        }
    }
);

export const updateUserRoles = createAsyncThunk(
    'getUsersSlice/updateUserRoles',
    async ({id, userRoles}, {rejectWithValue}) => {
        try {
            return GetUsersServices.updateRoles(id, userRoles);
        } catch (e) {
            rejectWithValue(e);
        }
    }
);

const getUsersSlice = createSlice({
        name: 'getUsersSlice',
        initialState: {
            users: [],
            allPages: undefined,
            currentPage: 1,
            pageSize: 5,
            userType: undefined,
            oneUser: null,
            oneUserRoles: [],
            rolesToUpdate: [],
            error: null,
            status: null
        },
        reducers: {
            setSize: (state, action) => {
                state.pageSize = action.payload;
            },
            setType: (state, action) => {
                state.userType = action.payload;
            },
            setCurrent: (state, action) => {
                state.currentPage = action.payload;
            },
            setRolesToUpdate: (state, action) => {
                state.rolesToUpdate = action.payload;
            },
            setRoles: (state, action) => {
                state.oneUserRoles = action.payload;
            }
        },
        extraReducers: {
            [getAllPaginated.fulfilled]: (state, action) => {
                state.status = 'fulfilled';
                state.users = action.payload.results;
                state.allPages = action.payload.pageCount;
                // state.currentPage = action.payload.currentPage;
            },

            [getAllPaginated.rejected]: (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
            },

            [getOneUser.fulfilled]: (state, action) => {
                state.status = 'fulfilled';
                state.oneUser = action.payload;
            },

            [getOneUser.rejected]: (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
            },

            [getUserRoles.fulfilled]: (state, action) => {
                state.status = 'fulfilled';
                state.oneUserRoles = action.payload;
                state.rolesToUpdate = action.payload;
            },

            [getUserRoles.rejected]: (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
            },

            [updateUserRoles.fulfilled]: (state, action) => {
                state.status = 'fulfilled';
                state.oneUserRoles = action.payload;
            },

            [updateUserRoles.rejected]: (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
            }
        }
    }
);

export const {setSize, setType, setCurrent, setRolesToUpdate, setRoles} = getUsersSlice.actions;

const getUsersReducers = getUsersSlice.reducer;

export default getUsersReducers;