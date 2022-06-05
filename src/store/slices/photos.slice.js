import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {PhotosServices} from '../../services';

export const uploadPhoto = createAsyncThunk(
    'photosSlice/uploadPhoto',
    async ({type, placeId, file, description}, {rejectWithValue}) => {
        try {
            return await PhotosServices.uploadPhoto(type, placeId, file, description);
        } catch (e) {
            rejectWithValue(e);
        }
    }
);

export const downloadPhoto = createAsyncThunk(
    'photosSlice/downloadPhoto',
    async ({type, placeId}, {rejectWithValue}) => {
        try {
            return await PhotosServices.downloadPhoto(type, placeId);
        } catch (e) {
            rejectWithValue(e);
        }
    }
);


const photosSlice = createSlice({
    name: 'photosSlice',
    initialState: {
        status: null,
        error: null,
        photo: null
    }, extraReducers: {

        [uploadPhoto.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },

        [downloadPhoto.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.photo = action.payload;
        }
    }
});

const photosReducers = photosSlice.reducer;

export default photosReducers;