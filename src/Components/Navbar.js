import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='nav-container'>
        <ul className='nav-list'>
            <li className='nav-link'><Link className='link' to={'/patients'}> Home</Link></li>
            <li className='nav-link'><Link className='link' to={'/patientcreate'}> Create Patient</Link></li>
            <li className='nav-link'><Link className='link' to={'/usercreate'}> Create User</Link></li>

        </ul>
    </div>
  )
}

export default Navbar