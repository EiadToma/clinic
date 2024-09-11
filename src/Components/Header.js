import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {changeMode} from '../redux/UserSlice'
const Header = () => {
  const dispatch = useDispatch()
  const mode =useSelector(state=>state.user.Mode )
  console.log(mode)
  const ToggleMode = () =>{
    dispatch(changeMode(mode === 'dark' ? 'light' : 'dark'));

    }
    const bodyElements = document.getElementsByTagName('body');

    // If there is only one body element in the document
    const bodyElement = bodyElements[0];
    
    // You can then manipulate the body element as needed
    mode==='dark'?bodyElement.style.backgroundColor = '#31363F':bodyElement.style.backgroundColor ='#e4e5e9'
  return (
    <div className='header w-full'>
    <div className=' inline-block  w-10/12   text-center '>DIABETES CLINIC MANAGEMENT SYSTEM</div> 
    <div className=' inline-block w-2/12'>
    <label className="flex items-center cursor-pointer align-middle ">
    <input type="checkbox" value="" className="sr-only peer" onChange={ToggleMode}/>
    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{mode==="dark"?'Dark Mode':'Light Mode'}</span>
     </label>
    </div>
    </div>

  )
}

export default Header