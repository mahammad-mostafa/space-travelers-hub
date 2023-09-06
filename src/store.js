import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import rocketSlice from './slices/rockets/rocketSlice';

const store = configureStore({
  reducer: { rockets: rocketSlice },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
