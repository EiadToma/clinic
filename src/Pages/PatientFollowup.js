import React from 'react'

const PatientFollowup = () => {
  return (
    <div className='container'>
        <div className='title-section'><div className='col'></div><p className='section-title'>Follow up</p></div>
        <div className='form-group flex'>
            <label className='label'>Follow up on time ?</label>
            <select className='form-input' >
            <option value="" disabled selected style={{color:"darkgray",opacity:'0.5'}}>Nothing selected</option>
                <option className='option'>test</option>
                <option className='option'>test</option>
            </select>
        </div>
        <div className='form-group flex'>
            <label  className='label'>The compliance of the patient with the dressing,recommendation,etc..</label>
            <select className='form-input'>
            <option value="" disabled selected style={{color:"darkgray",opacity:'0.5'}}>Nothing selected</option>
                <option></option>
                <option></option>
            </select>
        </div>
        <div className='form-group flex'>
            <label  className='label'>Outcome of the first visit managment</label>
            <select className='form-input'>
            <option value="" disabled selected style={{color:"darkgray",opacity:'0.5'}}>Nothing selected</option>
                <option></option>
                <option></option>
            </select>
        </div>
        <div className='form-group flex'>
            <label className='label'>The suspected cause of regression</label>
            <select className='form-input'>
            <option value="" disabled selected style={{color:"darkgray",opacity:'0.5'}}>Nothing selected</option>
                <option></option>
                <option></option>
            </select>
        </div>
    </div>
  )
}

export default PatientFollowup