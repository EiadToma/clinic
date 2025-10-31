import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateManage } from '../../redux/FaqSlice'
import { MultiSelect } from 'react-multi-select-component'
const Management = () => {
    const dispatch = useDispatch()
    const [labs,setLabs]=React.useState([])
    const labtests = useSelector(state => state.faq.faqData?.data.data?.lab_tests)
    const labelOptions = labtests?.map(item => ({ label: item.type, value: item.id })) || [];
    const IV = ['meropenem', 'flagyl', 'vancomycin', 'targocid', 'colistin', 'amikacin', 'rossflex', 'claforan', 'ciprofloxacine', 'clindamycin', 'linezolid']
    const PO = ['linezolid', 'clindamycin', 'flagyl', 'ofloxacin', 'levofloxacin', 'ceproz']
    return (
        <div className='form-container b-r'>
            <h3 className='title' style={{ marginTop: "0px" }}>The Plan of managment</h3>
            <hr className="my-4 border-t-2 border-gray-300" />
            <div className='w-10/12 m-2 flex flex-col'>
                <label className='label'>Status</label>
                <select className='form-input' onChange={e => dispatch(updateManage({ fieldName: 'status', value: e.target.value }))}>
                    <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
                    <option>Observation</option>
                    <option>Surgery</option>
                    <option>Hospitalization</option>
                    <option>The patient refused</option>
                </select>
            </div>
            <div className='w-10/12 m-2 flex flex-col' >
                <label className='label'>The Technique : </label>
                <div className='flex flex-row justify-between'>
                    <input className='form-input' style={{ width: "60%" }} onChange={e => dispatch(updateManage({ fieldName: 'technique', nestedField: 'text', value: e.target.value }))} />
                    <select className='form-input' onChange={e => dispatch(updateManage({ fieldName: 'technique', nestedField: 'tech', value: e.target.value }))}>
                        <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
                        <option>light dressing</option>
                        <option>bulky dressing</option>
                        <option>Iva Insole</option>
                        <option>stabilizing joints</option>
                    </select>
                </div>
            </div>
            <div className='w-10/12 m-2 flex flex-col'>
                <label className='label'>Next visite after</label>
                <input type='date' className='form-input' onChange={e => dispatch(updateManage({ fieldName: 'next_visit', value: e.target.value }))} />
            </div>
            <div className='w-10/12 m-2 flex flex-col'>
                <label className='label'>Notes</label>
                <input className='form-input' onChange={e => dispatch(updateManage({ fieldName: 'notes', value: e.target.value }))} />
            </div>
            <div className='w-10/12 m-2 flex flex-col'>
                <label className='label'>prescription IV</label>
                <select onChange={e => dispatch(updateManage({ fieldName: 'prescription_iv', value: e.target.value }))} className='form-input'>
                    <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
                    {IV.map(item => (<option key={item} >{item}</option>))}
                </select>
            </div>
            <div className='w-10/12 m-2 flex flex-col'>
                <label className='label'>prescription PO</label>
                <select onChange={e => dispatch(updateManage({ fieldName: 'prescription_po', value: e.target.value }))} className='form-input'>
                    <option value="" disabled selected style={{ color: "darkgray", opacity: '0.5' }}>Nothing selected</option>
                    {PO.map(item => (<option key={item} >{item}</option>))}
                </select>        </div>
            <div className='w-10/12 m-2 flex flex-col'>
                <label className='label'>The following laboratory tests are required</label>
                <MultiSelect
                          options={labelOptions}
                          value={labs}
                          onChange={selectedOptions => {
                            setLabs(selectedOptions);
                            dispatch(updateManage({ fieldName: 'labratory_test_ids', value: selectedOptions.map(item => item.value) }))}
                            
                        }
                          labelledBy={"Select"}
                />
            </div>

        </div>
    )
}

export default Management