import React from 'react'
import Navbar from '../Components/Navbar'
const User_create = () => {
  return (
    <> <Navbar/>
    <div style={{margin:"auto",width:"90%",height:"800px",backgroundColor:"white"}}>
        <div className='title-section'><div className='col'></div><p className='section-title'>Create New User</p></div>
        <div className='form-group flex'>
            <label className='label'>Type</label>
            <select className='form-input'>
                <option>Doctor</option>
                <option>Secretary</option>
            </select>
        </div>
        <div className='form-group flex'>
            <label className='label'>Name</label>
            <input placeholder='user name' className='form-input'/>
        </div>
        <div className='form-group flex'>
            <label className='label'>Email</label>
            <input placeholder='email' className='form-input'/>
        </div>
        <div className='form-group flex'>
            <label className='label'>Password</label>
            <input placeholder='user password' className='form-input'/>
        </div>
        <div className='form-group flex'>
            <label className='label'>Qualification</label>
            <input placeholder='Qualification' className='form-input'/>
        </div>
        <div className='form-group flex'>
            <label className='label'>Phone</label>
            <input placeholder='phone number' className='form-input'/>
        </div>
        <button className='create-btn'>Create User</button>
    </div>
    </>

  )
}

export default User_create