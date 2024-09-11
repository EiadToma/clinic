import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {

  return (
    <div className='background'>
      <div className='LogContainer'>
        <label className='logLabel'>User name</label>
        <input className='form-input'/>
        <label className='logLabel'>Password</label>
        <input className='form-input' type='password'/>
        <button className='logBtn'><Link style={{textDecoration:"none"}} to={'/patients'}>Login</Link></button>
      </div>
      
    </div>
  )
}

export default Login