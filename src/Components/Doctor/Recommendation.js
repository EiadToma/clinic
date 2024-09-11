import React from 'react'
import { updateRecomm } from '../../redux/FaqSlice'
import { useDispatch } from 'react-redux'
const Recommendation = () => {
  const dispatch= useDispatch()
  return (
    <div className='form-container b-r' style={{marginTop:"20px"}} >
    <h3 className='title'>Recommendation</h3>
    <span className='line'></span>
    <div className='w-10/12 m-2 flex flex-col'>
        <label className='label'>The patient should be referred to the hospital for</label>
        <select className='form-input' onChange={e=>dispatch(updateRecomm({fieldName:'hospitalization',value:e.target.value}))}>
            <option value="" disabled selected style={{color:"darkgray",opacity:'0.5'}}>Nothing selected</option>
            <option>Closed follow up</option>
            <option>Above the knee Amputation</option>
            <option>Below the knee Amputation</option>
            <option>Surgery</option>

        </select>
        </div>
        <div className='w-10/12 m-2 flex flex-col'>
        <label className='label'>Apply the new medical shoes</label>
        <select className='form-input' onChange={e=>dispatch(updateRecomm({fieldName:'new_shoes',value:e.target.value}))}>
        <option value="" disabled selected style={{color:"darkgray",opacity:'0.5'}}>Nothing selected</option>
            <option>No</option>
            <option>Yes</option>
        </select>
        </div>
        <div className='w-10/12 m-2 flex flex-col'>
        <label className='label'>Continue medical shoes</label>
        <select className='form-input' onChange={e=>dispatch(updateRecomm({fieldName:'continue_shoes',value:e.target.value}))}>
        <option value="" disabled selected style={{color:"darkgray",opacity:'0.5'}}>Nothing selected</option>
            <option>No</option>
            <option>yes</option>
        </select>
        </div>
        <div className='w-10/12 m-2 flex flex-col'>
        <label className='label'>Physical therapy</label>
        <input className='form-input' type='text' onChange={e=>dispatch(updateRecomm({fieldName:'physical_therapy',value:e.target.value}))}/>
        </div>
        <div className='w-10/12 m-2 flex flex-col'>
        <label className='label'>Consultation</label>
        <input className='form-input' type='text' onChange={e=>dispatch(updateRecomm({fieldName:'consultation',value:e.target.value}))}/>
        </div>
    </div>
  )
}

export default Recommendation