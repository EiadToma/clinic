import { createSlice, createAsyncThunk, isRejected } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
  searchempty: true,
  localSearch: '',
  createUser:{},
  loginRequest: { isLoading: false, hasError: false, data: {} },
  searchResult: { isLoading: false, hasError: false },
  fullSearch: { isLoading: false, hasError: false },
  Mode: 'dark'
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
  

export const fullSearch = createAsyncThunk(
  "user/fullSearch",
  async (filteredSearchParam) => {
    try {
      const response = await axios.get(url + `/patient/cases/search`, {
        params: filteredSearchParam
      })
      return response.data?.data;
    } catch (error) {
      console.error(error);
    }
  });

  export const createUser = createAsyncThunk(
    "user/createUser",
    async (payload) => {
      const {data,token} = payload
      const headers = {
        'Content-Type': 'application/json',
        Authorization: token,
        // Add other custom headers here
      };
      try {
        const response = await axios.post(url + `/user`, data,{headers})
        return response.data?.data;
      } catch (error) {
        console.error(error);
      }
    });

export const loginRequest = createAsyncThunk(
  "user/loginRequest",
  async (credintials) => {
    try {
      const response = await axios.post(url + `/user/login`, credintials)
      return response.data?.data;
    } catch (error) {
      console.error(error);
      return  error.response.data;
    }
  });

export const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    EmptySearch: (state, action) => {
      state.searchempty = action.payload
    },
    localSearch: (state, action) => {
      state.localSearch = action.payload
    },
    Logout:(state,action)=>{
      state.loginRequest.data ={}
      localStorage.removeItem('token')
    },
    changeMode: (state, action) => {
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
      .addCase(fullSearch.pending, (state, action) => {
        state.fullSearch.isLoading = true;
        state.fullSearch.hasError = false;
      })
      .addCase(fullSearch.fulfilled, (state, action) => {
        state.fullSearch.data = action.payload;
        state.fullSearch.isLoading = false;
        state.fullSearch.hasError = false
      })
      .addCase(fullSearch.rejected, (state, action) => {
        state.fullSearch.hasError = true
        state.fullSearch.isLoading = false;
      })
      .addCase(loginRequest.pending, (state, action) => {
        state.loginRequest.isLoading = true;
        state.loginRequest.error = false;
      })
      .addCase(loginRequest.fulfilled, (state, action) => {
        state.loginRequest.data = action.payload;
        state.loginRequest.isLoading = false;
        state.loginRequest.error = false
      })
      .addCase(loginRequest.rejected, (state, action) => {
        state.loginRequest.error = true
        state.loginRequest.isLoading = false;
      })
      .addCase(createUser.pending, (state, action) => {
        state.createUser.isLoading = true;
        state.createUser.error = false;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.createUser.data = action.payload;
        state.createUser.isLoading = false;
        state.createUser.error = false
      })
      .addCase(createUser.rejected, (state, action) => {
        state.createUser.error = true
        state.createUser.isLoading = false;
      })
  }
})

// Action creators are generated for each case reducer function
export const { changeMode, EmptySearch,Logout, clearSearch, localSearch } = UserSlice.actions

export default UserSlice.reducer