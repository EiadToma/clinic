import React, { useState } from 'react'
import { sendHistory } from '../redux/PatientSilce'
import { useDispatch ,useSelector} from 'react-redux'
import { MultiSelect } from 'react-multi-select-component'
const History = () => {
  const dispatch= useDispatch()
  const [sinceDm,setSinceDm]=useState({number:null,text:''})
  const [htn,setHtn]=useState(false)
  const [renal,setRenal]=useState(false)
  const [smoking,setSmoking]=useState(false)
  const [hyper,setHyper]=useState(false)
  const [others,setOthers]=useState('')
  const [Surgical,setSurgical]=useState('')
  const [amputation,setAmputation]=useState([])
  const [dvt,setDvt]=useState('')
  const [PSurgery,setPsergery]=useState('')
  const [disabled,setDisabled]=useState(false)
  const [allergic,setAllergic]=useState(false)
  const [vasuclar,setVascular]=useState([])
  const [anticougualent,setAnticougualent]=useState([])
  const [diabites,setDiabites]=useState([])

  const mode = useSelector(state=>state.user.Mode)
  const Lists = useSelector(state=>state.faq.historyLists?.data)
  const patientID = useSelector(state=>state.patient.patient.id)
  const anticougualentData = useSelector(state=>state.faq.faqData?.data.anticougualent_drugs)
  const anticougualentList = anticougualentData?.map(item=>({ label:item.name, value:item.id })) ||[]
  const amputaionList = Lists.amputations?.map(item=>({ label:item.type, value:item.id })) ||[]
  const cardiovascular_drugs = Lists.cardiovascular_drugs?.map(item=>({ label:item.name, value:item.id })) || []
  const diabetes_drugs = Lists.diabetes_drugs?.map(item=>({ label:item.name, value:item.id })) || []
  const requestAmputaion = amputation.map(item=>item.value) ||[]
  const requestCardio = vasuclar.map(item=>item.value)||[]
  const requestAntiCougualent = anticougualent.map(item=>item.value)||[]
  const requestDiabites = diabites.map(item=>item.value)||[]
console.log(requestAmputaion)
console.log(requestCardio)
console.log(requestDiabites)
console.log(requestAntiCougualent)

  const submitHistory =()=>{
    const stringSince = JSON.stringify(sinceDm)
    const data = {
      since_dm:stringSince,
      htn:htn,
      renal_impair:renal,
      smoking:smoking,
      hyperlipidemia:hyper,
      others:others,  
      surgical_history:Surgical,
      amputations:requestAmputaion,
      previous_dvt:dvt,
      previous_surgery:PSurgery,
      disabled:disabled,
      allergic:allergic,
      cardiovascular_drugs:requestCardio,
      anticougualent_drugs:requestAntiCougualent,
      diabetes_drugs:requestDiabites
    }
    console.log(data)
    dispatch(sendHistory({data,patientID}))
  }
  console.log(requestAmputaion)
  return (
    <div className={`${mode==='dark'?'bg-gray-700':'bg-gray-50'} w-11/12  mx-auto p-2 flex flex-col justify-between`}>
    <div className='w-10/12 m-2 flex flex-row justify-between' > 
      <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode==='dark' ? 'text-blue-100':'text-blue-800'}`}> Since-Dm</label>
      <input className='form-input' type='number'onChange={(e)=>setSinceDm((sinceDm)=>({...sinceDm,number:e.target.value}))} />
      <select className='form-input' onChange={(e)=>setSinceDm((sinceDm)=>({...sinceDm,text:e.target.value}))}>
          <option>I</option>
          <option>II</option>
        </select> 
     </div> 
      <div className='w-10/12 m-2 flex flex-row justify-between ' > 
      <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode==='dark' ? 'text-blue-100':'text-blue-800'}`}>HTN</label>
      <input className='form-input' onChange={()=>setHtn(!htn)} type='checkbox' style={{scale:"1.5"}}/>
      </div> 
      <div className='w-10/12 m-2 flex flex-row justify-between' > 
      <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode==='dark' ? 'text-blue-100':'text-blue-800'}`}>Renal impair</label>
      <input className='form-input' onChange={()=>setRenal(!renal)}  type='checkbox' style={{scale:"1.5"}}/>
      </div> 
      <div className='w-10/12 m-2 flex flex-row justify-between' > 
      <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode==='dark' ? 'text-blue-100':'text-blue-800'}`}>smoking</label>
      <input className='form-input' onChange={()=>setSmoking(!smoking)} type='checkbox' style={{scale:"1.5"}} />
      </div> 
      <div className='w-10/12 m-2 flex flex-row justify-between' > 
      <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode==='dark' ? 'text-blue-100':'text-blue-800'}`}>Hyperlipemia</label>
      <input className='form-input' onChange={()=>setHyper(!hyper)} type='checkbox' style={{scale:"1.5"}}/>
      </div>
      <div className='w-10/12 m-2 flex flex-col '> 
      <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode==='dark' ? 'text-blue-100':'text-blue-800'}`}>others</label>
      <input className='form-input' onChange={(e)=>setOthers(e.target.value)} type='text' />
      </div> 
      <div className='w-10/12 m-2 flex flex-col ' >
        <h2 className={` text-3xl font-medium leading-normal m-2 break-words ${mode==='dark' ? 'text-blue-100':'text-blue-800'}`}>Surgical History:</h2>
        <input className='form-input' onChange={(e)=>setSurgical(e.target.value)}/>
        <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode==='dark' ? 'text-blue-100':'text-blue-800'}`}>amputaion</label>
          <MultiSelect
          options={amputaionList}
          value={amputation}
          onChange={(selectedOptions) => setAmputation(selectedOptions)}
          labelledBy={"Select"}
        />
        </div> 
      <h2 className={` text-3xl font-medium leading-normal m-2 break-words ${mode==='dark' ? 'text-blue-100':'text-blue-800'}`}>Vascular History:</h2>
      <div className='w-10/12 m-2 flex justify-around' >
        <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode==='dark' ? 'text-blue-100':'text-blue-800'}`}>Previous DVT</label>
        <input className='form-input' onChange={(e)=>setDvt(e.target.value)}/>
        <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode==='dark' ? 'text-blue-100':'text-blue-800'}`}>Previous Surgery</label>
        <input className='form-input' onChange={(e)=>setPsergery(e.target.value)}/>
      </div>
      <div className='w-10/12 m-2 flex flex-row  justify-between' > 
      <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode==='dark' ? 'text-blue-100':'text-blue-800'}`}> Disabled</label>
      <input className='form-input' type='checkbox' onChange={()=>setDisabled(!disabled)} style={{scale:"1.5"}}/>
      </div>
      <div className='w-10/12 m-2 flex flex-row justify-between '> 
      <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode==='dark' ? 'text-blue-100':'text-blue-800'}`}> Allergic</label>
      <input className='form-input' type='checkbox' onChange={()=>setAllergic(!allergic)}  style={{scale:"1.5"}}/>
      </div>
      <div>
        <h2 className={` text-3xl font-medium leading-normal m-2 break-words ${mode==='dark' ? 'text-blue-100':'text-blue-800'}`}>Medicin History:</h2>
        <div className='w-10/12 m-2 flex flex-col'>
        <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode==='dark' ? 'text-blue-100':'text-blue-800'}`}>cardiovascular</label>
        <MultiSelect
          options={cardiovascular_drugs}
          value={vasuclar}
          onChange={(selectedOptions) => setVascular(selectedOptions)}
          labelledBy={"Select"}
        />
      </div>
      <div className='w-10/12 m-2 flex flex-col'>
        <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode==='dark' ? 'text-blue-100':'text-blue-800'}`}>anticougualent</label>
        <MultiSelect
          options={anticougualentList}
          value={anticougualent}
          onChange={(selectedOptions) => setAnticougualent(selectedOptions)}
          labelledBy={"Select"}
        />
      </div>
      <div className='w-10/12 m-2 flex flex-col'>
        <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode==='dark' ? 'text-blue-100':'text-blue-800'}`}>diabites drugs</label>
        <MultiSelect
          options={diabetes_drugs}
          value={diabites}
          onChange={(selectedOptions) => setDiabites(selectedOptions)}
          labelledBy={"Select"}
        />
      </div>
      </div>
      <button className='create-btn' onClick={submitHistory}> submit</button>
    </div>
  )
}

export default History