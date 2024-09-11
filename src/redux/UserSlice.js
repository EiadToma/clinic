import { createSlice,createAsyncThunk, isRejected  } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    searchempty:true,
    localSearch:'',
    searchResult:{isLoading:false,isRejected:false},
    Mode:'dark'
}
const url = process.env.REACT_APP_API_URL;

export const getSearch = createAsyncThunk(
  "user/getSearch", 
  async (searchData) => {
    try {
      console.log(searchData)
      const response = await axios.get(url + '/patient', {
        params: searchData,
      });
        return response.data?.data;
    } catch (error) {
      console.error(error);
    }
});

export const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    EmptySearch: (state,action) => {
      state.searchempty = action.payload
   },
   localSearch: (state,action) => {
    state.localSearch = action.payload
 },
    changeMode: (state,action) => {
       state.Mode = action.payload
    },
    clearSearch: (state) => {
      state.searchResult.data = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSearch.pending, (state, action) => {
      state.searchResult.isLoading = true; 
      state.searchResult.hasError = false;
    })
      .addCase(getSearch.fulfilled, (state, action) => {
        state.searchResult.data = action.payload;
        state.searchResult.isLoading = false;
        state.searchResult.hasError = false
      })
      .addCase(getSearch.rejected, (state, action) => {
        state.searchResult.hasError = true
        state.searchResult.isLoading = false;
      })
    }
})

// Action creators are generated for each case reducer function
export const {changeMode ,EmptySearch,clearSearch,localSearch} = UserSlice.actions


export default UserSlice.reducer