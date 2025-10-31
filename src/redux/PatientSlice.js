import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = { patientInfo: { data: null, isLoading: false, hasError: false },
  patients: {},
  case:{isLoading:false,hasError:false},
  todayPatients:{},
  createHistory: { isLoading: false, hasError: false },
  created: {},
  patient: {},
  todayPatients:{} }

const url = process.env.REACT_APP_API_URL

export const getPatients = createAsyncThunk(
  "patients/getPatients",
  async () => {
    try {

      const response = await axios.get(url + '/patient')
      return response.data;
    } catch (error) {
      console.error(error);
    }
  });

  export const createCase = createAsyncThunk(
    "patients/creatCase",
    async (data) => {
      try {
        const {id,form}=data
        const response = await  axios.post(url+`/patient/${id}/recheck`,form)
        return response.status;
      } catch (error) {
        return error.message
      }
    });

export const getPatientData = createAsyncThunk(
  "patients/getPatientData",
  async (id) => {
    try {
      const response = await axios.get(url + `/patient/${id}`)
      return response.data;
    } catch (error) {
      return error.message
    }
  });

  export const createPatient = createAsyncThunk(
    'patient/createPatient',
    async ({ data, token }, { rejectWithValue }) => {
      try {
        const response = await axios.post(url +'/patient/', data, {
          headers: {
            Authorization: token,
          },
        });
        return response.data; 
      } catch (error) {
        return rejectWithValue({
          status: error.response?.status,
          message: error.response?.data?.message || 'Something went wrong',
        });
      }
    }
  );

  export const fetchTodayPatients = createAsyncThunk(
    "patients/fetchTodayPatients",
    async (id) => {
      try {
        const response = await axios.get(url + `/patient/today`)
        return response.data;
      } catch (error) {
        return error.message
      }
    });


export const sendHistory = createAsyncThunk(
  "patient/sendHistory",
  async (param) => {
    try {
      const { id, data } = param
      const request =await axios.post(url + `/patient/${id}/medical_history`, data)
      return request.status
    } catch (error) {
      return error.message
    }
  },
)



export const PatientSlice = createSlice({
  name: 'patient',
  initialState,
  reducers: {
    deleteCase: (state, action) => {
      state.patientInfo.data.Cases = state.patientInfo.data.Cases.filter(item => item.id !== action.payload.caseId)
      axios.delete(url + `/patient/${action.payload.patientId}/case/${action.payload.caseId}`)
    },
    setpatientID: (state, action) => {
      console.log(action.payload)
      state.patient.id = action.payload
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
      .addCase(sendHistory.pending, (state, action) => {
        state.createHistory.isLoading = true;
        state.createHistory.hasError = false;
      })
      .addCase(sendHistory.fulfilled, (state, action) => {
        state.createHistory.data = action.payload;
        state.createHistory.isLoading = false;
        state.createHistory.hasError = false
      })
      .addCase(sendHistory.rejected, (state, action) => {
        state.createHistory.hasError = true
        state.createHistory.isLoading = false;
      })
      .addCase(fetchTodayPatients.pending, (state, action) => {
        state.todayPatients.isLoading = true;
        state.todayPatients.hasError = false;
      })
      .addCase(fetchTodayPatients.fulfilled, (state, action) => {
        state.todayPatients.data = action.payload;
        state.todayPatients.isLoading = false;
        state.todayPatients.hasError = false
      })
      .addCase(fetchTodayPatients.rejected, (state, action) => {
        state.todayPatients.hasError = true
        state.todayPatients.isLoading = false;
      })
      .addCase(createCase.pending, (state, action) => {
        state.case.isLoading = true;
        state.case.hasError = false;
      })
      .addCase(createCase.fulfilled, (state, action) => {
        state.case.data = action.payload;
        state.case.isLoading = false;
        state.case.hasError = false
      })
      .addCase(createCase.rejected, (state, action) => {
        state.case.hasError = true
        state.case.isLoading = false;
      })
  }
})

// Action creators are generated for each case reducer function
export const { setPatients, setpatientID, deleteCase } = PatientSlice.actions
export const PatientsData = state => state.patient.patients?.data;


export default PatientSlice.reducer