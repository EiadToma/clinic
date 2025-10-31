import React, { useState } from 'react'
import { sendHistory } from '../redux/PatientSlice'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import SuccessToaster from '../Components/SuccessToaster'
import { MultiSelect } from 'react-multi-select-component'
const History = () => {
  const dispatch = useDispatch()
  const {id} = useParams()
  const [toastType, setToastType] = useState('success')
  const [iscreated, setIsCreated] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [sinceDm, setSinceDm] = useState({ number: null, text: '' }) 
  const [htn, setHtn] = useState(false)
  const [renal, setRenal] = useState(false)
  const [smoking, setSmoking] = useState(false)
  const [hyper, setHyper] = useState(false)
  const [others, setOthers] = useState('')
  const [Surgical, setSurgical] = useState('')
  const [amputation, setAmputation] = useState([])
  const [dvt, setDvt] = useState('')
  const [PSurgery, setPsergery] = useState('')
  const [disabled, setDisabled] = useState(false)
  const [allergic, setAllergic] = useState(false)
  const [vasuclar, setVascular] = useState([])
  const [anticougualent, setAnticougualent] = useState([])
  const [diabites, setDiabites] = useState([])

  const mode = useSelector(state => state.user.Mode)
  const historyData = useSelector(state => state.faq.historyLists?.data)
  const anticougualentData = useSelector(state => state.faq.faqData?.data?.data?.anticougualent_drugs)
  const Lists = historyData?.data
  const anticougualentList = anticougualentData?.map(item => ({ label: item.name, value: item.id })) || []
  const amputaionList = Lists?.amputations?.map(item => ({ label: item.type, value: item.id })) || []
  const cardiovascular_drugs = Lists?.cardiovascular_drugs?.map(item => ({ label: item.name, value: item.id })) || []
  const diabetes_drugs = Lists?.diabetes_drugs?.map(item => ({ label: item.name, value: item.id })) || []
  const requestAmputaion = amputation.map(item => item.value) || []
  const requestCardio = vasuclar.map(item => item.value) || []
  const requestAntiCougualent = anticougualent.map(item => item.value) || []
  const requestDiabites = diabites.map(item => item.value) || []

   const submitHistory = async () => {
    const stringSince = JSON.stringify(sinceDm)
    const data = {
      since_dm: stringSince,
      htn,
      renal_impair: renal,
      smoking,
      hyperlipidemia: hyper,
      others,
      surgical_history: Surgical,
      amputations: requestAmputaion,
      previous_dvt: dvt,
      previous_surgery: PSurgery,
      disabled,
      allergic,
      cardiovascular_drugs: requestCardio,
      anticougualent_drugs: requestAntiCougualent,
      diabetes_drugs: requestDiabites,
    }

    try {
      const result = await dispatch(sendHistory({ data, id })).unwrap()
      if (result?.status ||result?.data?.status) {
        setToastType('success')
        setToastMessage('History created successfully!')
      } else {
        throw new Error(result?.message || 'Request failed')
      }
    } catch (error) {
      setToastType('error')
      setToastMessage('Failed to create history. Please try again.')
    } finally {
      setIsCreated(true)
      setTimeout(() => setIsCreated(false), 3000)
    }
  }
  return (
    <div
      className={`${mode === 'dark'
        ? ' bg-[rgba(213,225,247,0.548)]'
        : 'bg-gray-50'
        } w-11/12 mx-auto p-2 flex flex-col justify-between`}
    >
      {iscreated && <SuccessToaster title={toastMessage} type={toastType} />}
      <div className='w-10/12 m-2 justify-between' >
        <label className={` block text-3xl font-medium leading-normal m-2 break-words ${mode === 'dark' ? 'text-blue-100' : 'text-blue-800'}`}> Since-Dm</label>
        <input className='form-input m-2' type='number' onChange={(e) => setSinceDm((sinceDm) => ({ ...sinceDm, number: e.target.value }))} />
        <select className='rounded p-2.5 border ' onChange={(e) => setSinceDm((sinceDm) => ({ ...sinceDm, text: e.target.value }))}>
          <option selected disabled></option>
          <option>I</option>
          <option>II</option>
        </select>
      </div>
      <div className='w-10/12 m-2 flex flex-row justify-between ' >
        <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode === 'dark' ? 'text-blue-100' : 'text-blue-800'}`}>HTN</label>
        <input className='form-input' onChange={() => setHtn(!htn)} type='checkbox' style={{ scale: "1.5" }} />
      </div>
      <div className='w-10/12 m-2 flex flex-row justify-between' >
        <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode === 'dark' ? 'text-blue-100' : 'text-blue-800'}`}>Renal impair</label>
        <input className='form-input' onChange={() => setRenal(!renal)} type='checkbox' style={{ scale: "1.5" }} />
      </div>
      <div className='w-10/12 m-2 flex flex-row justify-between' >
        <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode === 'dark' ? 'text-blue-100' : 'text-blue-800'}`}>smoking</label>
        <input className='form-input' onChange={() => setSmoking(!smoking)} type='checkbox' style={{ scale: "1.5" }} />
      </div>
      <div className='w-10/12 m-2 flex flex-row  justify-between' >
        <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode === 'dark' ? 'text-blue-100' : 'text-blue-800'}`}> Disabled</label>
        <input className='form-input' type='checkbox' onChange={() => setDisabled(!disabled)} style={{ scale: "1.5" }} />
      </div>
      <div className='w-10/12 m-2 flex flex-row justify-between '>
        <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode === 'dark' ? 'text-blue-100' : 'text-blue-800'}`}> Allergic</label>
        <input className='form-input' type='checkbox' onChange={() => setAllergic(!allergic)} style={{ scale: "1.5" }} />
      </div>
      <div className='w-10/12 m-2 flex flex-row justify-between' >
        <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode === 'dark' ? 'text-blue-100' : 'text-blue-800'}`}>Hyperlipemia</label>
        <input className='form-input' onChange={() => setHyper(!hyper)} type='checkbox' style={{ scale: "1.5" }} />
      </div>
      <div className='w-10/12 m-2 flex flex-col '>
        <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode === 'dark' ? 'text-blue-100' : 'text-blue-800'}`}>others</label>
        <input className='form-input' onChange={(e) => setOthers(e.target.value)} type='text' />
      </div>
      <div className='w-10/12 m-2 flex flex-col ' >
        <h2 className={` text-3xl font-medium leading-normal m-2 break-words ${mode === 'dark' ? 'text-blue-100' : 'text-blue-800'}`}>Surgical History:</h2>
        <input className='form-input' onChange={(e) => setSurgical(e.target.value)} />
        <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode === 'dark' ? 'text-blue-100' : 'text-blue-800'}`}>amputaion</label>
        <MultiSelect
          options={amputaionList}
          value={amputation}
          onChange={(selectedOptions) => setAmputation(selectedOptions)}
          labelledBy={"Select"}
        />
      </div>
      <h2 className={` text-3xl font-medium leading-normal m-2 break-words ${mode === 'dark' ? 'text-blue-100' : 'text-blue-800'}`}>Vascular History:</h2>
      <div className='w-10/12 m-2 flex flex-col' >
        <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode === 'dark' ? 'text-blue-100' : 'text-blue-800'}`}>Previous DVT</label>
        <input className='form-input' onChange={(e) => setDvt(e.target.value)} />
        <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode === 'dark' ? 'text-blue-100' : 'text-blue-800'}`}>Previous Surgery</label>
        <input className='form-input' onChange={(e) => setPsergery(e.target.value)} />
      </div>
      <div>
        <h2 className={` text-3xl font-medium leading-normal m-2 break-words ${mode === 'dark' ? 'text-blue-100' : 'text-blue-800'}`}>Medicin History:</h2>
        <div className='w-10/12 m-2 flex flex-col'>
          <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode === 'dark' ? 'text-blue-100' : 'text-blue-800'}`}>cardiovascular</label>
          <MultiSelect
            options={cardiovascular_drugs}
            value={vasuclar}
            onChange={(selectedOptions) => setVascular(selectedOptions)}
            labelledBy={"Select"}
          />
        </div>
        <div className='w-10/12 m-2 flex flex-col'>
          <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode === 'dark' ? 'text-blue-100' : 'text-blue-800'}`}>anticougualent</label>
          <MultiSelect
            options={anticougualentList}
            value={anticougualent}
            onChange={(selectedOptions) => setAnticougualent(selectedOptions)}
            labelledBy={"Select"}
          />
        </div>
        <div className='w-10/12 m-2 flex flex-col'>
          <label className={` text-3xl font-medium leading-normal m-2 break-words ${mode === 'dark' ? 'text-blue-100' : 'text-blue-800'}`}>diabites drugs</label>
          <MultiSelect
            options={diabetes_drugs}
            value={diabites}
            onChange={(selectedOptions) => setDiabites(selectedOptions)}
            labelledBy={"Select"}
          />
        </div>
      </div>
      <button className=' w-48 h-12 transition-all duration-500 m-5 mt-4 px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700
      ' onClick={() => submitHistory()}> submit</button>
    </div>
  )
}

export default History