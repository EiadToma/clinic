import {useState} from 'react'
import SuccessToaster from './SuccessToaster'
import { useDispatch ,useSelector} from 'react-redux'
import { sendFaqReq } from '../redux/FaqSlice'
const SubmitBtn = () => {
  const state =useSelector(state=>state.faq)
  const [notification, setNotification] = useState(null)
  const patientId = useSelector(state=>state.patient.patient.id)
  const dispatch = useDispatch()
  // const title = useSelector(state=>state.faq.created.status)
  const [isCaseCreated,setIsCaseCreated]=useState(false)
  // {isCaseCreated && <SuccessToaster title={title?"Case Created Successfully!":'Processing...'} />}

    const sendfaq=async()=>{

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
    const result = await dispatch(sendFaqReq({form,patientId}));
    if (result.meta.requestStatus === 'fulfilled') {
      setNotification({ type: 'success', message: 'FAQ case created!' });
    } else {
      const { status, message } = result.payload;
      setNotification({
        type: 'error',
        message: `Error ${status}: ${message}`,
      });
    }
    setTimeout(() => setNotification(null), 5000)
  }

return (
    <div className=' m-9'>
      {notification && (
        <SuccessToaster
          title={notification.type === 'success' ? notification.message : `Error: ${notification.message}`}
          color={notification.type === 'success'?'green':'red'}
        />
      )}
      <button className='Submit-btn' onClick={()=>sendfaq()}>
        Save patient Info</button>
        </div>
)
}

export default SubmitBtn