import React from 'react'
import { useDispatch } from 'react-redux'
import { updateConsu,updatePhotos } from '../../redux/FaqSlice'
const Related = () => {
  const dispatch = useDispatch()
  return (
    <div className='form-container b-r' style={{marginTop:"20px"}}>
    <h3 className='title'>Related consultations</h3>
    <span className='line'></span>
    <div>
      <div className='w-10/12 m-2 flex flex-col'>
        <label className='label'>Attach the last vascular consultation</label>
        <input className='form-input' type='file' onChange={e=>dispatch(updatePhotos({fieldName:'related_consultation_attachment',value:e.target.files[0]}))} />
        </div>
        <div className='w-10/12 m-2 flex flex-col'>
        <label className='label'>The date of the last vascular consultation</label>
        <input className='form-input' type='date' onChange={e=>dispatch(updateConsu({fieldName:'last_cons_date',value:e.target.value}))}/>
        </div>
        <div className='w-10/12 m-2 flex flex-col'>
        <label className='label'>The name of the consulter</label>
        <input className='form-input' type='text' onChange={e=>dispatch(updateConsu({fieldName:'consultor_name',value:e.target.value}))}/>
        </div>
        <div className='w-10/12 m-2 flex flex-col'>
        <label className='label'>Need of vascular procedure</label>
        <select className='form-input' onChange={e=>dispatch(updateConsu({fieldName:'need_of_vascular',value:e.target.value}))}>
        <option value="" disabled selected style={{color:"darkgray",opacity:'0.5'}}>Nothing selected</option>
            <option>Advisable</option>
            <option>Urgent</option>
            <option>After a trial of Conservative management</option>

        </select>
        </div>
          </div>
          <div className='w-10/12 m-2 flex flex-col'>
        <label className='label'>The vascular procedure</label>
        <select className='form-input' onChange={e=>dispatch(updateConsu({fieldName:'vascular_precedure',value:e.target.value}))}>
        <option value="" disabled selected style={{color:"darkgray",opacity:'0.5'}}>Nothing selected</option>
            <option>Unaffordable</option>
            <option>Was done</option>
            <option>Angioplasty</option>
            <option>With stent</option>
            <option>Graft</option>

        </select>
        </div>
          <div className='w-10/12 m-2 flex flex-col'>
            <label className='label'>Other consultation(s)</label>
            <input type='textarea' className='form-input' onChange={e=>dispatch(updateConsu({fieldName:'other',value:e.target.value}))}/>
          </div>
    </div>
  )
}

export default Related