import { configureStore } from '@reduxjs/toolkit';

import rootReducer from 'src/slices/rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export default store;
