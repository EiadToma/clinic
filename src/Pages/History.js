import React, { useState } from 'react'
import { sendHistory } from '../redux/PatientSilce'
import { useDispatch } from 'react-redux'
const History = () => {
  const dispatch= useDispatch()
  const [htn,setHtn]=useState(false)
  const [renal,setRenal]=useState(false)
  const [smoking,setSmoking]=useState(false)
  const [hyper,setHyper]=useState(false)
  const [others,setOthers]=useState('')
  const [Surgical,setSurgical]=useState('')
  const [amputation,setAmputation]=useState('')
  const [dvt,setDvt]=useState('')
  const [PSurgery,setPsergery]=useState('')
  const [disabled,setDisabled]=useState(false)
  const [allergic,setAllergic]=useState(false)
  const [vasuclar,setVascular]=useState('')
  const [anticough,setAnticough]=useState('')
  const [insulin,setInsulin]=useState('')

  const submitHistory =()=>{
    const data = {
      htn:htn,
      renal_impair:renal,
      smoking:smoking,
      hyperlipidemia:hyper,
      others:others,
      surgical_history:Surgical,
      amputation:amputation,
      previous_dvt:dvt,
      previous_surgery:PSurgery,
      disabled:disabled,
      allergic:allergic,
      cardiovascular:vasuclar,
      anticough:anticough,
      insulin:insulin
    }
    console.log(data)
    dispatch(sendHistory(data))
  }
  const amputaion = ['Syme Amputation','Chopart Amputation','Lisfranc Amputation','Metatarsal Amputation 1st','Metatarsal Amputation 2st','Metatarsal Amputation 3st'
  ,'Metatarsal Amputation 4st','Metatarsal Amputation 5st','Distal phalange Amputation 1st','Distal phalange Amputation 2st','Distal phalange Amputation 3st','Distal phalange Amputation 4st','Distal phalange Amputation 5st']
  return (
    <div className='fullpageContainer'>
    <div className='form-group rowflex ' style={{justifyContent:"space-between"}}> 
      <label className='form-label'> Since-Dm</label>
      <input className='form-input' type='number'  />
      <select className='form-input'>
          <option>I</option>
          <option>II</option>

        </select> 
     </div> 
      <div className='form-group rowflex ' style={{justifyContent:"space-between"}}> 
      <label className='form-label'>HTN</label>
      <input className='form-input' onChange={()=>setHtn(!htn)} type='checkbox' style={{scale:"1.5"}}/>
      </div> 
      <div className='form-group rowflex ' style={{justifyContent:"space-between"}}> 
      <label className='form-label'>Renal impair</label>
      <input className='form-input' onChange={()=>setRenal(!renal)}  type='checkbox' style={{scale:"1.5"}}/>
      </div> 
      <div className='form-group rowflex ' style={{justifyContent:"space-between"}}> 
      <label className='form-label'>smoking</label>
      <input className='form-input' onChange={()=>setSmoking(!smoking)} type='checkbox' style={{scale:"1.5"}} />
      </div> 
      <div className='form-group rowflex ' style={{justifyContent:"space-between"}}> 
      <label className='form-label'>Hyperlipemia</label>
      <input className='form-input' onChange={()=>setHyper(!hyper)} type='checkbox' style={{scale:"1.5"}}/>
      </div>
      <div className='form-group flex '> 
      <label className='form-label'>others</label>
      <input className='form-input' onChange={(e)=>setOthers(e.target.value)} type='text' />
      </div> 
      <div className='form-group flex ' >
        <h2 style={{margin:"5px"}}>Surgical History:</h2>
        <input className='form-input' onChange={(e)=>setSurgical(e.target.value)}/>
        <label className='form-label'>amputaion</label>
        <select  className='form-input' onChange={(e)=>setAmputation(e.target.value)} style={{padding:"10px"}}>
      <option value="" disabled selected style={{color:"darkgray",opacity:'0.5'}}>Nothing selected</option>
{     amputaion.map(item=><option>{item}</option>)

}
      </select>
        </div> 
      <h2 style={{margin:"5px"}}>Vascular History:</h2>
      <div className='form-group' style={{display:"flex",justifyContent:"space-around"}}>
        <label className='form-label'>Previous DVT</label>
        <input className='form-input' onChange={(e)=>setDvt(e.target.value)}/>
        <label className='form-label'>Previous Surgery</label>
        <input className='form-input' onChange={(e)=>setPsergery(e.target.value)}/>
      </div>
      <div className='form-group rowflex ' style={{justifyContent:"space-between"}}> 
      <label className='form-label'> Disabled</label>
      <input className='form-input' type='checkbox' onChange={()=>setDisabled(!disabled)} style={{scale:"1.5"}}/>
      </div>
      <div className='form-group rowflex 'style={{justifyContent:"space-between"}}> 
      <label className='form-label'> Allergic</label>
      <input className='form-input' type='checkbox' onChange={()=>setAllergic(!allergic)}  style={{scale:"1.5"}}/>
      </div>
      <div>
        <h2 style={{margin:"5px"}}>Medicin History:</h2>
        <div className='form-group flex'>
        <label className='form-label'>cardiovascular</label>
      <select  className='form-input' onChange={(e)=>setVascular(e.target.value)} style={{padding:"10px"}}>
        <option value="" disabled selected style={{color:"darkgray",opacity:'0.5'}}>Nothing selected</option>
        <option>Left</option>
        <option>Right</option>
      </select>
      </div>
      <div className='form-group flex'>
        <label className='form-label'>anticough</label>
      <select  className='form-input' onChange={(e)=>setAnticough(e.target.value)} style={{padding:"10px"}}>
        <option value="" disabled selected style={{color:"darkgray",opacity:'0.5'}}>Nothing selected</option>
        <option>Left</option>
        <option>Right</option>
      </select>
      </div>
      <div className='form-group flex'>
        <label className='form-label'>insulin</label>
      <select  className='form-input' onChange={(e)=>setInsulin(e.target.value)} style={{padding:"10px"}}>
        <option value="" disabled selected style={{color:"darkgray",opacity:'0.5'}}>Nothing selected</option>
        <option>Left</option>
        <option>Right</option>
      </select>
      </div>
      </div>
      <button className='create-btn' onClick={submitHistory}> submit</button>
    </div>
  )
}

export default History