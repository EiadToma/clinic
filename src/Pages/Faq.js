import PresentIllness from "../Components/Doctor/PresentIllness"
import Related from "../Components/Doctor/Related"
import Recommendation from "../Components/Doctor/Recommendation"
import Management from "../Components/Doctor/Management"
import SubmitBtn from "../Components/SubmitBtn"
const Faq = () => {

  return (
<>
<div className="container">
<div className='title-section sm:w-full'>
<p className='section-title'>Frequently Asked Questions</p>
</div>
<PresentIllness/>
<div className='media'>
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