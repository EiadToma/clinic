import { configureStore, combineReducers } from '@reduxjs/toolkit';
import FaqSlice from './FaqSlice';
import PatientSlice from './PatientSlice';
import SecertariaSlice from './Secertaria';
import UserSlice from './UserSlice';

// Combine all slices into a single root reducer
const rootReducer = combineReducers({
  faq: FaqSlice,
  patient: PatientSlice,
  user: UserSlice,
  secertaria: SecertariaSlice,
});

// Create the store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
