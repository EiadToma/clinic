import { createSlice,createAsyncThunk  } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {date:{},
createNew:{isLoading:false,hasError:false},
payments:{isLoading:false,hasError:false},
appointments:{data:{data:[]}},
patientAppointments:{}
}
const url = process.env.REACT_APP_API_URL;

export const getAppointments = createAsyncThunk(
  "patient/getAppointments", 
  async (date) => {
    try {
      console.log(date)
      // need to add date to param
      const response = await axios.get(url+'/visits',{params:date})
      return response.data;
    } catch (error) {
      return error.data;
    }
});

export const addPayment = createAsyncThunk(
  "patient/addPayment", 
  async (data) => {
    try {
      console.log(data)
      const body = {name:data.name,amount:data.amount}
      const response = await axios.post(url+`/visits/${data.id}/payment`,body)
      return response.data;
    } catch (error) {
      return error.data;
    }
});

export const createAppointment = createAsyncThunk(
  "patient/createAppointment", 
  async (data) => {
    try {
      const {formData,token} =data
      console.log(formData)
      const headers = {
        'Content-Type': 'application/json',
        Authorization: token,
        // Add other custom headers here
      };
      const response = await axios.post(url+'/visits',formData,{headers})
      return response.data;
    } catch (error) {
      return error.data;
    }
});

export const getPatientAppointments = createAsyncThunk(
  "patient/getPatientAppointments", 
  async (data) => {
    try {
      const response = await axios.get(url+'/visits', {
        params: data,
      })
      return response.data;
    } catch (error) {
      console.log(error) 
    }
});

export const SecertariaSlice = createSlice({
  name: 'secertaria',
  initialState,
  reducers: {
    SelectedDate:(state,action)=>{
      state.date.day=action.payload.day
      state.date.month=action.payload.month
      state.date.year=action.payload.year
    },
    DeleteAppointment:(state,action)=>{
      state.appointments.data.data= state.appointments.data.data?.filter(item=>item.id !==action.payload)
      axios.delete(url+`/visits/${action.payload}`)
    },
    DeletePatient:(state,action)=>{
      axios.delete(url+`/patient/${action.payload}`)
    },
    AddPayment:(state,action)=>{
      const {newPayment,id} = action.payload
      state.appointments.data.data.find(item => item.id === id)?.Payments.push(newPayment)
    }
 
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAppointments.pending, (state, action) => {
      state.appointments.isLoading = true; 
      state.appointments.hasError = false;
    })
      .addCase(getAppointments.fulfilled, (state, action) => {
        state.appointments.data = action.payload;
        state.appointments.isLoading = false;
        state.appointments.hasError = false
      })
      .addCase(getAppointments.rejected, (state, action) => {
        state.appointments.hasError = true
        state.appointments.isLoading = false;
      })
      .addCase(createAppointment.pending, (state, action) => {
        state.createNew.isLoading = true; 
        state.createNew.hasError = false;
      })
      .addCase(createAppointment.fulfilled, (state, action) => {
        state.createNew = action.payload;
        state.createNew.isLoading = false;
        state.createNew.hasError = false
        })
      .addCase(createAppointment.rejected, (state, action) => {
        state.createNew.hasError = true
        state.createNew.isLoading = false;
        })
      .addCase(getPatientAppointments.pending, (state, action) => {
          state.patientAppointments.isLoading = true; 
          state.patientAppointments.hasError = false;
        })
      .addCase(getPatientAppointments.fulfilled, (state, action) => {
          state.patientAppointments.data = action.payload;
          state.patientAppointments.isLoading = false;
          state.patientAppointments.hasError = false
          })
      .addCase(getPatientAppointments.rejected, (state, action) => {
          state.patientAppointments.hasError = true
          state.patientAppointments.isLoading = false;
          })
      .addCase(addPayment.pending, (state, action) => {
            state.payments.isLoading = true; 
            state.payments.hasError = false;
          })
      .addCase(addPayment.fulfilled, (state, action) => {
            state.payments.data = action.payload;
            state.payments.isLoading = false;
            state.payments.hasError = false
            })
      .addCase(addPayment.rejected, (state, action) => {
            state.payments.hasError = true
            state.payments.isLoading = false;
            })
  }
})

// Action creators are generated for each case reducer function
export const {SelectedDate,DeletePatient,DeleteAppointment,AddPayment } = SecertariaSlice.actions


export default SecertariaSlice.reducer