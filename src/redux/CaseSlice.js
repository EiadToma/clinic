import { createSlice,createAsyncThunk  } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {}
const url = process.env.REACT_APP_API_URL;

console.log(url)
export const getCases = createAsyncThunk(
  "patient/getCases", 
  async () => {
    try {
      const response = await axios.get(url+'/patient')
      return response.data;
    } catch (error) {
      console.error(error);
    }
});



export const CaseSlice = createSlice({
  name: 'case',
  initialState,
  reducers: {
    createCase: (state,action) => {
      const {patientId,form}=action.payload
      for (const pair of form.entries()) {
        console.log(pair[0] + pair[1])
      }
    axios.post(url+`/patient/${patientId}/recheck`,form).then(res=>console.log(res))
    .catch(error=>console.log(error))
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCases.pending, (state, action) => {
      state.isLoading = true; 
      state.hasError = false;
    })
      .addCase(getCases.fulfilled, (state, action) => {
        state.patients = action.payload;
        state.isLoading = false;
        state.hasError = false
      })
      .addCase(getCases.rejected, (state, action) => {
        state.hasError = true
        state.isLoading = false;
      })
  }
})

// Action creators are generated for each case reducer function
export const {createCase } = CaseSlice.actions


export default CaseSlice.reducer