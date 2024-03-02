import PresentIllness from "../Components/PresentIllness"
import Related from "../Components/Related"
import Recommendation from "../Components/Recommendation"
import Management from "../Components/Management"
import { useEffect } from "react"
import { getFaq } from "../redux/FaqSlice"
import { useDispatch } from "react-redux"
import SubmitBtn from "../Components/SubmitBtn"
const Faq = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
dispatch(getFaq())
  })
  return (
<>
<div className="container">
<div className='title-section'><div className='col'></div><p className='section-title'>Frequently Asked Questions</p></div>
<PresentIllness/>
<div style={{width:"49%"}}>
  <Management/>
  <Related/>
<Recommendation />
</div>
<SubmitBtn/>
</div>
</>
)
}

export default Faq