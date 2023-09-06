import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const states = { list: [], loading: false, error: undefined };

export const fetcher = createAsyncThunk('rockets/fetch', async (_, { rejectWithValue }) => {
  try {
    const result = (await axios.get('https://api.spacexdata.com/v4/rockets')).data;
    return result.map((item) => {
      const {
        id, name, description, flickr_images: image, wikipedia: link,
      } = item;
      return {
        id, link, name, description, image: image[0], reserved: false,
      };
    });
  } catch (error) {
    return rejectWithValue(error.messsage);
  }
});

const rocketSlice = createSlice({
  name: 'rockets',
  initialState: states,
  reducers: {
    toggle: (state, { payload }) => {
      state.list.map((item) => {
        if (item.id === payload) item.reserved = !item.reserved;
        return item;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetcher.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetcher.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.list = payload;
    });
    builder.addCase(fetcher.rejected, (state, { error }) => {
      if (error.message !== 'Aborted') {
        state.loading = false;
        state.error = error.message;
      }
    });
  },
});

export const { toggle } = rocketSlice.actions;

export default rocketSlice.reducer;