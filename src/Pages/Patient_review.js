import React, { useState } from 'react'
import Faq from './Faq'
import History from './History'
import PatientFollowup from './PatientFollowup'
const Patient_review = () => {
const [param,setParam]=useState('faq')
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
case 'follow':
    return(
        <PatientFollowup/>
    )
}
}
return(
 <>
   <div className='miniNav'>
            <ul className='nav-list'>
            <li className='nav-link' style={param==='faq'?{color:"green"}:{}} onClick={()=>setParam('faq')}>FAQ</li>
            <li className='nav-link' style={param==='history'?{color:"green"}:{}} onClick={()=>setParam('history')}>History</li>
            <li className='nav-link' style={param==='follow'?{color:"green"}:{}} onClick={()=>setParam('follow')}>Follow up</li>
            </ul>
    </div>
{renderComponent()}
</>
)


}

export default Patient_review