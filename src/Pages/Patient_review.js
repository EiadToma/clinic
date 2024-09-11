import React, { useState } from 'react'
import Faq from './Faq'
import History from './History'
import {useSelector} from 'react-redux'
const Patient_review = () => {
const [param,setParam]=useState('faq')
const mode = useSelector(state=>state.user.Mode)
const renderComponent=()=>{
switch(param){
case 'faq':
    return(
        <Faq/>
    )
case 'history':
    return(
        <History/>
    )
}
}
return(
 <>
   <div className=' w-1/2 m-auto'>
            <ul className='nav-list'>
            <li className={`${mode==='dark'?'  text-white':'text-gray-900'} block py-1 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700  md:dark:hover:text-green-500  dark:hover:bg-green-700  md:dark:hover:bg-transparent dark:border-green-700`} onClick={()=>setParam('faq')}>FAQ</li>
            <li className={`${mode==='dark'?'  text-white':'text-gray-900'} block py-1 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700  md:dark:hover:text-green-500  dark:hover:bg-green-700  md:dark:hover:bg-transparent dark:border-green-700`} onClick={()=>setParam('history')}>History</li>
            </ul>
    </div>
{renderComponent()}
</>
)


}

export default Patient_review