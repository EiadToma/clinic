import { useDispatch, useSelector } from 'react-redux';
import { MultiSelect } from 'react-multi-select-component';
import { useState } from 'react';
import axios from 'axios';
const SearchPage = () => {
  const [gender, setGender] = useState(null);
  const [main, setMain] = useState([]);
  const [second, setSecond] = useState([]);
  const [deformaty1, setDeformaty1] = useState([]);
  const [deformaty2, setDeformaty2] = useState([]);
  const [causes, setCauses] = useState([]);
  const [thermo, setThermo] = useState('')
  const [mino, setMino] = useState('')
  const [nero, setNero] = useState('')
  const [clinicalClassification, setClinicalClass] = useState([]);
  const [infectionPosition, setInfectionPosition] = useState({})
  const [iwgdf, setIwgdf] = useState('')
  const [sinbad, setSindbad] = useState({ site: '', Ischemia: '', Neropathy: '', bacterial: '', Area: '', Depth: '' })
  const [vascular, setVascular] = useState({ rpp: '', lpp: '', ldp: '', rdp: '', lpd: '', rpd: '', ldd: '', rdd: '', rabi: '', labi: '', })
  const [diability, setDisability] = useState('')
  const [status, setStatus] = useState('')
  const [needVascular, setNeedVascular] = useState('')
  const [vascularProcedure, setVascularProcedure] = useState('')
  const [patientToHospital, setPatientToHospital] = useState('')
  const [htn, setHtn] = useState(false)
  const [renal, setRenal] = useState(false)
  const [smoking, setSmoking] = useState(false)
  const [hyper, setHyper] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [allergic, setAllergic] = useState(false)
  const [amputation, setAmputation] = useState([])
  const [cardioVascular, setCardioVascular] = useState([])
  const [anticougualent, setAnticougualent] = useState([])
  const [diabites, setDiabites] = useState([])

  //
  const dispatch = useDispatch();
  const Lists = useSelector(state => state.faq.faqData?.data);
  const clinical = useSelector(state => state.faq?.faqData?.data.classificaations);
  const historyList = useSelector(state => state.faq.history);
  const historylist = useSelector(state => state.faq.historyLists?.data)
  const amputaionList = historylist.amputations?.map(item => ({ label: item.type, value: item.id })) || []
  const anticougualentData = useSelector(state => state.faq.faqData?.data.anticougualent_drugs)
  const anticougualentList = anticougualentData?.map(item => ({ label: item.name, value: item.id })) || []
  const cardiovascular_drugs = historylist.cardiovascular_drugs?.map(item => ({ label: item.name, value: item.id })) || []
  const diabetes_drugs = historylist.diabetes_drugs?.map(item => ({ label: item.name, value: item.id })) || []
  //
  const lesionList = Lists?.lesions?.map(item => ({ label: item.type, value: item.id })) || [];
  const deformities = Lists?.deformities?.map(item => ({ label: item.type, value: item.id })) || [];
  const clinicalList = clinical?.map(item => ({ label: item.type, value: item.id })) || [];
  const causesList = Lists.causes?.map(item => ({ label: item.cause, value: item.id })) || [];
  const historyOptions = historyList?.map(item => ({ label: item.name, value: item.id })) || [];
  const pulsList = ['Normal', 'Weak', 'Abscent']
  const dopplerList = ['Normal', 'Acceptable', 'Weak', 'Abscent']

  const searchParam = {
    mainLesionIds: main.map(option => option.value).join(","),
    secondaryLesionIds: second.map(option => option.value).join(","),
    lesionCauseIds: causes.map(option => option.value).join(","),
    gender: '',
    thermo: thermo,
    neuro: nero,
    mino: mino,
    minBirthdayYear: '',
    minYear: '',
    maxYear: '',
    months: '',
    maxBirthdayYear: '',
    clinical_classification_id: clinicalClassification.map(option => option.value).join(","),
    iwgdf_classification: iwgdf,
    rpp: vascular.rpp,
    lpp: vascular.lpp,
    ldp: vascular.ldp,
    rdp: vascular.rdp,
    lpd: vascular.lpd,
    rpd: vascular.rpd,
    ldd: vascular.ldd,
    rdd: vascular.rdd,
    rabi: vascular.rabi,
    labi: vascular.labi,
    minSinbad: '',
    maxSinbad: '',
    leftDeformityId: deformaty1.map(option => option.value).join(","),
    rightDeformityId: deformaty2.map(option => option.value).join(","),
    amputations: amputation.map(option => option.value).join(","),
    anticougualent_drugs: anticougualent.map(option => option.value).join(","),
    cardiovascular_drugs: cardioVascular.map(option => option.value).join(","),
    diabetes_drugs: diabites.map(option => option.value).join(","),
    hyperlipidemia: hyper,
    smoking: smoking,
    allergic: allergic,
    disabled: disabled,
    htn: htn,
    renal_impair: renal
  }

  const handleSubmit = async () => {

    const filteredSearchParam = Object.fromEntries(
      Object.entries(searchParam).filter(([key, value]) => value !== '')
    );
    const response = await axios.get('https://clinic-backend-0lcl.onrender.com/patient/cases/search', {
      params: filteredSearchParam
    }).then(response => {
      console.log(response.data);
    })
    console.log(response)
  };
  console.log(searchParam)
  return (
    <div className='form-container rounded w-10/12 m-auto mb-5'>
      <h3 className='title'>Search Criteria</h3>
      <span className='line'></span>
      <div className='h-fit w-full flex flex-row '>
        <div className='w-1/2  border-r-2 border-gray-300'>
          <div>
            <label className="block text-sm font-medium text-gray-700">Gender:</label>
            <div className="flex items-center">
              <label className="mr-2">
                <input type="checkbox" checked={gender === 1} onChange={(e) => setGender(e.target.checked ? 1 : null)} className="mr-1"
                /> Male
              </label>
              <label>
                <input type="checkbox" checked={gender === 0} onChange={(e) => setGender(e.target.checked ? 0 : null)} className="mr-1" /> Female
              </label>
            </div>
          </div>
          <div className='w-8/12 m-2 inline-block flex-col'>
            <label className='label'>Type(s) of the main lesion</label>
            <MultiSelect
              options={lesionList}
              value={main}
              onChange={(selectedOptions) => setMain(selectedOptions)}
              labelledBy={"Select"}
            />
          </div>
          <div className='w-8/12 m-2 inline-block flex-col'>
            <label className='label'>Secondary Lesion</label>
            <MultiSelect
              options={lesionList}
              value={second}
              onChange={(selectedOptions) => setSecond(selectedOptions)}
              labelledBy={"Select"}
            />
          </div>

          <div className='w-8/12 m-2 flex flex-col'>
            <label className='label'>Suspected Direct Cause(s) of the lesion</label>
            <MultiSelect
              options={causesList}
              value={causes}
              onChange={(selectedOptions) => setCauses(selectedOptions)}
              labelledBy={"Select"}
            />
          </div>

          <div className='w-10/12 m-2 flex flex-col'>
            <label className='label'>Deformities</label>
            <div className='flex flex-row align-bottom'>
              <MultiSelect
                options={deformities}
                value={deformaty1}
                onChange={(selectedOptions) => setDeformaty1(selectedOptions)}
                labelledBy={"Select"}
                className='form-select'
              />
              <MultiSelect
                options={deformities}
                value={deformaty2}
                onChange={(selectedOptions) => setDeformaty2(selectedOptions)}
                labelledBy={"Select"}
                className='form-select'
              />
            </div>
          </div>

          <h5 className='title'>Vascular status</h5>
          <div className='w-full flex flex-row justify-center'>
            <div className='w-1/4'></div>
            <p className='w-1/4'>left</p>
            <div className='w-1/4'></div>
            <p className='w-1/4'>right</p>
          </div>
          <table className='w-full h-300'>
            <tbody>
              <tr>
                <td className='w-20 py-2 '>Posterior</td>
                <td className='w-24 py-2'>
                  <select onChange={(e) => setVascular(state => ({ ...state, lpp: e.target.value }))} className='rounded w-24 h-8' >
                    <option value="" disabled selected>Pulse</option>
                    {pulsList.map(item => (<option>{item}</option>))}
                  </select>
                </td>
                <td className='w-24 py-2'>
                  <select onChange={(e) => setVascular(state => ({ ...state, lpd: e.target.value }))} className='rounded  w-24 h-8' >
                    <option value="" disabled selected>Doppler</option>
                    {dopplerList.map(item => (<option>{item}</option>))}
                  </select></td>
                <td className='w-24 py-2'>
                  <select onChange={(e) => setVascular(state => ({ ...state, rpp: e.target.value }))} className='rounded  w-24 h-8' >
                    <option value="" disabled selected>Pulse</option>
                    {pulsList.map(item => (<option>{item}</option>))}
                  </select>
                </td>
                <td className='w-24 py-2'>
                  <select onChange={(e) => setVascular(state => ({ ...state, rpd: e.target.value }))} className='rounded   w-24 h-8' >
                    <option value="" disabled selected>Doppler</option>
                    {dopplerList.map(item => (<option>{item}</option>))}
                  </select>
                </td>
              </tr>
              <tr>
                <td className='w-20 '>Dorsalis</td>
                <td className='w-24 py-2'>
                  <select onChange={(e) => setVascular(state => ({ ...state, ldp: e.target.value }))} className='rounded  w-24 h-8' >
                    <option value="" disabled selected>Pulse</option>
                    {pulsList.map(item => (<option>{item}</option>))}
                  </select>
                </td>
                <td className='w-24 py-2'>
                  <select onChange={(e) => setVascular(state => ({ ...state, ldd: e.target.value }))} className='rounded  w-24 h-8' >
                    <option value="" disabled selected>Doppler</option>
                    {dopplerList.map(item => (<option>{item}</option>))}
                  </select>
                </td>
                <td className='w-24 py-2'>
                  <select onChange={(e) => setVascular(state => ({ ...state, rdp: e.target.value }))} className='rounded  w-24 h-8' >
                    <option value="" disabled selected>Pulse</option>
                    {pulsList.map(item => (<option>{item}</option>))}
                  </select>
                </td>
                <td className='w-24 py-2'>
                  <select onChange={(e) => setVascular(state => ({ ...state, rdd: e.target.value }))} className='rounded   w-24 h-8' >
                    <option value="" disabled selected>Doppler</option>
                    {dopplerList.map(item => (<option>{item}</option>))}
                  </select>
                </td>
              </tr>
              <tr className=''>
                <td className='w-20 '>Abi</td>
                <td className='w-20 '><input onChange={(e) => setVascular(state => ({ ...state, labi: e.target.value }))} type='number' className='rounded w-20' /></td>
                <td></td>
                <td className='w-20 '><input onChange={(e) => setVascular(state => ({ ...state, rabi: e.target.value }))} type='number' className='rounded w-20' /></td>
                <td></td>
              </tr>
            </tbody>
          </table>

          <div>
            <h5 className='title'>Nervous status</h5>
            <div className='nervous'>
              <div className='nervous-item'>
                <label className=' w-1/3'>Minofilament test</label>
                <select onChange={(e) => setMino(e.target.value)} className={'w-1/3'}>
                  <option>Normal</option>
                  <option>Abnormal</option>
                  <option>Abscent</option>
                </select>
              </div>
              <div className='nervous-item'>
                <label className=' w-1/3'>neurothesiometer</label>
                <select onChange={(e) => setNero(e.target.value)} className={'w-1/3'}>
                  <option>Normal</option>
                  <option>Mild neuropathy </option>
                  <option>Moderate neuropathy</option>
                  <option>Severe neuropathy</option>
                </select>
              </div>
              <div className='nervous-item'>
                <label className=' w-1/3'>thermo meter</label>
                <select onChange={(e) => setThermo(e.target.value)} className={'w-1/3'} >
                  <option>Normal</option>
                  <option>Abnormal</option>
                </select>
              </div>
            </div>
          </div>
          <div className='w-10/12 m-2 flex flex-col'>
            <label className='label'>Clinical Classification</label>
            <MultiSelect
              options={clinicalList}
              value={clinicalClassification}
              onChange={(selectedOptions) => setClinicalClass(selectedOptions)}
              labelledBy={"Select"}
            />
          </div>
          <div className='w-10/12 m-2 flex flex-col'>
            <label className='label'>Disability</label>
            <select className='form-input' onChange={(e) => setDisability(e.target.value)} >
              <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
              {/* {disabilities.map(item=>(<option key={item}>{item}</option>))} */}
            </select>
          </div>
          <div className='w-10/12 m-2 flex flex-col'>
            <label className='label'>Status</label>
            <select className='form-input' onChange={(e) => setStatus(e.target.value)} >
              <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
              <option>Observation</option>
              <option>Surgery</option>
              <option>Hospitalization</option>
              <option>The patient refused</option>
            </select>
          </div>
          <div className='w-10/12 m-2 flex flex-col'>
            <label className='label'>Need of vascular procedure</label>
            <select className='form-input' onChange={(e) => setNeedVascular(e.target.value)} >
              <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
              <option>Advisable</option>
              <option>Urgent</option>
              <option>After a trial of Conservative management</option>

            </select>
          </div>
          <div className='w-10/12 m-2 flex flex-col'>
            <label className='label'>The vascular procedure</label>
            <select className='form-input' onChange={(e) => setVascularProcedure(e.target.value)}>
              <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
              <option>Unaffordable</option>
              <option>Was done</option>
              <option>Angioplasty</option>
              <option>With stent</option>
              <option>Graft</option>
            </select>
          </div>
          <div className='w-10/12 m-2 flex flex-col'>
            <label className='label'>The patient should be referred to the hospital for</label>
            <select className='form-input' onChange={(e) => setPatientToHospital(e.target.value)} >
              <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
              <option>Closed follow up</option>
              <option>Above the knee Amputation</option>
              <option>Below the knee Amputation</option>
              <option>Surgery</option>

            </select>
          </div>
          <div className='w-10/12 m-2 flex flex-col' >
            <label className='label'> Position of the Infection</label>
            <div className='flex flex-row'  >
              <select className='form-select'>
                <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
                <option value='l'>Left</option>
                <option value='r'>Right</option>
              </select>
              <select className='form-select' >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
          <div className={'w-10/12 m-2 flex flex-col'}>
            <label className='form-label'>Infection IWGDF Classification</label>
            <select className='form-input'  >
              <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
              <option value={1}>Uninfected</option>
              <option value={2}>Mild</option>
              <option value={3}>Moderate</option>
              <option value={4}>Moderate (infection involving bone)</option>
              <option value={5}>Severe</option>
              <option value={6}>Severe (infection involving bone)</option>
            </select>
          </div>

        </div>


        <div className='w-1/2'>

          <h5 className='title'> SinBad Classification</h5>
          <div className='w-10/12 m-2 flex flex-col'>
            <label className='label'>Site</label>
            <select className='form-input' >
              <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
              <option value={0}>ForeFoot</option>
              <option value={1}>MidFoot or ThindFoot</option>
            </select>
          </div>
          <div className='w-10/12 m-2 flex flex-col'>
            <label className='label'>Ischemia</label>
            <select className='form-input' >
              <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
              <option value={0}>bedal blood flow intact:at least one pulse palpable</option>
              <option value={1}>Clinical evidence of reduced pedal bloody flow</option>
            </select>
          </div>
          <div className='w-10/12 m-2 flex flex-col'>
            <label className='label'>Neropathy</label>
            <select className='form-input' >
              <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
              <option value={0}>Protective sensation intact</option>
              <option value={1}>Protective sensation lost</option>
            </select>
          </div>
          <div className='w-10/12 m-2 flex flex-col'>
            <label className='label'>bacterial Infection</label>
            <select className='form-input'>
              <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
              <option value={0}>none</option>
              <option value={1}>present</option>
            </select>
          </div>
          <div className='w-10/12 m-2 flex flex-col'>
            <label className='label'>Area ulcer</label>
            <select className='form-input' >
              <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
              <option value={0}>{'<'}1cm²</option>
              <option value={1}>{'>'}1cm²</option>
            </select>
          </div>
          <div className='w-10/12 m-2 flex flex-col'>
            <label className='label'>Depth</label>
            <select className='form-input' >
              <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
              <option value={0}>Skin,subcutaneous,tissue</option>
              <option value={1}>Ulcer reaching muscle - tendo or deeper</option>
            </select>
          </div>

          <h5 className='title'>History</h5>

          <div className='w-10/12 m-2 flex flex-col'>
            <label className='label'>Cardiovascular</label>
            <MultiSelect
              options={cardiovascular_drugs}
              value={cardioVascular}
              onChange={(selectedOptions) => setCardioVascular(selectedOptions)}
              labelledBy={"Select"}
            />
          </div>
          <div className='w-10/12 m-2 flex flex-col'>
            <label className='label'>Anticougualent</label>
            <MultiSelect
              options={anticougualentList}
              value={anticougualent}
              onChange={(selectedOptions) => setAnticougualent(selectedOptions)}
              labelledBy={"Select"}
            />
          </div>
          <div className='w-10/12 m-2 flex flex-col'>
            <label className='label'>Diabites drugs</label>
            <MultiSelect
              options={diabetes_drugs}
              value={diabites}
              onChange={(selectedOptions) => setDiabites(selectedOptions)}
              labelledBy={"Select"}
            />
          </div>

          <div className='w-10/12 m-2 flex flex-col'>
            <label className='label'>Amputaion</label>
            <MultiSelect
              options={amputaionList}
              value={amputation}
              onChange={(selectedOptions) => setAmputation(selectedOptions)}
              labelledBy={"Select"}
            />
          </div>
          <div className='w-10/12 m-2 flex flex-row justify-between ' >
            <label className={` text-3xl font-medium leading-normal m-2 break-words `}>HTN</label>
            <input className='form-input' onChange={() => setHtn(!htn)} type='checkbox' style={{ scale: "1.5" }} />
          </div>
          <div className='w-10/12 m-2 flex flex-row justify-between' >
            <label className={` text-3xl font-medium leading-normal m-2 break-words `}>Renal impair</label>
            <input className='form-input' onChange={() => setRenal(!renal)} type='checkbox' style={{ scale: "1.5" }} />
          </div>
          <div className='w-10/12 m-2 flex flex-row justify-between' >
            <label className={` text-3xl font-medium leading-normal m-2 break-words `}>smoking</label>
            <input className='form-input' onChange={() => setSmoking(!smoking)} type='checkbox' style={{ scale: "1.5" }} />
          </div>
          <div className='w-10/12 m-2 flex flex-row justify-between' >
            <label className={` text-3xl font-medium leading-normal m-2 break-words`}>Hyperlipemia</label>
            <input className='form-input' onChange={() => setHyper(!hyper)} type='checkbox' style={{ scale: "1.5" }} />
          </div>
          <div className='w-10/12 m-2 flex flex-row  justify-between' >
            <label className={` text-3xl font-medium leading-normal m-2 break-words `}> Disabled</label>
            <input className='form-input' type='checkbox' onChange={() => setDisabled(!disabled)} style={{ scale: "1.5" }} />
          </div>
          <div className='w-10/12 m-2 flex flex-row justify-between '>
            <label className={` text-3xl font-medium leading-normal m-2 break-words`}> Allergic</label>
            <input className='form-input' type='checkbox' onChange={() => setAllergic(!allergic)} style={{ scale: "1.5" }} />
          </div>
        </div>
      </div>

      <button onClick={handleSubmit} className='bg-green-600 border border-red-400 p-2'>Search</button>
      
    </div>
  );
}

export default SearchPage;
