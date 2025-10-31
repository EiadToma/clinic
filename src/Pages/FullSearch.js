import { useDispatch, useSelector } from 'react-redux';
import { MultiSelect } from 'react-multi-select-component';
import { getFaq } from '../redux/FaqSlice';
import { useState } from 'react';
import PatientsTable from '../Components/TestTabel'
import { fullSearch } from '../redux/UserSlice';
import SuccessToast from '../Components/SuccessToaster'
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
  const [minSinbad, setMinSindbad] = useState(null)
  const [maxSinbad, setMaxSindbad] = useState(null)
  const [minYear, setMinYear] = useState(null)
  const [maxYear, setMaxYear] = useState(null)
  const [minBirthYear, setMinBirthYear] = useState(null)
  const [maxBirthYear, setMaxBirthYear] = useState(null)
  const [months, setMonths] = useState([])
  const [sinbad, setSindbad] = useState({ site: '', Ischemia: '', Neropathy: '', bacterial: '', Area: '', Depth: '' })
  const [vascular, setVascular] = useState({ rpp: '', lpp: '', ldp: '', rdp: '', lpd: '', rpd: '', ldd: '', rdd: '', rabi: '', labi: '', })
  const [disability, setDisability] = useState('')
  const [status, setStatus] = useState('')
  const [needVascular, setNeedVascular] = useState('')
  const [vascularProcedure, setVascularProcedure] = useState('')
  const [patientToHospital, setPatientToHospital] = useState('')
  const [htn, setHtn] = useState(null)
  const [renal, setRenal] = useState(null)
  const [smoking, setSmoking] = useState(null)
  const [hyper, setHyper] = useState(null)
  const [disabled, setDisabled] = useState(null)
  const [allergic, setAllergic] = useState(null)
  const [amputation, setAmputation] = useState([])
  const [cardioVascular, setCardioVascular] = useState([])
  const [anticougualent, setAnticougualent] = useState([])
  const [diabites, setDiabites] = useState([])

  //
  const dispatch = useDispatch();
  const searching = useSelector(state => state.user.fullSearch.isLoading)
  const result = useSelector(state => state.user.fullSearch.data)
  const Lists = useSelector(state => state.faq.faqData?.data?.data);

  const historylist = useSelector(state => state.faq.historyLists?.data)
  const amputaionList = historylist.amputations?.map(item => ({ label: item.type, value: item.id })) || []
  const cardiovascular_drugs = historylist.cardiovascular_drugs?.map(item => ({ label: item.name, value: item.id })) || []
  const diabetes_drugs = historylist.diabetes_drugs?.map(item => ({ label: item.name, value: item.id })) || []
  //
  if (!Lists)
    dispatch(getFaq())

  const lesionList = Lists?.lesions?.map(item => ({ label: item.type, value: item.id })) || [];
  const deformities = Lists?.deformities?.map(item => ({ label: item.type, value: item.id })) || [];
  const causesList = Lists?.causes?.map(item => ({ label: item.cause, value: item.id })) || [];
  const clinicalList = Lists?.classificaations?.map(item => ({ label: item.type, value: item.id })) || [];
  const anticougualentList = Lists?.anticougualent_drugs?.map(item => ({ label: item.name, value: item.id })) || [];
  const pulsList = ['Normal', 'Weak', 'Abscent']
  const dopplerList = ['Normal', 'Acceptable', 'Weak', 'Abscent']
  const disabilities = ['walked befor and now', 'used to walk but not now', 'has not been walking for a long time', 'disabled patient', 'has not walked for while and now he is walking']

  console.log(gender)
  const searchParam = {
    mainLesionIds: main.map(option => option.value).join(","),
    secondaryLesionIds: second.map(option => option.value).join(","),
    lesionCauseIds: causes.map(option => option.value).join(","),
    gender: gender,
    thermo: thermo,
    neuro: nero,
    mino: mino,
    minBirthdayYear: minBirthYear,
    minYear: minYear,
    maxYear: maxYear,
    months: months.map(option => option.value).join(","),
    maxBirthdayYear: maxBirthYear,
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
    minSinbad: minSinbad,
    maxSinbad: maxSinbad,
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
      Object.entries(searchParam).filter(([key, value]) => value !== '' && value !== null)
    );
    dispatch(fullSearch(filteredSearchParam))
  };
  console.log(result)
  return (

    <div className='form-container rounded w-10/12 m-auto mb-5'>
      <h3 className='title'>Search Criteria</h3>
      {searching && <SuccessToast title={'Searching..'} />}
      <span className='line'></span>
      <div className='h-fit w-full flex flex-row '>
        <div className='w-1/2  border-r-2 border-gray-300'>
          <h5 className='title'>Lesion status</h5>
          <div className='w-8/12 m-2 inline-block flex-col'>
            <label  >Type(s) of the main lesion</label>
            <MultiSelect
              options={lesionList}
              value={main}
              onChange={(selectedOptions) => setMain(selectedOptions)}
              labelledBy={"Select"}
            />
          </div>
          <div className='w-8/12 m-2 inline-block flex-col'>
            <label  >Secondary Lesion</label>
            <MultiSelect
              options={lesionList}
              value={second}
              onChange={(selectedOptions) => setSecond(selectedOptions)}
              labelledBy={"Select"}
            />
          </div>

          <div className='w-8/12 m-2 flex flex-col'>
            <label  >Suspected Direct Cause(s) of the lesion</label>
            <MultiSelect
              options={causesList}
              value={causes}
              onChange={(selectedOptions) => setCauses(selectedOptions)}
              labelledBy={"Select"}
            />
          </div>

          <div className='w-10/12 m-2 flex flex-col'>
            <label  >Deformities</label>
            <div className='flex flex-row p-0 align-bottom'>
              <MultiSelect
                options={deformities}
                value={deformaty1}
                onChange={(selectedOptions) => setDeformaty1(selectedOptions)}
                labelledBy={"Select"}
                className=' p-0 w-2/5  mr-1'
              />
              <MultiSelect
                options={deformities}
                value={deformaty2}
                onChange={(selectedOptions) => setDeformaty2(selectedOptions)}
                labelledBy={"Select"}
                className='p-0 w-2/5 ml-1 mr-1'
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
                  <option disabled selected>Nothing selected</option>
                  <option>Normal</option>
                  <option>Abnormal</option>
                  <option>Abscent</option>
                </select>
              </div>
              <div className='nervous-item'>
                <label className=' w-1/3'>neurothesiometer</label>
                <select onChange={(e) => setNero(e.target.value)} className={'w-1/3'}>
                  <option disabled selected>Nothing selected</option>
                  <option>Normal</option>
                  <option>Mild neuropathy </option>
                  <option>Moderate neuropathy</option>
                  <option>Severe neuropathy</option>
                </select>
              </div>
              <div className='nervous-item'>
                <label className=' w-1/3'>thermo meter</label>
                <select onChange={(e) => setThermo(e.target.value)} className={'w-1/3'} >
                  <option disabled selected>Nothing selected</option>
                  <option>Normal</option>
                  <option>Abnormal</option>
                </select>
              </div>
            </div>
          </div>
          <div className='w-10/12 m-2 flex flex-col'>
            <label  >Clinical Classification</label>
            <MultiSelect
              options={clinicalList}
              value={clinicalClassification}
              onChange={(selectedOptions) => setClinicalClass(selectedOptions)}
              labelledBy={"Select"}
            />
          </div>
          <div className='w-10/12 m-2 flex flex-col'>
            <label  >Disability</label>
            <select className='form-input' onChange={(e) => setDisability(e.target.value)} >
              <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
              {disabilities.map(item => (<option key={item}>{item}</option>))}
            </select>
          </div>
          <div className='w-10/12 m-2 flex flex-col'>
            <label  >Status</label>
            <select className='form-input' onChange={(e) => setStatus(e.target.value)} >
              <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
              <option>Observation</option>
              <option>Surgery</option>
              <option>Hospitalization</option>
              <option>The patient refused</option>
            </select>
          </div>
          <div className='w-10/12 m-2 flex flex-col'>
            <label  >Need of vascular procedure</label>
            <select className='form-input' onChange={(e) => setNeedVascular(e.target.value)} >
              <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
              <option>Advisable</option>
              <option>Urgent</option>
              <option>After a trial of Conservative management</option>

            </select>
          </div>
          <div className='w-10/12 m-2 flex flex-col'>
            <label  >The vascular procedure</label>
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
            <label  >The patient should be referred to the hospital for</label>
            <select className='form-input' onChange={(e) => setPatientToHospital(e.target.value)} >
              <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
              <option>Closed follow up</option>
              <option>Above the knee Amputation</option>
              <option>Below the knee Amputation</option>
              <option>Surgery</option>

            </select>
          </div>
          <div className='w-10/12 m-2 flex flex-col' >
            <label  > Position of the Infection</label>
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
            <label className="label">Min Sinbad</label>
            <select
              value={minSinbad || ""}
              onChange={(e) => setMinSindbad(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select Min Sinbad</option>
              {[...Array(7).keys()].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <div className='w-10/12 m-2 flex flex-col'>
            <label className="label">Max Sinbad</label>
            <select
              value={maxSinbad || ""}
              onChange={(e) => setMaxSindbad(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select Max Sinbad</option>
              {[...Array(7).keys()].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          <div className='w-10/12 m-2 flex flex-col'>
            <label  >Site</label>
            <select className='form-input' >
              <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
              <option value={0}>ForeFoot</option>
              <option value={1}>MidFoot or ThindFoot</option>
            </select>
          </div>
          <div className='w-10/12 m-2 flex flex-col'>
            <label  >Ischemia</label>
            <select className='form-input' >
              <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
              <option value={0}>bedal blood flow intact:at least one pulse palpable</option>
              <option value={1}>Clinical evidence of reduced pedal bloody flow</option>
            </select>
          </div>
          <div className='w-10/12 m-2 flex flex-col'>
            <label  >Neropathy</label>
            <select className='form-input' >
              <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
              <option value={0}>Protective sensation intact</option>
              <option value={1}>Protective sensation lost</option>
            </select>
          </div>
          <div className='w-10/12 m-2 flex flex-col'>
            <label  >bacterial Infection</label>
            <select className='form-input'>
              <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
              <option value={0}>none</option>
              <option value={1}>present</option>
            </select>
          </div>
          <div className='w-10/12 m-2 flex flex-col'>
            <label  >Area ulcer</label>
            <select className='form-input' >
              <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
              <option value={0}>{'<'}1cm²</option>
              <option value={1}>{'>'}1cm²</option>
            </select>
          </div>
          <div className='w-10/12 m-2 flex flex-col'>
            <label  >Depth</label>
            <select className='form-input' >
              <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
              <option value={0}>Skin,subcutaneous,tissue</option>
              <option value={1}>Ulcer reaching muscle - tendo or deeper</option>
            </select>
          </div>

          <h5 className='title'>History</h5>

          <div className='w-10/12 m-2 flex flex-col'>
            <label  >Cardiovascular</label>
            <MultiSelect
              options={cardiovascular_drugs}
              value={cardioVascular}
              onChange={(selectedOptions) => setCardioVascular(selectedOptions)}
              labelledBy={"Select"}
            />
          </div>
          <div className='w-10/12 m-2 flex flex-col'>
            <label  >Anticougualent</label>
            <MultiSelect
              options={anticougualentList}
              value={anticougualent}
              onChange={(selectedOptions) => setAnticougualent(selectedOptions)}
              labelledBy={"Select"}
            />
          </div>
          <div className='w-10/12 m-2 flex flex-col'>
            <label  >Diabites drugs</label>
            <MultiSelect
              options={diabetes_drugs}
              value={diabites}
              onChange={(selectedOptions) => setDiabites(selectedOptions)}
              labelledBy={"Select"}
            />
          </div>

          <div className='w-10/12 m-2 flex flex-col'>
            <label  >Amputaion</label>
            <MultiSelect
              options={amputaionList}
              value={amputation}
              onChange={(selectedOptions) => setAmputation(selectedOptions)}
              labelledBy={"Select"}
            />
          </div>
          <div className='w-10/12 m-2 flex flex-row justify-between items-center ' >
            <label className={` text-3xl w-1/3 font-medium leading-normal m-2 break-words `}>HTN</label>
            <button className={`bg-gray-300 h-8 rounded p-1 ${htn === true ? 'bg-green-200' : ''}`} onClick={() => setHtn(true)}>Exists</button>
            <button className={`bg-gray-300 h-8 rounded p-1 ${htn === false ? 'bg-green-200' : ''}`} onClick={() => setHtn(false)}>Absent</button>
          </div>
          <div className='w-10/12 m-2 flex flex-row justify-between items-center  ' >
            <label className={` text-3xl  w-1/3 font-medium leading-normal m-2 break-words `}>Renal impair</label>
            <button className={`bg-gray-300 h-8 rounded p-1 ${renal === true ? 'bg-green-200' : ''}`} onClick={() => setRenal(true)}>Exists</button>
            <button className={`bg-gray-300 h-8 rounded p-1 ${renal === false ? 'bg-green-200' : ''}`} onClick={() => setRenal(false)}>Absent</button>      </div>
          <div className='w-10/12 m-2 flex flex-row justify-between items-center  ' >
            <label className={` text-3xl  w-1/3 font-medium leading-normal m-2 break-words `}>smoking</label>
            <button className={`bg-gray-300 h-8 rounded p-1 ${smoking === true ? 'bg-green-200' : ''}`} onClick={() => setSmoking(true)}>Exists</button>
            <button className={`bg-gray-300 h-8 rounded p-1 ${smoking === false ? 'bg-green-200' : ''}`} onClick={() => setSmoking(false)}>Absent</button>      </div>
          <div className='w-10/12 m-2 flex flex-row justify-between items-center ' >
            <label className={` text-3xl  w-1/3 font-medium leading-normal m-2 break-words`}>Hyperlipemia</label>
            <button className={`bg-gray-300 h-8 rounded p-1 ${hyper === true ? 'bg-green-200' : ''}`} onClick={() => setHyper(true)}>Exists</button>
            <button className={`bg-gray-300 h-8 rounded p-1 ${hyper === false ? 'bg-green-200' : ''}`} onClick={() => setHyper(false)}>Absent</button>     </div>
          <div className='w-10/12 m-2 flex flex-row  justify-between items-center  ' >
            <label className={` text-3xl  w-1/3 font-medium leading-normal m-2 break-words `}> Disabled</label>
            <button className={`bg-gray-300 h-8 rounded p-1 ${disabled === true ? 'bg-green-200' : ''}`} onClick={() => setDisabled(true)}>Exists</button>
            <button className={`bg-gray-300 h-8 rounded p-1 ${disabled === false ? 'bg-green-200' : ''}`} onClick={() => setDisabled(false)}>Absent</button>     </div>
          <div className='w-10/12 m-2 flex flex-row justify-between items-center '>
            <label className={` text-3xl  w-1/3 font-medium leading-normal m-2 break-words`}> Allergic</label>
            <button className={`bg-gray-300 h-8 rounded p-1 ${allergic === true ? 'bg-green-200' : ''}`} onClick={() => setAllergic(true)}>Exists</button>
            <button className={`bg-gray-300 h-8 rounded p-1 ${allergic === false ? 'bg-green-200' : ''}`} onClick={() => setAllergic(false)}>Absent</button>    </div>
        </div>

      </div>
      <h5 className="title pt-2 text-lg font-semibold text-gray-800">General</h5>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-3">

        {/* Min Year */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Min Year</label>
          <input
            type="number"
            value={minYear || ""}
            onChange={(e) => setMinYear(e.target.value)}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Max Year */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Max Year</label>
          <input
            type="number"
            value={maxYear || ""}
            onChange={(e) => setMaxYear(e.target.value)}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Min Birth Year */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Min Birth Year</label>
          <input
            type="number"
            value={minBirthYear || ""}
            onChange={(e) => setMinBirthYear(e.target.value)}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Max Birth Year */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Max Birth Year</label>
          <input
            type="number"
            value={maxBirthYear || ""}
            onChange={(e) => setMaxBirthYear(e.target.value)}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Months */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Months</label>
          <select
            multiple
            onChange={(e) =>
              setMonths([...e.target.selectedOptions].map(option => option.value))
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            {[
              'January', 'February', 'March', 'April', 'May', 'June',
              'July', 'August', 'September', 'October', 'November', 'December'
            ].map((month, i) => (
              <option key={month} value={i + 1}>{month}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Gender */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
        <div className="flex space-x-2">
          <button
            type="button"
            onClick={() => setGender(gender === true ? null : true)}
            className={`w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm transition-colors
        ${gender === true ? 'bg-green-200 border-green-400' : 'border-gray-300 hover:bg-gray-100'}`}
          >
            Male
          </button>
          <button
            type="button"
            onClick={() => setGender(gender === false ? null : false)}
            className={`w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm transition-colors
        ${gender === false ? 'bg-green-200 border-green-400' : 'border-gray-300 hover:bg-gray-100'}`}
          >
            Female
          </button>
        </div>
      </div>

      <button onClick={handleSubmit} className=' w-48 h-12 transition-all duration-500 block mt-5 m-auto px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700'>Search</button>
      <PatientsTable />
    </div>
  );
}

export default SearchPage;