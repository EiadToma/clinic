import React,{useState} from 'react'
import { createCase } from '../redux/CaseSlice'
import { useDispatch,useSelector } from 'react-redux'
const NewCase = () => {
    const [dressing,setDressing]=useState('')
    const [wound,setWound]=useState('')
    const [infection,setInfection]=useState('')
    const [managment,setManagment]=useState('')
    const [lab,setLab]=useState([''])
    const [file,setFile]=useState('')
    const [xray,setXray]=useState('')
    const [antibiotic,setAntbiotic]=useState({text:"",type:""})
    const [vitamines,setVitamines]=useState([])
    const [anticoagulant,setAnticoagulant]=useState('')
    const [antiplatelet,setaniplatelet]=useState('')
    const [gait,setGait]=useState('')
    const [appropriate,setAppropriate]=useState('')
    const [need_customiz,setNeedCustomiz]=useState(false)
    const [customizer,setCustomizer]=useState('')
    const [comorbidities,setComorbidities]=useState('')
    const [consultations,setConsultations]=useState(null)
    const dressingOp=['dry','moist','green','has a smell','replace dressing out']
    const woundOp = ['clean','dry','moist','with green','pus','infection','gargrene','slow healing']
    const manamgmentOp=['bulky dressing','light dressing','no dressing']
    const dispatch = useDispatch()
    const patientId= useSelector(state=>state.patient.patient?.id)
    const labtests=useSelector(state=>state.faq.faqData?.data.lab_tests)

    const sendCase =()=>{
         const antibioticString=JSON.stringify(antibiotic)
         const vitaArray=JSON.stringify(vitamines)
        const labarray = JSON.stringify(lab)
        const form = new FormData
        form.append('dressing_status',dressing)
        form.append('wound_status',wound)
        form.append('infection_status',infection)
        form.append('managment',managment)
        form.append('antibiotics',antibioticString)
        form.append('labratory_test_ids',labarray)
        form.append('vitamines',vitaArray)
        form.append('antiplatelet',antiplatelet)
        form.append('gait_analysis',gait)
        form.append('wear_approp_shoes',appropriate)
        form.append('shoe_customizer',customizer)
        form.append('comorbidities',comorbidities)
        form.append('file_url',file)
        form.append('anticoaglulant',anticoagulant)
        form.append('need_customization',need_customiz)
        form.append('x_ray_url',xray)
        form.append('consultation',consultations)
        dispatch(createCase({patientId,form}))
    }
      return (
    <div className='container'>
        <div className='form-group flex'>
            <label className='label'>The Dressing status</label>
            <select className='form-input' onChange={(e)=>setDressing(e.target.value)} >
            <option value="" disabled selected style={{color:"darkgray",opacity:'0.5'}}>Nothing selected</option>
            {dressingOp.map(item=>(<option key={item}>{item}</option>))}
            </select>
        </div>
        <div className='form-group flex'>
            <label className='label'>The Wound status</label>
            <select className='form-input' onChange={(e)=>setWound(e.target.value)} >
            <option value="" disabled selected style={{color:"darkgray",opacity:'0.5'}}>Nothing selected</option>
            {woundOp.map(item=>(<option key={item}>{item}</option>))}
            </select>
        </div>
        <div className='form-group flex'>
            <label className='label'>The Infection status</label>
            <select className='form-input' onChange={(e)=>setInfection(e.target.value)} >
            <option value="" disabled selected style={{color:"darkgray",opacity:'0.5'}}>Nothing selected</option>
                <option className='option'>test</option>
                <option className='option'>test</option>
            </select>
        </div>
        <div className='form-group flex'>
            <label className='label'>The Managment</label>
            <select className='form-input' onChange={(e)=>setManagment(e.target.value)} >
            <option value="" disabled selected style={{color:"darkgray",opacity:'0.5'}}>Nothing selected</option>
            {manamgmentOp.map(item=>(<option key={item}>{item}</option>))}
            </select>
        </div>
        <div className='form-group flex'>
            <label className='label'>Laboratory tests</label>
            <select className='form-input' onChange={(e)=>setLab([e.target.value])} >
            <option value="" disabled selected style={{color:"darkgray",opacity:'0.5'}}>Nothing selected</option>
            {labtests?.map(item=>(<option value={item.id} key={item.id}>{item}</option>))}
            </select>
        </div>
        <div className='form-group flex'>
            <label className='label'>Attach File</label>
            <input type='file' onChange={(e)=>setFile(e.target.files[0])} />
            <label className='label'>Attach Xray</label>
            <input type='file' onChange={(e)=>setXray(e.target.files[0])}/>
        </div>
        <div className='form-group flex'>
            <h2>The prescription: </h2>
            <label className='label'>Antibiotic</label>
            <div style={{display:"flex",justifyContent:"space-around"}}>
            <input className='form-input' style={{width:"50%"}} onChange={(e)=>setAntbiotic({text:e.target.value,type:antibiotic.type})} />
            <select className='form-input' onChange={(e)=>setAntbiotic({text:antibiotic.text,type:e.target.value})}>
            <option value="" disabled selected style={{color:"darkgray",opacity:'0.5'}}>Nothing selected</option>
                <option className='option'>IV</option>
                <option className='option'>PO</option>
            </select>
            </div>
        </div>
        <div className='form-group flex'>
            <label className='label'>Vitamines</label>
            <select className='form-input'  onChange={(e)=>setVitamines([e.target.value])}>
            <option value="" disabled selected style={{color:"darkgray",opacity:'0.5'}}>Nothing selected</option>
                <option className='option'>test</option>
                <option className='option'>test</option>
            </select>
        </div>
        <div className='form-group flex'>
            <label className='label'>Anticoagulant</label>
            <input className='form-input' onChange={(e)=>setAnticoagulant(e.target.value)}/>
        </div>
        <div className='form-group flex'>
            <label className='label'>Antiplatelet Drug</label>
            <input className='form-input' onChange={(e)=>setaniplatelet(e.target.value)} />
        </div>
        <span className='line' style={{marginTop:"20px",width:"40%"}}></span>
        <div className='form-group flex'>
            <label className='label'>Gait analysis</label>
            <input type='text' className='form-input' onChange={(e)=>setGait(e.target.value)}/>
        </div>
        <div className='form-group flex'>
        <h2>Shoes: </h2>
            <label className='label'>Does patient wears appropriate shoes</label>
            <select className='form-input' onChange={(e)=>setAppropriate(e.target.value)} >
            <option value="" disabled selected style={{color:"darkgray",opacity:'0.5'}}>Nothing selected</option>
                <option className='option'>yes</option>
                <option className='option'>no</option>
            </select>
        </div>
        <div className='form-group flex'>
            <label className='label'>Need to customize shoes</label>
            <select className='form-input' onChange={(e)=>setNeedCustomiz(e.target.value)}>
            <option value="" disabled selected style={{color:"darkgray",opacity:'0.5'}}>Nothing selected</option>
                <option className='option'>yes</option>
                <option className='option'>no</option>
            </select>
        </div>
        <div className='form-group flex'>
            <label className='label'>Shoe Customizer</label>
            <select className='form-input' onChange={(e)=>setCustomizer(e.target.value)}>
            <option value="" disabled selected style={{color:"darkgray",opacity:'0.5'}}>Nothing selected</option>
                <option className='option'>Feras wehbi</option>
                <option className='option'>Abdul Rahman Toubjy</option>
            </select>
        </div>
        <span className='line' style={{width:"40%",marginTop:"20px"}}></span>
        <div className='form-group flex'>
            <label className='label'>Comorbidities</label>
            <input className='form-input' onChange={(e)=>setComorbidities(e.target.value)}/>
        </div>
        <div className='form-group flex'>
            <label className='label'>Consultations</label>
            <input type='file' onChange={(e)=>setConsultations(e.target.files[0])}/>
        </div>
        <button className='Submit-btn' onClick={()=>sendCase()}>Add Case</button>
    </div>
  )
}

export default NewCase