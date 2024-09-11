import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createPatient } from '../redux/PatientSilce'
import SuccessToaster from '../Components/SuccessToaster'
const Patient_create = () => {
  const [name,setName]=useState('')
  const [isUserCreated,setIscreated]=useState(false)
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
  const mode = useSelector(state=>state.user.Mode)
  const cities =['Damascus','Latakia','Hama','Al-Hasakah','Homs','Idlib','Daraa','Deir ez-Zor','Ar-Raqqah','As-Suwayda','Tartus','Rif Dimashq','Aleppo','Al-Qunaytirah']
  const handleRadioChange = (value) => {
    const newSelectedOption = gender === value ? null : value;
    setGender(newSelectedOption);
  };
  const title = useSelector(state=>state.patient.created.status)
  console.log(title)  
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
console.log(isUserCreated)
  return (
    <div className={`pt-2 pb-3 m-auto sm:w-full md:w-11/12 container form-container`}>
            {isUserCreated && <SuccessToaster title={title?"Patient created successfully!":'Processing...'} />}
      <div className='title-section'><div className='col'></div><p className='section-title text-black'>User create</p></div>

      <div style={{display:"block",width:"100%",height:"fit-content",padding:"10px"}}>
        <div className=' md:w-3/5 sm:w-full'>
      <div className='md:w-10/12 m-2 flex flex-col  sm:w-full'> 
      <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode==='dark' ? 'text-blue-100':'text-blue-800'}`}> Name</label>
      <input className='form-input' type='text' placeholder='patient name ' value={name} onChange={e=>setName(e.target.value)}/>
      </div> 
      <div className='md:w-10/12 m-2 flex flex-col sm:w-full '> 
      <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode==='dark' ? 'text-blue-100':'text-blue-800'}`}> Phone number</label>
      <input maxLength="10" className='form-input'  type='number' placeholder='patient phone number' value={number} onChange={e=>setNumber(e.target.value)}/>
      </div> 
      <div className='md:w-10/12 m-2 sm:w-full'> 
      <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode==='dark' ? 'text-blue-100':'text-blue-800'}`}> Gender</label>
      <p className='para-usercreate'>male</p> <input type="radio" value="true" checked={gender === 'true'} onChange={() => handleRadioChange('true')} style={{scale:"1.5",display:"inline-block"}} /> 
      <p className='para-usercreate'>female</p> <input type="radio" value="flase" checked={gender === 'false'} onChange={() => handleRadioChange('false')} style={{scale:"1.5",display:"inline-block"}} />
      </div> 
      <div className='md:w-10/12 m-2 flex flex-col sm:w-full'> 
      <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode==='dark' ? 'text-blue-100':'text-blue-800'}`}>Current Address</label>
      <input className='form-input' type='text' placeholder='patient address' value={address} onChange={e=>setAddress(e.target.value)}/>
      </div> 
      <div className='md:w-10/12 m-2 flex flex-col sm:w-full'> 
      <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode==='dark' ? 'text-blue-100':'text-blue-800'}`}>Nationality</label>
      <input className='form-input' type='text' placeholder='patient country' value={country} onChange={e=>setCountry(e.target.value)}/>
      </div> 
      <div className='md:w-10/12 m-2 flex flex-col sm:w-full'> 
      <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode==='dark' ? 'text-blue-100':'text-blue-800'}`}>Governorate</label>
      <select className='form-input' value={governorate} onChange={e=>setGovernorate(e.target.value)}>
      <option disabled hidden value="">Select an option</option>
    {cities.map(city => (<option key={city} value={city}>{city}</option>))}
      </select>
      </div> 
      <div className='md:w-10/12 m-2 flex flex-col sm:w-full '> 
      <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode==='dark' ? 'text-blue-100':'text-blue-800'}`}>How The patient find us</label>
      <select className='form-input' onChange={(e)=>setFindus(e.target.value)}>
      <option disabled selected hidden>Select an option</option>
        <option>Doctor</option>
        <option>Accident</option>
        <option>Another patient</option>
        <option>Social media</option>

      </select>
      </div> 
      <div className='md:w-10/12 m-2 flex flex-col sm:w-full '> 
      <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode==='dark' ? 'text-blue-100':'text-blue-800'}`}>Job</label>
      <input className='form-input ' type='text' placeholder='patient job' value={job} onChange={e=>setJob(e.target.value)}/>
      </div> 
      <div className='md:w-10/12 m-2 flex flex-col sm:w-full'> 
      <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode==='dark' ? 'text-blue-100':'text-blue-800'}`}>Date of birth</label>
      <input className='form-input ' type='date' placeholder='patient birth date' value={dateBirth} onChange={e=>setDateBirth(e.target.value)}/>
      </div> 
      <div className='md:w-10/12 m-2 flex flex-col sm:w-full'> 
      <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode==='dark' ? 'text-blue-100':'text-blue-800'}`}>Height</label>
      <input className='form-input ' type='text' placeholder='patient birth date' value={height} onChange={e=>setHeight(e.target.value)}/>
      </div> 
      <div className='md:w-10/12 m-2 flex flex-col sm:w-full'> 
      <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode==='dark' ? 'text-blue-100':'text-blue-800'}`}>weight</label>
      <input className='form-input ' type='text' placeholder='patient birth date' value={weight} onChange={e=>setWeight(e.target.value)}/>
      </div> 
      <button className='create-btn' onClick={()=>{dispatch(createPatient(data))
          setIscreated(true);
          // Set a timeout to reset the state after 5 seconds
          setTimeout(() => {
            setIscreated(false);
          }, 5000); // Adjust the duration as needed (5000 milliseconds = 5 seconds)
        }}>Create</button>
      </div>
      </div>
      </div>
  )
}

export default Patient_create