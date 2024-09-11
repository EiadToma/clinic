import React from 'react'
import {useSelector} from 'react-redux'
const User_create = () => {
    const mode = useSelector(state=>state.user.Mode)
  return (

    <div className={` pb-3 m-auto w-11/12 h-max form-container`} >
        <div className='title-section'>
        <div className='col'>
        </div><p className='section-title text-black'>Create New User</p>
        </div>
        <div className='w-10/12 m-2 flex flex-col'>
            <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode==='dark' ? 'text-blue-100':'text-blue-800'}`}>Type</label>
            <select className='form-input'>
                <option>Doctor</option>
                <option>Secretary</option>
            </select>
        </div>
        <div className='w-10/12 m-2 flex flex-col'>
            <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode==='dark' ? 'text-blue-100':'text-blue-800'}`}>Name</label>
            <input placeholder='user name' className='form-input'/>
        </div>
        <div className='w-10/12 m-2 flex flex-col'>
            <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode==='dark' ? 'text-blue-100':'text-blue-800'}`}>Email</label>
            <input placeholder='email' className='form-input'/>
        </div>
        <div className='w-10/12 m-2 flex flex-col'>
            <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode==='dark' ? 'text-blue-100':'text-blue-800'}`}>Password</label>
            <input placeholder='user password' className='form-input'/>
        </div>
        <div className='w-10/12 m-2 flex flex-col'>
            <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode==='dark' ? 'text-blue-100':'text-blue-800'}`}>Qualification</label>
            <input placeholder='Qualification' className='form-input'/>
        </div>
        <div className='w-10/12 m-2 flex flex-col'>
            <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode==='dark' ? 'text-blue-100':'text-blue-800'}`}>Phone</label>
            <input placeholder='phone number' className='form-input' type='number'/>
        </div>
        <button className='create-btn'>Create User</button>
    </div>

  )
}

export default User_create