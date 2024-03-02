import React from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { sendFaqReq } from '../redux/FaqSlice'
const SubmitBtn = () => {
  const state =useSelector(state=>state.faq)
  const dispatch = useDispatch()
  const sendfaq=()=>{
    const form = new FormData;
    const related_consultation =JSON.stringify(state.consultations)
    const plan_of_managment =JSON.stringify(state.managment)
    const recommendation =JSON.stringify(state.recommendation)

    form.append('present_illness_x_ray',state.present_illness_x_ray)
    form.append('present_illness_previous',state.present_illness_previous)
    form.append('present_illness_current',state.present_illness_current)
    const present = state.present_illness
    const str = JSON.stringify(present)
    form.append('present_illness',str)
    form.append('related_consultation',related_consultation)
    form.append('related_consultation_attachment',state.related_consultation_attachment)
    form.append('plan_of_managment',plan_of_managment)
    form.append('recommendation',recommendation)
    dispatch(sendFaqReq(form))

  }
return (
    <div>
      <button className='Submit-btn' onClick={()=>sendfaq()}>
        Save patient Info</button>
        </div>
)
}

export default SubmitBtn