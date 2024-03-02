import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { updateManage } from '../redux/FaqSlice'
const Management = () => {
    const dispatch = useDispatch()
    const lab = useSelector(state=>state.faq?.managment.labratory_test_ids)
    const labtests=useSelector(state=>state.faq.faqData?.data.lab_tests)
  return (
<div className='form-container b-r'>
<h3 className='title' style={{marginTop:"0px"}}>The Plan of managment</h3>
    <span className='line'></span>
        <div className='form-group flex'>
            <label className='label'>Status</label>
                <select className='form-input' onChange={e=>dispatch(updateManage({fieldName:'status',value:e.target.value}))}>
                    <option>Observation</option>
                    <option>Surgery</option>
                    <option>Hospitalization</option>
                    <option>The patient refused</option>
                </select>
        </div>
        <div className='form-group flex' >
            <label  className='label'>The Technique : </label>
            <div style={{justifyContent:"space-between",display:"flex"}}>
            <input  className='form-input' style={{width:"60%"}} onChange={e=>dispatch(updateManage({fieldName:'technique',nestedField:'text',value:e.target.value}))}/>
            <select  className='form-input' onChange={e=>dispatch(updateManage({fieldName:'technique',nestedField:'tech',value:e.target.value}))}>
                <option>light dressing</option>
                <option>bulky dressing</option>
                <option>Iva Insole</option>
                <option>stabilizing joints</option>
            </select>
            </div>
        </div>
        <div className='form-group flex'>
            <label  className='label'>Next visite after</label>
            <input type='date' className='form-input' onChange={e=>dispatch(updateManage({fieldName:'next_visit',value:e.target.value}))}/>
        </div>
        <div className='form-group flex'>
            <label  className='label'>Notes</label>
            <input className='form-input' onChange={e=>dispatch(updateManage({fieldName:'notes',value:e.target.value}))}/>
        </div>
        <div className='form-group flex'>
            <label  className='label'>prescription IV</label>
            <input className='form-input' onChange={e=>dispatch(updateManage({fieldName:'prescription_iv',value:e.target.value}))}/>
        </div>
        <div className='form-group flex'>
            <label  className='label'>prescription PO</label>
            <input className='form-input' onChange={e=>dispatch(updateManage({fieldName:'prescription_po',value:e.target.value}))}/>
        </div>
        <div className='form-group flex'>
            <label  className='label'>The following laboratory tests are required</label>
            <select className='form-input' onChange={e=>dispatch(updateManage({fieldName:'labratory_test_ids',value:[...lab,e.target.value]}))}>
            {labtests?.map(item=>(<option value={item.id} key={item.id}>{item.type}</option>))}
            </select>
        </div>

</div>
  )
}

export default Management