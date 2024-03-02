import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createPatient } from '../redux/PatientSilce'
import Navbar from '../Components/Navbar'
const Patient_create = () => {
  const [name,setName]=useState('')
  const [number,setNumber]=useState('')
  const [gender,setGender]=useState(false)
  const [job,setJob]=useState('')
  const [address,setAddress]=useState('')
  const [country,setCountry]=useState('')
  const [governorate,setGovernorate]=useState('')
  const [dateBirth,setDateBirth]=useState('')
  const [findus,setFindus]=useState('')
  const [weight,setWeight]=useState('')
  const [height,setHeight]=useState('')

  const cities =['Damascus','Latakia','Hama','Al-Hasakah','Homs','Idlib','Daraa','Deir ez-Zor','Ar-Raqqah','As-Suwayda','Tartus','Rif Dimashq','Aleppo','Al-Qunaytirah']
  const handleRadioChange = (value) => {
    const newSelectedOption = gender === value ? null : value;
    setGender(newSelectedOption);
  };
    const dispatch = useDispatch()
    const data ={
      name:name,
      phone_number:number,
      gender:gender,
      job:job,
      country:country,
      city:governorate,
      address:address,
      date_of_birth:dateBirth,
      find_us:findus,
      weight:weight,
      height:height
    }

  return (
    <><Navbar/>
    <div className='container ' style={{height:"fit-content",paddingTop:"10px"}}>
              <div className='title-section'><div className='col'></div><p className='section-title'>User create</p></div>

      <div  style={{display:"block",width:"100%",height:"fit-content",padding:"10px"}}>
<div style={{width:"60%"}}>
      <div className='form-group flex '> 
      <label className='form-label'> Name</label>
      <input className='form-input' type='text' placeholder='patient name ' value={name} onChange={e=>setName(e.target.value)}/>
      </div> 
      <div className='form-group flex '> 
      <label className='form-label'> Phone number</label>
      <input className='form-input' type='number' placeholder='patient phone number' value={number} onChange={e=>setNumber(e.target.value)}/>
      </div> 
      <div className='form-group '> 
      <label className='form-label'> Gender</label>
      <p className='para-usercreate'>male</p> <input type="radio" value="true" checked={gender === 'true'} onChange={() => handleRadioChange('true')} style={{scale:"1.5",display:"inline-block"}} /> 
      <p className='para-usercreate'>female</p> <input type="radio" value="flase" checked={gender === 'false'} onChange={() => handleRadioChange('false')} style={{scale:"1.5",display:"inline-block"}} />
      </div> 
      <div className='form-group flex'> 
      <label className='form-label'>Current Address</label>
      <input className='form-input' type='text' placeholder='patient address' value={address} onChange={e=>setAddress(e.target.value)}/>
      </div> 
      <div className='form-group flex'> 
      <label className='form-label'>Nationality</label>
      <input className='form-input' type='text' placeholder='patient country' value={country} onChange={e=>setCountry(e.target.value)}/>
      </div> 
      <div className='form-group flex'> 
      <label className='form-label'>Governorate</label>
      <select className='form-input' type='text' placeholder='patient city' value={governorate} onChange={e=>setGovernorate(e.target.value)}>
      {cities.map(city=>(<option>{city}</option>))}
      </select>
      </div> 
      <div className='form-group flex '> 
      <label className='form-label'>How The patient find us</label>
      <select className='form-input' onChange={(e)=>setFindus(e.target.value)}  placeholder='select a way'>
        <option>Doctor</option>
        <option>Accident</option>
        <option>Another patient</option>
        <option>Social media</option>

      </select>
      </div> 
      <div className='form-group flex '> 
      <label className='form-label'>Job</label>
      <input className='form-input ' type='text' placeholder='patient job' value={job} onChange={e=>setJob(e.target.value)}/>
      </div> 
      <div className='form-group flex '> 
      <label className='form-label'>Date of birth</label>
      <input className='form-input ' type='date' placeholder='patient birth date' value={dateBirth} onChange={e=>setDateBirth(e.target.value)}/>
      </div> 
      <div className='form-group flex '> 
      <label className='form-label'>Height</label>
      <input className='form-input ' type='text' placeholder='patient birth date' value={height} onChange={e=>setHeight(e.target.value)}/>
      </div> 
      <div className='form-group flex '> 
      <label className='form-label'>weight</label>
      <input className='form-input ' type='text' placeholder='patient birth date' value={weight} onChange={e=>setWeight(e.target.value)}/>
      </div> 
      <button className='create-btn' onClick={()=>dispatch(createPatient(data))}>Create</button>
      </div>
      </div>
      </div>
      </>
  )
}

export default Patient_create