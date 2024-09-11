import {useState} from 'react'
import SuccessToaster from './SuccessToaster'
import { useDispatch ,useSelector} from 'react-redux'
import { sendFaqReq } from '../redux/FaqSlice'
const SubmitBtn = () => {
  const state =useSelector(state=>state.faq)
  const patientId = useSelector(state=>state.patient.patient.id)
  console.log(patientId)
  const dispatch = useDispatch()
  // const title = useSelector(state=>state.faq.created.status)
  const [isCaseCreated,setIsCaseCreated]=useState(false)
  // {isCaseCreated && <SuccessToaster title={title?"Case Created Successfully!":'Processing...'} />}

    const sendfaq=()=>{

    const form = new FormData;
    const related_consultation =JSON.stringify(state.consultations)
    const plan_of_managment =JSON.stringify(state.managment)
    const recommendation =JSON.stringify(state.recommendation)
    const present = state.present_illness
    const str = JSON.stringify(present)

    form.append('present_illness_x_ray',state.present_illness_x_ray)
    form.append('present_illness_previous',state.present_illness_previous)
    form.append('present_illness_current',state.present_illness_current)
    form.append('present_illness',str)
    form.append('related_consultation',related_consultation)
    form.append('related_consultation_attachment',state.related_consultation_attachment)
    form.append('plan_of_managment',plan_of_managment)
    form.append('recommendation',recommendation)
    dispatch(sendFaqReq({form,patientId}))

  }
return (
    <div className=' m-9'>
      <button className='Submit-btn' onClick={()=>sendfaq()}>
        Save patient Info</button>
        </div>
)
}

export default SubmitBtn