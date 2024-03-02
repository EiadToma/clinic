import { createSlice,createAsyncThunk  } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {patient:{}}
const url ='https://clinic-backend-0lcl.onrender.com'


export const getPatients = createAsyncThunk(
  "patients/getPatients", 
  async () => {
    try {
      const response = await axios.get(url+'/patient')
      return response.data;
    } catch (error) {
      console.error(error);
    }
});
export const getHistory = createAsyncThunk(
  "patients/getHistory", 
  async () => {
    try {
      const response = await axios.get(url+'/patient/1/medical_history')
      return response.data;
    } catch (error) {
      console.error(error);
    }
});


export const PatientSlice = createSlice({
  name: 'patient',
  initialState,
  reducers: {
    sendHistory:(action)=>{
      axios.post(url+'/patient/1/medical_history',action.payload).then(res=>console.log(res))
      .catch(error=>console.log(error))
    },
    createPatient: (state,action) => {
    axios.post(url+'/patient',action.payload).then(res=>console.log(res))
    .catch(error=>console.log(error))
    },
    setpatientID:(state,action)=>{
      console.log(action.payload)
      state.patient.id=action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPatients.pending, (state, action) => {
      state.isLoading = true; 
      state.hasError = false;
    })
      .addCase(getPatients.fulfilled, (state, action) => {
        state.patients = action.payload;
        state.isLoading = false;
        state.hasError = false
      })
      .addCase(getPatients.rejected, (state, action) => {
        state.hasError = true
        state.isLoading = false;
      })
      .addCase(getHistory.pending, (state, action) => {
        state.isLoading = true; 
        state.hasError = false;
      })
      .addCase(getHistory.fulfilled, (state, action) => {
        state.patient.history = action.payload;
        state.isLoading = false;
        state.hasError = false
      })
      .addCase(getHistory.rejected, (state, action) => {
        state.hasError = true
        state.isLoading = false;
      })
  }
})

// Action creators are generated for each case reducer function
export const {setPatients, createPatient,sendHistory,setpatientID } = PatientSlice.actions
export const PatientsData = state => state.patient.patients?.data;


export default PatientSlice.reducer