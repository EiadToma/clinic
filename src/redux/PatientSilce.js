import { createSlice,createAsyncThunk  } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {patient:{history:{},cases:{}},patientInfo: { data: null, isLoading: false, hasError: false },patients:{},created:{}}
const url =process.env.REACT_APP_API_URL


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
  async (id) => {
    try {
      const response = await axios.get(url+`/patient/${id}/medical_history`)
      return response.data;
    } catch (error) {
      console.error(error);
    }
});

export const getPatientData = createAsyncThunk(
  "patients/getPatientData", 
  async (id) => {
    try {
      const response = await axios.get(url+`/patient/${id}`)
      return response.data;
    } catch (error) {
      console.error(error);
    }
});

export const getCases = createAsyncThunk(
  "patients/getcases", 
  async (id) => {
    try {
      const response = await axios.get(url+`/patient/${id}/case`)
      return response.data;
    } catch (error) {
      console.error(error);
    }
});

export const createPatient = createAsyncThunk(
  "patients/createPatient", 
  async (data) => {
    try {
      const response =await axios.post(url+'/patient',data)
      console.log(response)
       return response.status;
    } catch (error) {
      console.error(error);
    }
});




export const PatientSlice = createSlice({
  name: 'patient',
  initialState,
  reducers: {
    sendHistory:(state,action)=>{
      const {data,patientID} = action.payload
      console.log(patientID)
      axios.post(url+`/patient/${patientID}/medical_history`,data).then(res=>console.log(res))
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
      state.patients.isLoading = true; 
      state.patients.hasError = false;
    })
      .addCase(getPatients.fulfilled, (state, action) => {
        state.patients.data = action.payload;
        state.patients.isLoading = false;
        state.patients.hasError = false
      })
      .addCase(getPatients.rejected, (state, action) => {
        state.patients.hasError = true
        state.patients.isLoading = false;
      })
      .addCase(getHistory.pending, (state, action) => {
        state.patient.history.isLoading = true; 
        state.patient.history.hasError = false;
      })
      .addCase(getHistory.fulfilled, (state, action) => {
        state.patient.history = action.payload;
        state.patient.history.isLoading = false;
        state.patient.history.hasError = false
      })
      .addCase(getHistory.rejected, (state, action) => {
        state.patient.history.hasError = true
        state.patient.history.isLoading = false;
      })
      .addCase(getCases.pending, (state, action) => {
        state.patient.cases.isLoading = true; 
        state.patient.cases.hasError = false;
      })
      .addCase(getCases.fulfilled, (state, action) => {
        state.patient.cases = action.payload;
        state.patient.cases.isLoading = false;
        state.patient.cases.hasError = false
      })
      .addCase(getCases.rejected, (state, action) => {
        state.patient.cases.hasError = true
        state.patient.cases.isLoading = false;
      })
      .addCase(createPatient.pending, (state, action) => {
        state.created.isLoading = true; 
        state.created.hasError = false;
      })
      .addCase(createPatient.fulfilled, (state, action) => {
        state.created.status = action.payload;
        state.created.isLoading = false;
        state.created.hasError = false
      })
      .addCase(createPatient.rejected, (state, action) => {
        state.created.hasError = true
        state.created.isLoading = false;
      })
      .addCase(getPatientData.pending, (state, action) => {
        state.patientInfo.isLoading = true; 
        state.patientInfo.hasError = false;
      })
        .addCase(getPatientData.fulfilled, (state, action) => {
          state.patientInfo = action.payload;
          state.patientInfo.isLoading = false;
          state.patientInfo.hasError = false
        })
        .addCase(getPatientData.rejected, (state, action) => {
          state.patientInfo.hasError = true
          state.patientInfo.isLoading = false;
        })
  }
})

// Action creators are generated for each case reducer function
export const {setPatients,sendHistory,setpatientID } = PatientSlice.actions
export const PatientsData = state => state.patient.patients?.data;


export default PatientSlice.reducer