import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  list: [],
  loading: true,
  error: null,
};

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');
    const dataFiltered = response.data.map((mission) => ({
      name: mission.mission_name,
      id: mission.mission_id,
      description: mission.description,
      link: mission.website,
      member: false,
    }));
    return dataFiltered;
  } catch (err) {
    return rejectWithValue(err.message);
  }
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    toggle: (state, { payload }) => {
      state.list = state.list.map((mission) => {
        if (mission.id === payload) {
          return ({
            ...mission,
            member: !mission.member,
          });
        }
        return mission;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.fulfilled, (state, { payload }) => {
        state.list = payload;
        state.loading = false;
      })
      .addCase(fetchMissions.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const { toggle } = missionsSlice.actions;

export default missionsSlice.reducer;
