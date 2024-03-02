import { configureStore } from '@reduxjs/toolkit'
import CaseSlice from './CaseSlice'
import  FaqSlice from './FaqSlice'
import PatientSilce from './PatientSilce'
export const store = configureStore({
  reducer: {
    faq:FaqSlice,
    patient:PatientSilce,
    case:CaseSlice
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
    serializableCheck:false
  })
})