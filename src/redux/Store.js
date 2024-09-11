import { configureStore } from '@reduxjs/toolkit'
import CaseSlice from './CaseSlice'
import  FaqSlice from './FaqSlice'
import PatientSilce from './PatientSilce'
import  SecertariaSlice  from './Secertaria'
import UserSlice from './UserSlice'
export const store = configureStore({
  reducer: {
    faq:FaqSlice,
    patient:PatientSilce,
    case:CaseSlice,
    user:UserSlice,
    secertaria:SecertariaSlice
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
    serializableCheck:false
  })
})