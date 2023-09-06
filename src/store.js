import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import missionSlice from './slices/missions/missionSlice';

const store = configureStore({
  reducer: {
    missions: missionSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
