import { createSlice,createAsyncThunk  } from '@reduxjs/toolkit'
import axios from 'axios'
const url ='https://clinic-backend-0lcl.onrender.com'

const initialState = { 
  present_illness_x_ray:{},
  present_illness_current:{},
  present_illness_previous:{},
  related_consultation_attachment:null,
  present_illness:{
    lesion:{main_id:'',secondary_id:'',positions1:[],positions2:[],cause_id:0},
    notes:'',
    deformity:{deformity_id:0,leg:''},
    vascular_status:{lp:'',rp:'',ld:'',rd:'',labi:0,rabi:0},
    nervous_status:{all:{checked:false,text:''},neuro:{checked:false,text:''},mino:{checked:false,text:''}},
    infection:{exists:false,leg:'',finger:0,iwgdf_classification:'',clinical_classification:['test','test2'],},
    sinbad:{ischemia:false,neropath:false,area_ulcer:false,bacterial_infection:false,depth:false},
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
    labratory_test_ids :[1,2]
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




export const FaqSlice = createSlice({
  name: 'faq',
  initialState,
  reducers: {
    sendFaqReq: (state,action) => {
      axios.post(url+'/patient/1/case',action.payload).then(res=>console.log(res))
    .catch(error=>console.log(error))
    },
    updatePhotos:(state,action)=>{
      const { fieldName, value } = action.payload;
      console.log(action.payload)
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
      })}
})

// Action creators are generated for each case reducer function
export const { sendFaqReq,updatePresent,updateConsu,updateManage,updateRecomm,updatePhotos} = FaqSlice.actions
export const present = state => state.faq;
export default FaqSlice.reducer