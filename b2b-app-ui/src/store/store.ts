import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from '@reduxjs/toolkit';
import userAuthSlice from '../store/reducers/authReducer';
import { apiSlice } from './api/apiSlice';
import { rtkQueryLogger } from './middlewares/apiLogger';

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  userAuthSlice: userAuthSlice.reducer,
});

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware, rtkQueryLogger),
  });
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
