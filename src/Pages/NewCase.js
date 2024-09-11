import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { createCase } from '../redux/CaseSlice'
import { useDispatch, useSelector } from 'react-redux'
const NewCase = () => {
    const [listdata, SetList] = useState('')
    const [dressing, setDressing] = useState('')
    const [wound, setWound] = useState('')
    const [infection, setInfection] = useState('')
    const [managment, setManagment] = useState('')
    const [lab, setLab] = useState([''])
    const [file, setFile] = useState('')
    const [xray, setXray] = useState('')
    const [antibiotic, setAntbiotic] = useState({ text: "", type: "" })
    const [vitamines, setVitamines] = useState([])
    const [anticoagulant, setAnticoagulant] = useState('')
    const [antiplatelet, setaniplatelet] = useState('')
    const [gait, setGait] = useState('')
    const [appropriate, setAppropriate] = useState('')
    const [need_customiz, setNeedCustomiz] = useState(false)
    const [customizer, setCustomizer] = useState('')
    const [comorbidities, setComorbidities] = useState('')
    const [consultations, setConsultations] = useState(null)
    const dressingOp = ['dry', 'moist', 'green', 'has a smell', 'replace dressing out']
    const woundOp = ['clean', 'dry', 'moist', 'with green', 'pus', 'infection', 'gargrene', 'slow healing']
    const manamgmentOp = ['bulky dressing', 'light dressing', 'no dressing']
    const dispatch = useDispatch()
    const patientId = useSelector(state => state.patient.patient?.id)
    const mode = useSelector(state => state.user.Mode)
    const labtests = listdata?.lab_tests
    console.log(patientId)
    const sendCase = () => {
        const antibioticString = JSON.stringify(antibiotic)
        const vitaArray = JSON.stringify(vitamines)
        const labarray = JSON.stringify(lab)
        const form = new FormData
        form.append('dressing_status', dressing)
        form.append('wound_status', wound)
        form.append('infection_status', infection)
        form.append('managment', managment)
        form.append('antibiotics', antibioticString)
        form.append('labratory_test_ids', labarray)
        form.append('vitamines', vitaArray)
        form.append('antiplatelet', antiplatelet)
        form.append('gait_analysis', gait)
        form.append('wear_approp_shoes', appropriate)
        form.append('shoe_customizer', customizer)
        form.append('comorbidities', comorbidities)
        form.append('file_url', file)
        form.append('anticoaglulant', anticoagulant)
        form.append('need_customization', need_customiz)
        form.append('x_ray_url', xray)
        form.append('consultation', consultations)
        dispatch(createCase({ patientId, form }))
    }

    useEffect(() => {
        axios.get('https://clinic-backend-0lcl.onrender.com/values/faq').then(res => SetList(res.data.data))
    }, [])
    return (
        <div className={`form-container  opacity-85 w-11/12 mx-auto p-2 flex flex-row relative justify-between flex-wrap`}>
            <div className='w-10/12 opacity-85 m-2 flex flex-col'>
                <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode === 'dark' ? 'text-blue-100' : 'text-blue-800'}`}>The Dressing status</label>
                <select className='form-input' onChange={(e) => setDressing(e.target.value)} >
                    <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
                    {dressingOp.map(item => (<option key={item}>{item}</option>))}
                </select>
            </div>
            <div className='w-10/12 m-2 flex flex-col'>
                <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode === 'dark' ? 'text-blue-100' : 'text-blue-800'}`}>The Wound status</label>
                <select className='form-input' onChange={(e) => setWound(e.target.value)} >
                    <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
                    {woundOp.map(item => (<option key={item}>{item}</option>))}
                </select>
            </div>
            <div className='w-10/12 m-2 flex flex-col'>
                <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode === 'dark' ? 'text-blue-100' : 'text-blue-800'}`}>Infection</label>
                <select className='form-input' onChange={(e) => setInfection(e.target.value)} >
                    <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
                    <option className='option'>Yes</option>
                    <option className='option'>No</option>
                </select>
            </div>
            <div className='w-10/12 m-2 flex flex-col'>
                <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode === 'dark' ? 'text-blue-100' : 'text-blue-800'}`}>The Managment</label>
                <select className='form-input' onChange={(e) => setManagment(e.target.value)} >
                    <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
                    {manamgmentOp.map(item => (<option key={item}>{item}</option>))}
                </select>
            </div>
            <div className='w-10/12 m-2 flex flex-col'>
                <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode === 'dark' ? 'text-blue-100' : 'text-blue-800'}`}>Laboratory tests</label>
                <select className='form-input' onChange={(e) => setLab([e.target.value])} >
                    <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
                    {labtests?.map(item => (<option value={item.id} key={item.id}>{item.type}</option>))}
                </select>
            </div>
            <div className='w-10/12 m-2 flex flex-col'>
                <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode === 'dark' ? 'text-blue-100' : 'text-blue-800'}`}>Attach File</label>
                <input type='file' onChange={(e) => setFile(e.target.files[0])} />
                <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode === 'dark' ? 'text-blue-100' : 'text-blue-800'}`}>Attach Xray</label>
                <input type='file' onChange={(e) => setXray(e.target.files[0])} />
            </div>
            <div className='w-10/12 m-2 flex flex-col'>
                <h2 className={`title font-bold`}>The prescription: </h2>
            <span className='line' style={{ marginTop: "20px", width: "40%" }}></span>
                <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode === 'dark' ? 'text-blue-100' : 'text-blue-800'}`}>Antibiotic</label>
                <div style={{ display: "flex flex-col", justifyContent: "space-around" }}>
                    <input className='form-input' style={{ width: "50%" }} onChange={(e) => setAntbiotic({ text: e.target.value, type: antibiotic.type })} />
                    <select className='form-input ml-2' onChange={(e) => setAntbiotic({ text: antibiotic.text, type: e.target.value })}>
                        <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
                        <option className='option'>IV</option>
                        <option className='option'>PO</option>
                    </select>
                </div>
            </div>
            <div className='w-10/12 m-2 flex flex-col'>
                <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode === 'dark' ? 'text-blue-100' : 'text-blue-800'}`}>Vitamines</label>
                <select className='form-input' onChange={(e) => setVitamines([e.target.value])}>
                    <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
                    <option className='option'>test</option>
                    <option className='option'>test</option>
                </select>
            </div>
            <div className='w-10/12 m-2 flex flex-col'>
                <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode === 'dark' ? 'text-blue-100' : 'text-blue-800'}`}>Anticoagulant</label>
                <input className='form-input' onChange={(e) => setAnticoagulant(e.target.value)} />
            </div>
            <div className='w-10/12 m-2 flex flex-col'>
                <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode === 'dark' ? 'text-blue-100' : 'text-blue-800'}`}>Antiplatelet Drug</label>
                <input className='form-input' onChange={(e) => setaniplatelet(e.target.value)} />
            </div>
            <div className='w-10/12 m-2 flex flex-col'>
                <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode === 'dark' ? 'text-blue-100' : 'text-blue-800'}`}>Gait analysis</label>
                <input type='text' className='form-input' onChange={(e) => setGait(e.target.value)} />
            </div>
            <div className='w-10/12 m-2 flex flex-col'>
                <h2 className='title'>Shoes: </h2>
            <span className='line' style={{ width: "40%", marginTop: "20px" }}></span>
                <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode === 'dark' ? 'text-blue-100' : 'text-blue-800'}`}>Does patient wears appropriate shoes</label>
                <select className='form-input' onChange={(e) => setAppropriate(e.target.value)} >
                    <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
                    <option className='option'>yes</option>
                    <option className='option'>no</option>
                </select>
            </div>
            <div className='w-10/12 m-2 flex flex-col'>
                <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode === 'dark' ? 'text-blue-100' : 'text-blue-800'}`}>Need to customize shoes</label>
                <select className='form-input' onChange={(e) => setNeedCustomiz(e.target.value)}>
                    <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
                    <option className='option' value={true}>yes</option>
                    <option className='option' value={false}>no</option>
                </select>
            </div>
            <div className='w-10/12 m-2 flex flex-col'>
                <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode === 'dark' ? 'text-blue-100' : 'text-blue-800'}`}>Shoe Customizer</label>
                <select className='form-input' onChange={(e) => setCustomizer(e.target.value)}>
                    <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
                    <option className='option'>Feras wehbi</option>
                    <option className='option'>Abdul Rahman Toubjy</option>
                </select>
            </div>
            <div className='w-10/12 m-2 flex flex-col'>
                <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode === 'dark' ? 'text-blue-100' : 'text-blue-800'}`}>Comorbidities</label>
                <input className='form-input' onChange={(e) => setComorbidities(e.target.value)} />
            </div>
            <div className='w-10/12 m-2 flex flex-col'>
                <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode === 'dark' ? 'text-blue-100' : 'text-blue-800'}`}>Consultations</label>
                <input type='file' onChange={(e) => setConsultations(e.target.files[0])} />
            </div>
            <button className='Submit-btn' onClick={() => sendCase()}>Add Case</button>
        </div>
    )
}

export default NewCase