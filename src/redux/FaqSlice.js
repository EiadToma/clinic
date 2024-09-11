import { createSlice,createAsyncThunk  } from '@reduxjs/toolkit'
import axios from 'axios'
const url =process.env.REACT_APP_API_URL

const initialState = { 
  faqData:{data:[],isLoading:false,hasError:false},
  historyLists:{data:[],isLoading:false,hasError:false},
  present_illness_x_ray:{},
  present_illness_current:{},
  present_illness_previous:{},
  related_consultation_attachment:{},
  present_illness:{
    lesion:{main_id:[],secondary_id:[],positions1:[],positions2:[],cause_id:[]},//edit
    notes:'',
    deformity:{left:[],right:[]},//edit
    vascular_status:{lpp:'',rpp:'',ldp:'',rdp:'',lpd:'',rpd:'',ldd:'',rdd:'',labi:0,rabi:0},//edit
    nervous_status:{thermo:{checked:false,text:''},neuro:{checked:false,text:''},mino:{checked:false,text:''}},//edit
    infection:{exists:false,leg:'',finger:0,iwgdf_classification:'',clinical_classification:[],},
    sinbad:{site:0,ischemia:0,neropath:0,area_ulcer:0,bacterial_infection:0,depth:0},
    gate_analysis:'',
    disability:''
  },
  managment:{
    status:'',
    technique: {text:'',tech:''},
    next_visit:'',
    notes:'',
    prescription_iv:'',
    prescription_po:'',
    labratory_test_ids :[]
},
  consultations:{
    last_cons_date:'',
    consultor_name :'',
    need_of_vascular:'',
    vascular_precedure:'',
    other:''
  },
  recommendation:{
    hospitalization:'',
    new_shoes:'',
    continue_shoes:'',
    physical_therapy:'',
    consultation:''
  },
}

export const getFaq = createAsyncThunk(
  "faq/getFaq", 
  async () => {
    try {
      const response = await axios.get(url+'/values/faq')
      return response.data;
    } catch (error) {
      console.error(error);
    }
});
export const getHistoryLists = createAsyncThunk(
  "faq/historyLists", 
  async () => {
    try {
      const response = await axios.get(url+'/values/history')
      return response.data;
    } catch (error) {
      console.error(error);
    }
});

export const FaqSlice = createSlice({
  name: 'faq',
  initialState,
  reducers: {
    sendFaqReq: (state,action) => {
      const {patientId,form} = action.payload

      axios.post(url+`/patient/${patientId}/case`,form).then(res=>console.log(res))
    .catch(error=>console.log(error))
    },
    updatePhotos:(state,action)=>{
      const { fieldName, value } = action.payload;
      state[fieldName]=value
    },
    updatePresent:(state,action)=>{
        const { fieldName,nestedField, doubleNested,value } = action.payload;
        console.log(action.payload)
        if(doubleNested)
        state.present_illness[fieldName][nestedField][doubleNested]=value
        else if(nestedField)
        state.present_illness[fieldName][nestedField]=value
        else
        state.present_illness[fieldName] = value;
  },
    updateManage:(state,action)=>{
      const { fieldName,nestedField, value } = action.payload;
      console.log(action.payload)
      if(nestedField)
      state.managment[fieldName][nestedField]=value
      else
      state.managment[fieldName] = value;
  },
    updateConsu:(state,action)=>{
      const { fieldName, value } = action.payload;
      console.log(action.payload)
      state.consultations[fieldName] = value;
  },
    updateRecomm:(state,action)=>{
      const { fieldName, value } = action.payload;
      console.log(action.payload)
      state.recommendation[fieldName] = value;
  },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFaq.pending, (state, action) => {
      state.isLoading = true; 
      state.hasError = false;
    })
      .addCase(getFaq.fulfilled, (state, action) => {
        state.faqData = action.payload;
        state.isLoading = false;
        state.hasError = false
      })
      .addCase(getFaq.rejected, (state, action) => {
        state.hasError = true
        state.isLoading = false;
      })
      .addCase(getHistoryLists.pending, (state, action) => {
        state.historyLists.isLoading = true; 
        state.historyLists.hasError = false;
      })
      .addCase(getHistoryLists.fulfilled, (state, action) => {
          state.historyLists = action.payload;
          state.historyLists.isLoading = false;
          state.historyLists.hasError = false
        })
      .addCase(getHistoryLists.rejected, (state, action) => {
          state.historyLists.hasError = true
          state.historyLists.isLoading = false;
        })
    }
})

// Action creators are generated for each case reducer function
export const { sendFaqReq,updatePresent,updateConsu,updateManage,updateRecomm,updatePhotos} = FaqSlice.actions
export const present = state => state.faq;
export default FaqSlice.reducer