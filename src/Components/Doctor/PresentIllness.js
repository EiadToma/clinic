import { useDispatch, useSelector } from 'react-redux'
import { updatePresent, updatePhotos } from '../../redux/FaqSlice'
import FaqModal from './FaqModal'
import { MultiSelect } from 'react-multi-select-component'
import { useState } from 'react'

const PresentIllness = () => {
  const [main, setMain] = useState([])
  const [second, setSecond] = useState([])
  const [deformaty1, setDeformaty1] = useState([])
  const [deformaty2, setDeformaty2] = useState([])
  const [causes, setcauses] = useState([])
  const [clinical_class, setClinical] = useState([])

  const dispatch = useDispatch()
  const mino = useSelector(state => state.faq?.present_illness.nervous_status.mino.checked)
  const thermo = useSelector(state => state.faq?.present_illness.nervous_status.thermo.checked)
  const nero = useSelector(state => state.faq?.present_illness.nervous_status.neuro.checked)
  const Lists = useSelector(state => state.faq.faqData?.data?.data)
  const exists = useSelector(state => state.faq?.present_illness.infection.exists)
  const result = useSelector(state => state.faq.present_illness.sinbad)
  const sum = parseInt(result.site) + parseInt(result.ischemia) + parseInt(result.area_ulcer) + parseInt(result.neropath) + parseInt(result.bacterial_infection) + parseInt(result.depth);
  const disabilities = ['walked befor and now', 'used to walk but not now', 'has not been walking for a long time', 'disabled patient', 'has not walked for while and now he is walking']
  const lesionList = Lists?.lesions?.map(item => ({ label: item.type, value: item.id })) || [];
  const deformities = Lists?.deformities?.map(item => ({ label: item.type, value: item.id })) || [];
  const clinicalList = Lists?.classificaations.map(item => ({ label: item.type, value: item.id })) || [];
  const causesList = Lists?.causes?.map(item => ({ label: item.cause, value: item.id })) || [];
  //add table choices lists to reduce rows

  return (
    <div className='form-container rounded w-1/2  mb-5'>
      <h3 className='title'>PresentIlness</h3>
      <hr className="my-4 border-t-2 border-gray-300" />
      <div className='w-10/12 m-2 flex flex-col'>
        <label className='label'> Type (s) of the main lesion</label>
        <MultiSelect
          options={lesionList}
          value={main}
          onChange={(selectedOptions) => {
            setMain(selectedOptions);
            dispatch(updatePresent({ fieldName: 'lesion', nestedField: 'main_id', value: selectedOptions.map(item => item.value) }))
          }}
          labelledBy={"Select"}
        />
      </div>
      <div className='w-10/12 m-2 flex flex-col'>
        <label className='label'> Secondary Lesion</label>
        <MultiSelect
          options={lesionList}
          value={second}
          onChange={(selectedOptions) => {
            setSecond(selectedOptions)
            dispatch(updatePresent({ fieldName: 'lesion', nestedField: 'secondary_id', value: selectedOptions.map(item => item.value) }))
          }}
          labelledBy={"Select"}
        />
      </div>
      <div className='w-10/12 m-2 flex flex-col'>
        <label className='label'> Notes</label>
        <input onChange={e => dispatch(updatePresent({ fieldName: 'notes', value: e.target.value }))} className='form-input' />
      </div>
      <div className='w-10/12 m-2 flex flex-col' >
        <label className='label'> Position of the lesion</label>
        <FaqModal data='first' />
        <FaqModal data='second' />
      </div>
      <div className='w-10/12 m-2 flex flex-col '>
        <label className='label'>Suspected Direct Cause (s) of the lesion</label>
        <MultiSelect
          options={causesList}
          value={causes}
          onChange={(selectedOptions) => {
            setcauses(selectedOptions)
            dispatch(updatePresent({ fieldName: 'lesion', nestedField: 'cause_id', value: selectedOptions.map(item => item.value) }))
          }}
          labelledBy={"Select"}
        />
      </div>
      <div className='w-10/12 m-2 flex flex-col'>
        <label className='label'> Deformities</label>
        <div className='flex flex-row  align-bottom ' >
          <MultiSelect
            options={deformities}
            value={deformaty1}
            onChange={(selectedOptions) => {
              setDeformaty1(selectedOptions)
              dispatch(updatePresent({ fieldName: 'deformity', nestedField: 'left', value: selectedOptions.map(item => item.value) }))
            }}
            labelledBy={"Select"}
            className='form-select'
          />
          <MultiSelect
            options={deformities}
            value={deformaty2}
            onChange={(selectedOptions) => {
              setDeformaty2(selectedOptions)
              dispatch(updatePresent({ fieldName: 'deformity', nestedField: 'right', value: selectedOptions.map(item => item.value) }))
            }}
            labelledBy={"Select"}
            className='form-select'
          />
        </div>
      </div>
      <div>
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
                <select className='rounded w-24 h-8' onChange={e => dispatch(updatePresent({ fieldName: 'vascular_status', nestedField: 'lpp', value: e.target.value }))}>
                  <option value="" disabled selected>Pulse</option>
                  <option >Normal</option>
                  <option >Weak</option>
                  <option>Abscent</option></select></td>
              <td className='w-24 py-2'>
                <select className='rounded  w-24 h-8' onChange={e => dispatch(updatePresent({ fieldName: 'vascular_status', nestedField: 'lpd', value: e.target.value }))}>                 <option value="" disabled selected>Doppler</option>
                  <option >Normal</option>
                  <option >Acceptable</option>
                  <option >Weak</option>
                  <option >Abscent</option>
                </select></td>
              <td className='w-24 py-2'>
                <select className='rounded  w-24 h-8' onChange={e => dispatch(updatePresent({ fieldName: 'vascular_status', nestedField: 'rpp', value: e.target.value }))}>
                  <option value="" disabled selected>Pulse</option>
                  <option >Normal</option>
                  <option >Weak</option>
                  <option >Abscent</option>
                </select>
              </td>
              <td className='w-24 py-2'>
                <select className='rounded   w-24 h-8' onChange={e => dispatch(updatePresent({ fieldName: 'vascular_status', nestedField: 'rpd', value: e.target.value }))}>
                  <option value="" disabled selected>Doppler</option>
                  <option >Normal</option>
                  <option>Acceptable</option>
                  <option >Weak</option>
                  <option >Abscent</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className='w-20 '>Dorsalis</td>
              <td className='w-24 py-2'>
                <select className='rounded  w-24 h-8' onChange={e => dispatch(updatePresent({ fieldName: 'vascular_status', nestedField: 'ldp', value: e.target.value }))}>
                  <option value="" disabled selected>Pulse</option>
                  <option >Normal</option>
                  <option >Weak</option>
                  <option >Abscent</option></select></td>
              <td className='w-24 py-2'>
                <select className='rounded  w-24 h-8' onChange={e => dispatch(updatePresent({ fieldName: 'vascular_status', nestedField: 'ldd', value: e.target.value }))}>
                  <option value="" disabled selected>Doppler</option>
                  <option >Normal</option>
                  <option >Acceptable</option>
                  <option >Weak</option>
                  <option >Abscent</option>
                </select>
              </td>
              <td className='w-24 py-2'>
                <select className='rounded  w-24 h-8' onChange={e => dispatch(updatePresent({ fieldName: 'vascular_status', nestedField: 'rdp', value: e.target.value }))}>
                  <option value="" disabled selected>Pulse</option>
                  <option >Normal</option>
                  <option >Weak</option>
                  <option >Abscent</option>
                </select>
              </td>
              <td className='w-24 py-2'>
                <select className='rounded   w-24 h-8' onChange={e => dispatch(updatePresent({ fieldName: 'vascular_status', nestedField: 'rdd', value: e.target.value }))}>
                  <option value="" disabled selected>Doppler</option>
                  <option >Normal</option>
                  <option >Acceptable</option>
                  <option >Weak</option>
                  <option >Abscent</option>
                </select>
              </td>
            </tr>
            <tr className=''>
              <td className='w-20 '>Abi</td>
              <td className='w-20 '><input type='number' onChange={e => dispatch(updatePresent({ fieldName: 'vascular_status', nestedField: 'labi', value: e.target.value }))} className='rounded w-20' /></td>
              <td></td>
              <td className='w-20 '><input type='number' onChange={e => dispatch(updatePresent({ fieldName: 'vascular_status', nestedField: 'rabi', value: e.target.value }))} className='rounded w-20' /></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr className="my-4 border-t-2 border-gray-300" />
      <div className='w-10/12 m-2 flex flex-col'>
        <label className='label'> Attach the current photo of the lesion</label>
        <input onChange={e => dispatch(updatePhotos({ fieldName: 'present_illness_current', value: e.target.files[0] }))} className='form-input' type='file' />
      </div>
      <div className='w-10/12 m-2 flex flex-col'>
        <label className='label'> Attach the X-ray of the foot</label>
        <input onChange={e => dispatch(updatePhotos({ fieldName: 'present_illness_x_ray', value: e.target.files[0] }))} className='form-input' type='file' />
      </div>
      <div className='w-10/12 m-2 flex flex-col'>
        <label className='label'>Attachment of the previous culture and sensitivity</label>
        <input onChange={e => dispatch(updatePhotos({ fieldName: 'present_illness_previous', value: e.target.files[0] }))} className='form-input' type='file' />
      </div>
      <div>
        <h5 className='title'>Nervous status</h5>
        <div className='nervous'>
          <div className='nervous-item'>
            <label className=' w-1/3'>Minofilament test</label>
            <input type='checkbox' onChange={e => dispatch(updatePresent({ fieldName: 'nervous_status', nestedField: 'mino', doubleNested: 'checked', value: !mino }))} />
            <select onChange={e => dispatch(updatePresent({ fieldName: 'nervous_status', nestedField: 'mino', doubleNested: 'text', value: e.target.value }))} className={mino ? 'w-1/3' : 'hidden'}>
            <option selected disabled>Nothing selected</option>
              <option>Normal</option>
              <option>Abnormal</option>
              <option>Abscent</option>
            </select>
          </div>
          <div className='nervous-item'>
            <label className=' w-1/3'>neurothesiometer</label>
            <input type='checkbox' onChange={e => dispatch(updatePresent({ fieldName: 'nervous_status', nestedField: 'neuro', doubleNested: 'checked', value: !nero }))} />
            <select onChange={e => dispatch(updatePresent({ fieldName: 'nervous_status', nestedField: 'neuro', doubleNested: 'text', value: e.target.value }))} className={nero ? 'w-1/3' : 'hidden'}>
            <option selected disabled>Nothing selected</option>
              <option>Normal</option>
              <option>Mild neuropathy </option>
              <option>Moderate neuropathy</option>
              <option>Severe neuropathy</option>
            </select>
          </div>
          <div className='nervous-item'>
            <label className=' w-1/3'>thermo meter</label>
            <input type='checkbox' onChange={e => dispatch(updatePresent({ fieldName: 'nervous_status', nestedField: 'thermo', doubleNested: 'checked', value: !thermo }))} />
            <select onChange={e => dispatch(updatePresent({ fieldName: 'nervous_status', nestedField: 'thermo', doubleNested: 'text', value: e.target.value }))} className={thermo ? 'w-1/3' : 'hidden'} >
            <option selected disabled>Nothing selected</option>
              <option>Normal</option>
              <option>Abnormal</option>
            </select>
          </div>
        </div>
      </div>
      <div className='w-10/12 m-2 flex flex-row justify-between' >
        <label className='label'>Infection</label>
        <input type='checkbox' style={{ scale: "1.5" }} onChange={e => dispatch(updatePresent({ fieldName: 'infection', nestedField: 'exists', value: !exists }))} />
      </div>
      <div className='w-10/12 m-2 flex flex-col' >
        <label className='label'> Position of the Infection</label>
        <div className='flex flex-row'  >
          <select className='form-select' onChange={e => dispatch(updatePresent({ fieldName: 'infection', nestedField: 'leg', value: e.target.value }))}>
            <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
            <option value='l'>Left</option>
            <option value='r'>Right</option>
          </select>
          <select className='form-select' onChange={e => dispatch(updatePresent({ fieldName: 'infection', nestedField: 'finger', value: e.target.value }))}>
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
        <select className='form-input' onChange={e => dispatch(updatePresent({ fieldName: 'infection', nestedField: 'iwgdf_classification', value: e.target.value }))}  >
          <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
          <option value={1}>Uninfected</option>
          <option value={2}>Mild</option>
          <option value={3}>Moderate</option>
          <option value={4}>Moderate (infection involving bone)</option>
          <option value={5}>Severe</option>
          <option value={6}>Severe (infection involving bone)</option>
        </select>
      </div>
      <div className={'w-10/12 m-2 flex flex-col'}>
        <label className='form-label'>Clinical Classification of infection</label>
        <MultiSelect
          options={clinicalList}
          value={clinical_class}
          onChange={(selectedOptions) => {
            setClinical(selectedOptions)
            dispatch(updatePresent({ fieldName: 'infection', nestedField: 'clinical_classification', value: selectedOptions.map(item => item.value) }))
          }}
          labelledBy={"Select"}
        />
      </div>

      <hr className="my-4 border-t-2 border-gray-300" />

      <h5 className='title'> SinBad Classification</h5>
      <div className='w-10/12 m-2 flex flex-col'>
        <label className='label'>Site</label>
        <select className='form-input' onChange={e => dispatch(updatePresent({ fieldName: 'sinbad', nestedField: 'site', value: e.target.value }))}>
          <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
          <option value={0}>ForeFoot</option>
          <option value={1}>MidFoot or ThindFoot</option>
        </select>
      </div>
      <div className='w-10/12 m-2 flex flex-col'>
        <label className='label'>Ischemia</label>
        <select className='form-input' onChange={e => dispatch(updatePresent({ fieldName: 'sinbad', nestedField: 'ischemia', value: e.target.value }))}>
          <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
          <option value={0}>bedal blood flow intact:at least one pulse palpable</option>
          <option value={1}>Clinical evidence of reduced pedal bloody flow</option>
        </select>
      </div>
      <div className='w-10/12 m-2 flex flex-col'>
        <label className='label'>Neropathy</label>
        <select className='form-input' onChange={e => dispatch(updatePresent({ fieldName: 'sinbad', nestedField: 'neropath', value: e.target.value }))}>
          <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
          <option value={0}>Protective sensation intact</option>
          <option value={1}>Protective sensation lost</option>
        </select>
      </div>
      <div className='w-10/12 m-2 flex flex-col'>
        <label className='label'>bacterial Infection</label>
        <select className='form-input' onChange={e => dispatch(updatePresent({ fieldName: 'sinbad', nestedField: 'bacterial_infection', value: e.target.value }))}>
          <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
          <option value={0}>none</option>
          <option value={1}>present</option>
        </select>
      </div>
      <div className='w-10/12 m-2 flex flex-col'>
        <label className='label'>Area ulcer</label>
        <select className='form-input' onChange={e => dispatch(updatePresent({ fieldName: 'sinbad', nestedField: 'area_ulcer', value: e.target.value }))}>
          <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
          <option value={0}>{'<'}1cm²</option>
          <option value={1}>{'>'}1cm²</option>
        </select>
      </div>
      <div className='w-10/12 m-2 flex flex-col'>
        <label className='label'>Depth</label>
        <select className='form-input' onChange={e => dispatch(updatePresent({ fieldName: 'sinbad', nestedField: 'depth', value: e.target.value }))}>
          <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
          <option value={0}>Skin,subcutaneous,tissue</option>
          <option value={1}>Ulcer reaching muscle - tendo or deeper</option>
        </select>
      </div>
      <div className='w-10/12 m-2 flex flex-col'>
        <label className='label'>Sum</label>
        <div className='form-input bg-white' type='text'>{sum}</div>
      </div>
      <hr className="my-4 border-t-2 border-gray-300" />

      <div className='w-10/12 m-2 flex flex-col'>
        <label className='label'>Gate Analysis</label>
        <input className='form-input' onChange={e => dispatch(updatePresent({ fieldName: 'gate_analysis', value: e.target.value }))} type='text' />
      </div>
      <div className='w-10/12 m-2 flex flex-col'>
        <label className='label'>Disability</label>
        <select className='form-input' onChange={e => dispatch(updatePresent({ fieldName: 'disability', value: e.target.value }))}>
          <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
          {disabilities.map(item => (<option key={item}>{item}</option>))}
        </select>
      </div>

    </div>
  )
}

export default PresentIllness