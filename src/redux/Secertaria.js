import { createSlice,createAsyncThunk  } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {date:{},appointments:{}
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
      console.error(error);
    }
});

export const addPayment = createAsyncThunk(
  "patient/addPayment", 
  async (data) => {
    try {
      console.log(data)
      const body = {name:data.name,amount:data.amount}
      console.log(body)
      const response = await axios.post(url+`/visits/${data.id}/payment`,body)
      return response.data;
    } catch (error) {
      console.error(error);
    }
});

export const createAppointment = createAsyncThunk(
  "patient/createAppointment", 
  async (data) => {
    try {
      const response = await axios.post(url+'/visits',data)
      return response.data;
    } catch (error) {
      console.error(error);
    }
});


export const SecertariaSlice = createSlice({
  name: 'secertaria',
  initialState,
  reducers: {
    SelectedDate:(state,action)=>{
      console.log(action.payload)
      state.date.day=action.payload.day
      state.date.month=action.payload.month
      state.date.year=action.payload.year
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
        state.isLoading = true; 
        state.hasError = false;
      })
      .addCase(createAppointment.fulfilled, (state, action) => {
        state.patients = action.payload;
        state.isLoading = false;
        state.hasError = false
        })
      .addCase(createAppointment.rejected, (state, action) => {
        state.hasError = true
        state.isLoading = false;
        })
  }
})

// Action creators are generated for each case reducer function
export const {SelectedDate } = SecertariaSlice.actions


export default SecertariaSlice.reducer