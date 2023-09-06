import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import rocketSlice from './slices/rockets/rocketSlice';
import missionSlice from './slices/missions/missionSlice';

const store = configureStore({
  reducer: { rockets: rocketSlice, missions: missionSlice },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
