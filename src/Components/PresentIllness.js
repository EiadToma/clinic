import { useState,useEffect } from 'react'
import {useDispatch ,useSelector} from 'react-redux'
import { updatePresent,updatePhotos } from '../redux/FaqSlice'
import SecondPhoto from './SecondPhoto'
import axios from 'axios'
const PresentIllness = () => {
  const [Lists,setLists]=useState('')
  const dispatch = useDispatch()
  const poss = useSelector(state=>state.faq?.present_illness.lesion.positions1)

  const selecteHandel=(e)=>{
    const id =  e.nativeEvent.srcElement.id
    if(poss.find(item=>item==id))
    dispatch(updatePresent({fieldName:'lesion',nestedField:'positions1',value:poss.filter(item=>item!==id)}))
    else
    dispatch(updatePresent({fieldName:'lesion',nestedField:'positions1',value:[...poss,id]}))
    }
    console.log(Lists)
  const pic2 = useSelector(state=>state.faq?.present_illness.lesion.position)
  const mino = useSelector(state=>state.faq?.present_illness.nervous_status.mino.checked)
  const all = useSelector(state=>state.faq?.present_illness.nervous_status.all.checked)
  const nero = useSelector(state=>state.faq?.present_illness.nervous_status.neuro.checked)
  const exists= useSelector(state=>state.faq?.present_illness.infection.exists)
  const clinical=useSelector(state=>state.faq?.present_illness.infection.clinical_classification)
  const data= useSelector(state=>state.faq)
  console.log(data)
  const disabilities=['walked befor and now','used to walk but not now','has not been walking for a long time','disabled patient','has not walked for while and now he is walking']
  const infectionOp=['local swelling or induration','Erythema > 0.5 but < 2 cm around the wound','local tenderness or pain','local increased warmth','purulent discharge'
  ,'Erthema extending >=2 cm from the wound margin','tissue deeper than skin and subcutaneous tisses',
  'temperature > 38c or <36c','heart rate > 90 beats/min','respiratory rate > 20 breaths/min','white blood cell count > 12000/mm²']

useEffect(()=>{
  axios.get('https://clinic-backend-0lcl.onrender.com/values/faq').then(res=>setLists(res.data.data))
},[])

return (
  <div className='form-container b-r'  style={{width:"49%",marginBottom:"20px"}}>
    <h3 className='title'>PresentIlness</h3>
    <span className='line'></span>
    <div className='form-group flex'>
      <label className='label'> Type (s) of the main lesion</label>
      <select onChange={e=>dispatch(updatePresent({fieldName:'lesion',nestedField:'main_id',value:e.target.value}))} className='form-input' style={{padding:"10px"}}>
     {Lists.lesions?.map(item=>(<option key={item.id} value={item.id}>{item.type}</option>))}
      </select>
    </div>
    <div className='form-group flex'>
      <label className='label'> Secondary Lesion</label>
      <select onChange={e=>dispatch(updatePresent({fieldName:'lesion',nestedField:'secondary_id',value:e.target.value}))} className='form-input' style={{padding:"10px"}}>
      <option value="" disabled selected style={{color:"darkgray",opacity:'0.5'}}>Nothing selected</option>
      {Lists.lesions?.map(item=>(<option key={item.id} value={item.id}>{item.type}</option>))}
      </select>
    </div>
    <div className='form-group flex'>
      <label className='label'> Notes</label>
      <input onChange={e=>dispatch(updatePresent({fieldName:'notes',value:e.target.value}))} className='form-input'/>
    </div>
    <div className='form-group flex' >
      <label className='label'> Position of the lesion</label>
      <div className='image-div'>
<div className='area' id='1' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='1')?{width:"50px",height:"50px",backgroundColor:'red',left:"30%",top:"7%"}:{width:"50px",height:"50px",left:"30%",top:"7%"}}></div>
<div className='area' id='2' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='2')?{width:"50px",height:"50px",backgroundColor:'red',left:"30%",top:"15%"}:{width:"50px",height:"50px",left:"30%",top:"15%"}}></div>
<div className='area' id='3' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='3')?{width:"50px",height:"50px",backgroundColor:'red',left:"20%",top:"15%"}:{width:"50px",height:"50px",left:"20%",top:"15%"}}></div>
<div className='area' id='4' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='4')?{width:"20px",height:"20px",backgroundColor:'red',left:"10%",top:"22%"}:{width:"20px",height:"20px",left:"10%",top:"22%"}}></div>
<div className='area' id='5' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='5')?{width:"20px",height:"20px",backgroundColor:'red',left:"7%",top:"22%"}:{width:"20px",height:"20px",left:"7%",top:"22%"}}></div>
<div className='area' id='6' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='6')?{width:"20px",height:"20px",backgroundColor:'red',left:"5%",top:"21%"}:{width:"20px",height:"20px",left:"5%",top:"21%"}}></div>
<div className='area' id='7' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='7')?{width:"20px",height:"20px",backgroundColor:'red',left:"4%",top:"19%"}:{width:"20px",height:"20px",left:"4%",top:"19%"}}></div>
<div className='area' id='8' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='8')?{width:"20px",height:"20px",backgroundColor:'red',left:"3%",top:"16%"}:{width:"20px",height:"20px",left:"3%",top:"16%"}}></div>
{/*  */}
<div className='area' id='9' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='9')?{width:"50px",height:"50px",backgroundColor:'red',left:"30%",top:"30%"}:{width:"50px",height:"50px",left:"30%",top:"30%"}}></div>
<div className='area' id='10' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='10')?{width:"50px",height:"50px",backgroundColor:'red',left:"32%",top:"40%"}:{width:"50px",height:"50px",left:"32%",top:"40%"}}></div>
<div className='area' id='11' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='11')?{width:"50px",height:"50px",backgroundColor:'red',left:"22%",top:"38%"}:{width:"50px",height:"50px",left:"22%",top:"38%"}}></div>
<div className='area' id='12' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='12')?{width:"50px",height:"50px",backgroundColor:'red',left:"13%",top:"41%"}:{width:"50px",height:"50px",left:"13%",top:"41%"}}></div>
<div className='area' id='13' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='13')?{width:"30px",height:"30px",backgroundColor:'red',left:"3%",top:"45%"}:{width:"30px",height:"30px",left:"3%",top:"45%"}}></div>
{/*  */}
<div className='area' id='14' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='14')?{width:"50px",height:"50px",backgroundColor:'red',left:"9%",top:"55%"}:{width:"50px",height:"50px",left:"9%",top:"55%"}}></div>
<div className='area' id='15' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='15')?{width:"50px",height:"50px",backgroundColor:'red',left:"6%",top:"63%"}:{width:"50px",height:"50px",left:"6%",top:"63%"}}></div>
<div className='area' id='16' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='16')?{width:"50px",height:"50px",backgroundColor:'red',left:"16%",top:"64%"}:{width:"50px",height:"50px",left:"16%",top:"64%"}}></div>
<div className='area' id='17' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='17')?{width:"50px",height:"50px",backgroundColor:'red',left:"25%",top:"67%"}:{width:"50px",height:"50px",left:"25%",top:"67%"}}></div>
<div className='area' id='18' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='18')?{width:"30px",height:"30px",backgroundColor:'red',left:"32%",top:"70%"}:{width:"30px",height:"30px",left:"32%",top:"70%"}}></div>
{/*  */}
<div className='area' id='19' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='19')?{width:"50px",height:"50px",backgroundColor:'red',left:"9%",top:"80%"}:{width:"50px",height:"50px",left:"9%",top:"80%"}}></div>
<div className='area' id='20' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='20')?{width:"50px",height:"50px",backgroundColor:'red',left:"6%",top:"89%"}:{width:"50px",height:"50px",left:"6%",top:"89%"}}></div>
<div className='area' id='21' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='21')?{width:"50px",height:"50px",backgroundColor:'red',left:"16%",top:"88%"}:{width:"50px",height:"50px",left:"16%",top:"88%"}}></div>
<div className='area' id='22' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='22')?{width:"50px",height:"50px",backgroundColor:'red',left:"25%",top:"91%"}:{width:"50px",height:"50px",left:"25%",top:"91%"}}></div>
<div className='area' id='23' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='23')?{width:"30px",height:"30px",backgroundColor:'red',left:"35%",top:"94%"}:{width:"30px",height:"30px",left:"35%",top:"94%"}}></div>
{/*  */}
<div className='area' id='24' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='24')?{width:"60px",height:"60px",backgroundColor:'red',left:"60%",top:"8%"}:{width:"60px",height:"60px",left:"60%",top:"8%"}}></div>
<div className='area' id='25' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='25')?{width:"80px",height:"80px",backgroundColor:'red',left:"55%",top:"17%"}:{width:"80px",height:"80px",left:"55%",top:"17%"}}></div>
<div className='area' id='26' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='26')?{width:"20px",height:"20px",backgroundColor:'red',left:"59%",top:"33%"}:{width:"20px",height:"20px",left:"59%",top:"33%"}}></div>
<div className='area' id='27' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='27')?{width:"20px",height:"20px",backgroundColor:'red',left:"55%",top:"32%"}:{width:"20px",height:"20px",left:"55%",top:"32%"}}></div>
<div className='area' id='28' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='28')?{width:"20px",height:"20px",backgroundColor:'red',left:"53%",top:"30%"}:{width:"20px",height:"20px",left:"53%",top:"30%"}}></div>
<div className='area' id='29' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='29')?{width:"20px",height:"20px",backgroundColor:'red',left:"52%",top:"27%"}:{width:"20px",height:"20px",left:"52%",top:"27%"}}></div>
<div className='area' id='30' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='30')?{width:"20px",height:"20px",backgroundColor:'red',left:"51%",top:"24%"}:{width:"20px",height:"20px",left:"51%",top:"24%"}}></div>
{/*  */}
<div className='area' id='31' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='31')?{width:"60px",height:"60px",backgroundColor:'red',left:"80%",top:"8%"}:{width:"60px",height:"60px",left:"80%",top:"8%"}}></div>
<div className='area' id='32' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='32')?{width:"80px",height:"80px",backgroundColor:'red',left:"82%",top:"17%"}:{width:"80px",height:"80px",left:"82%",top:"17%"}}></div>
<div className='area' id='33' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='33')?{width:"20px",height:"20px",backgroundColor:'red',left:"88%",top:"34%"}:{width:"20px",height:"20px",left:"88%",top:"34%"}}></div>
<div className='area' id='34' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='34')?{width:"20px",height:"20px",backgroundColor:'red',left:"91%",top:"33%"}:{width:"20px",height:"20px",left:"91%",top:"33%"}}></div>
<div className='area' id='35' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='35')?{width:"20px",height:"20px",backgroundColor:'red',left:"93%",top:"31%"}:{width:"20px",height:"20px",left:"93%",top:"31%"}}></div>
<div className='area' id='36' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='36')?{width:"20px",height:"20px",backgroundColor:'red',left:"94%",top:"28%"}:{width:"20px",height:"20px",left:"94%",top:"28%"}}></div>
<div className='area' id='37' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='37')?{width:"20px",height:"20px",backgroundColor:'red',left:"95%",top:"25%"}:{width:"20px",height:"20px",left:"95%",top:"25%"}}></div>
{/*  */}
<div className='area' id='38' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='38')?{width:"60px",height:"60px",backgroundColor:'red',left:"82%",top:"45%"}:{width:"60px",height:"60px",left:"82%",top:"45%"}}></div>
<div className='area' id='39' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='39')?{width:"20px",height:"20px",backgroundColor:'red',left:"81%",top:"59%"}:{width:"20px",height:"20px",left:"81%",top:"59%"}}></div>
<div className='area' id='40' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='40')?{width:"20px",height:"20px",backgroundColor:'red',left:"87%",top:"58%"}:{width:"20px",height:"20px",left:"87%",top:"58%"}}></div>
<div className='area' id='41' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='41')?{width:"20px",height:"20px",backgroundColor:'red',left:"90%",top:"58%"}:{width:"20px",height:"20px",left:"90%",top:"58%"}}></div>
<div className='area'id='42' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='42')?{width:"20px",height:"20px",backgroundColor:'red',left:"93%",top:"58%"}:{width:"20px",height:"20px",left:"93%",top:"58%"}}></div>
<div className='area'id='43' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='43')?{width:"20px",height:"20px",backgroundColor:'red',left:"96%",top:"57%"}:{width:"20px",height:"20px",left:"96%",top:"57%"}}></div>
{/*  */}
<div className='area'id='44' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='44')?{width:"60px",height:"60px",backgroundColor:'red',left:"58%",top:"45%"}:{width:"60px",height:"60px",left:"58%",top:"45%"}}></div>
<div className='area'id='45' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='45')?{width:"20px",height:"20px",backgroundColor:'red',left:"51%",top:"56%"}:{width:"20px",height:"20px",left:"51%",top:"56%"}}></div>
<div className='area'id='46' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='46')?{width:"20px",height:"20px",backgroundColor:'red',left:"53%",top:"57%"}:{width:"20px",height:"20px",left:"53%",top:"57%"}}></div>
<div className='area'id='47' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='47')?{width:"20px",height:"20px",backgroundColor:'red',left:"56%",top:"58%"}:{width:"20px",height:"20px",left:"56%",top:"58%"}}></div>
<div className='area'id='48' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='48')?{width:"20px",height:"20px",backgroundColor:'red',left:"59%",top:"59%"}:{width:"20px",height:"20px",left:"59%",top:"59%"}}></div>
<div className='area'id='49' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='49')?{width:"20px",height:"20px",backgroundColor:'red',left:"65%",top:"59%"}:{width:"20px",height:"20px",left:"65%",top:"59%"}}></div>
{/*  */}
<div className='area'id='50' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='50')?{width:"60px",height:"60px",backgroundColor:'red',left:"54%",top:"79%"}:{width:"60px",height:"60px",left:"54%",top:"79%"}}></div>
<div className='area'id='51' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='51')?{width:"60px",height:"60px",backgroundColor:'red',left:"54%",top:"88%"}:{width:"60px",height:"60px",left:"54%",top:"88%"}}></div>
<div className='area'id='52' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='52')?{width:"20px",height:"20px",backgroundColor:'red',left:"52%",top:"75%"}:{width:"20px",height:"20px",left:"52%",top:"75%"}}></div>
<div className='area'id='53' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='53')?{width:"20px",height:"30px",backgroundColor:'red',left:"55.5%",top:"74%"}:{width:"20px",height:"30px",left:"55.5%",top:"74%"}}></div>
<div className='area'id='54' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='54')?{width:"20px",height:"30px",backgroundColor:'red',left:"59%",top:"74%"}:{width:"20px",height:"30px",left:"59%",top:"74%"}}></div>
<div className='area'id='55' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='55')?{width:"20px",height:"30px",backgroundColor:'red',left:"62%",top:"74%"}:{width:"20px",height:"30px",left:"62%",top:"74%"}}></div>
<div className='area'id='56' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='56')?{width:"20px",height:"20px",backgroundColor:'red',left:"65%",top:"75%"}:{width:"20px",height:"20px",left:"65%",top:"75%"}}></div>
{/*  */}
<div className='area'id='57' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='57')?{width:"60px",height:"60px",backgroundColor:'red',left:"86%",top:"79%"}:{width:"60px",height:"60px",left:"86%",top:"79%"}}></div>
<div className='area'id='58' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='58')?{width:"60px",height:"60px",backgroundColor:'red',left:"86%",top:"88%"}:{width:"60px",height:"60px",left:"86%",top:"88%"}}></div>
<div className='area'id='59' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='59')?{width:"20px",height:"20px",backgroundColor:'red',left:"81%",top:"75%"}:{width:"20px",height:"20px",left:"81%",top:"75%"}}></div>
<div className='area'id='60' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='60')?{width:"20px",height:"30px",backgroundColor:'red',left:"84%",top:"74%"}:{width:"20px",height:"30px",left:"84%",top:"74%"}}></div>
<div className='area'id='61' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='61')?{width:"20px",height:"30px",backgroundColor:'red',left:"88%",top:"74%"}:{width:"20px",height:"30px",left:"88%",top:"74%"}}></div>
<div className='area'id='62' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='62')?{width:"20px",height:"30px",backgroundColor:'red',left:"91%",top:"74%"}:{width:"20px",height:"30px",left:"91%",top:"74%"}}></div>
<div className='area'id='63' onClick={e=>selecteHandel(e)} style={poss.find(i=>i=='63')?{width:"20px",height:"20px",backgroundColor:'red',left:"94%",top:"75%"}:{width:"20px",height:"20px",left:"94%",top:"75%"}}></div>
      </div>
<SecondPhoto/>
    </div>
    <div className='form-group flex '>
      <label className='label'>Suspected Direct Cause (s) of the lesion</label>
      <select onChange={e=>dispatch(updatePresent({fieldName:'lesion',nestedField:'cause_id',value:e.target.value}))} className='form-input'>
      <option value="" disabled selected style={{color:"darkgray",opacity:'0.5'}}>Nothing selected</option>
      {Lists.causes?.map(item=>(<option value={item.id}>{item.cause}</option>))}
      </select>
    </div>
    <div className='form-group flex'>
      <label className='label'> Deformity</label>
      <div className='flex' style={{flexDirection:"row"}}>
      <select onChange={e=>dispatch(updatePresent({fieldName:'deformity',nestedField:'deformity_id',value:e.target.value}))} className='form-select'>
      <option value="" disabled selected style={{color:"darkgray",opacity:'0.5'}}>Nothing selected</option>
      {Lists.deformities?.map(item=>(<option value={item.id}>{item.type}</option>))}

      </select>
      <select onChange={e=>dispatch(updatePresent({fieldName:'deformity',nestedField:'leg',value:e.target.value}))} className='form-select'>
      <option value="" disabled selected style={{color:"darkgray",opacity:'0.5'}}>Nothing selected</option>
        <option value='l'>left</option>
        <option value='r'>right</option>
      </select>
      </div>
      </div>
      <div>
        <h5 className='title'>Vascular status</h5>
        {/* need to fix table style */}
        <table className='table'>
          <thead>
          <tr className='table-row'>
              <th className='table-head'></th>
              <th className='table-head'>Left Leg</th>
              <th className='table-head'>Right Leg</th>
        </tr>
        </thead>
        <tbody>
        <tr className='table-row'>
          <td className='table-head'>Posterior tibial pulse</td>
          <td className='table-head'><input onChange={e=>dispatch(updatePresent({fieldName:'vascular_status',nestedField:'lp',value:e.target.value}))} className='form-input'/></td>
          <td className='table-head'><input onChange={e=>dispatch(updatePresent({fieldName:'vascular_status',nestedField:'rp',value:e.target.value}))} className='form-input'/></td>
          </tr>
          <tr  className='table-row'>
          <td className='table-head'>Dorsalis pedias pulse</td>
          <td className='table-head'><input onChange={e=>dispatch(updatePresent({fieldName:'vascular_status',nestedField:'ld',value:e.target.value}))} className='form-input'/></td>
          <td className='table-head'><input onChange={e=>dispatch(updatePresent({fieldName:'vascular_status',nestedField:'rd',value:e.target.value}))} className='form-input'/></td>
          </tr>
          <tr  className='table-row'>
          <td className='table-head'>ABI</td>
          <td className='table-head'><input onChange={e=>dispatch(updatePresent({fieldName:'vascular_status',nestedField:'labi',value:e.target.value}))} className='form-input'/></td>
          <td className='table-head'><input onChange={e=>dispatch(updatePresent({fieldName:'vascular_status',nestedField:'rabi',value:e.target.value}))} className='form-input'/></td>
          </tr>
          </tbody>
            </table>

      </div>
      <span className='line' style={{backgroundColor:"blue"}}></span>
    <div className='form-group flex'>
      <label className='label'> Attach the current photo of the lesion</label>
      <input onChange={e=>dispatch(updatePhotos({fieldName:'present_illness_current',value:e.target.files[0]}))}  className='form-input' type='file'/>
    </div>
    <div className='form-group flex'>
      <label className='label'> Attach the X-ray of the foot</label>
      <input onChange={e=>dispatch(updatePhotos({fieldName:'present_illness_x_ray',value:e.target.files[0]}))} className='form-input' type='file'/>
    </div>
    <div className='form-group flex'>
      <label className='label'>Attachment of the previous culture and sensitivity</label>
      <input onChange={e=>dispatch(updatePhotos({fieldName:'present_illness_previous',value:e.target.files[0]}))} className='form-input' type='file'/>
    </div>
    <div>
      <h5 className='title'>Nervous status</h5>
      <div className='nervous'>
        <div className='nervous-item'>
        <label>Minofilament test</label>
        <input type='checkbox' onChange={e=>dispatch(updatePresent({fieldName:'nervous_status',nestedField:'mino',doubleNested:'checked',value:!mino}))}/>
        <select onChange={e=>dispatch(updatePresent({fieldName:'nervous_status',nestedField:'mino',doubleNested:'text',value:e.target.value}))} className={mino?'form-list':'hidden'}>
        <option>good</option>
        <option>bad</option>
      </select>
        </div>
        <div className='nervous-item'>
        <label>neurothesiometer</label>
        <input type='checkbox' onChange={e=>dispatch(updatePresent({fieldName:'nervous_status',nestedField:'neuro',doubleNested:'checked',value:!nero}))}/>
        <select onChange={e=>dispatch(updatePresent({fieldName:'nervous_status',nestedField:'neuro',doubleNested:'text',value:e.target.value}))} className={nero?'form-list':'hidden'}>
        <option>Normal</option>
        <option>Mild</option>
        <option>Moderate</option>
        <option>Severe</option>
        <option>neuropathy</option>

      </select>
        </div>
        <div className='nervous-item'>
        <label>allesthesia</label>
        <input type='checkbox' onChange={e=>dispatch(updatePresent({fieldName:'nervous_status',nestedField:'all',doubleNested:'checked',value:!all}))}/>
        <select onChange={e=>dispatch(updatePresent({fieldName:'nervous_status',nestedField:'all',doubleNested:'text',value:e.target.value}))} className={all?'form-list':'hidden'} >
        <option>test</option>
        <option>test2</option>
      </select>
        </div>
      </div>
    </div>
    <div className='form-group flex' style={{justifyContent:"space-between",flexDirection:"row"}}>
      <label className='label'>Infection</label>
      <input type='checkbox' style={{scale:"1.5"}} onChange={e=>dispatch(updatePresent({fieldName:'infection',nestedField:'exists',value:!exists}))} />
      </div>
      <div className='form-group flex' >
      <label className='label'> Position of the Infection</label>
      <div className='flex' style={{flexDirection:"row"}} >
      <select  className='form-select' onChange={e=>dispatch(updatePresent({fieldName:'infection',nestedField:'leg',value:e.target.value}))}>
      <option value="" disabled selected style={{color:"darkgray",opacity:'0.5'}}>Nothing selected</option>
        <option value='l'>Left</option>
        <option value='r'>Right</option>
      </select>
      <select className='form-select' onChange={e=>dispatch(updatePresent({fieldName:'infection',nestedField:'finger',value:e.target.value}))}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      </div>
    </div>
      <div className={'form-group flex'}>
    <label className='form-label'>Infection IWGDF Classification</label>
      <select className='form-input' onChange={e=>dispatch(updatePresent({fieldName:'infection',nestedField:'iwgdf_classification',value:e.target.value}))}  >
      <option value="" disabled selected style={{color:"darkgray",opacity:'0.5'}}>Nothing selected</option>
        <option value={1}>Uninfected</option>
        <option value={2}>Mild</option>
        <option value={3}>Moderate</option>
        <option value={4}>Moderate (infection involving bone)</option>
        <option value={5}>Severe</option>
        <option value={6}>Severe (infection involving bone)</option>
   </select>
      </div>
      <div className={'form-group flex'}>
        <label className='form-label'>Clinical Classification of infection</label>
      <select className='form-input' onChange={e=>dispatch(updatePresent({fieldName:'infection',nestedField:'clinical_classification',value:[...clinical,e.target.value]}))} >
      <option value="" disabled selected style={{color:"darkgray",opacity:'0.5'}}>Nothing selected</option>
      {infectionOp.map(item=>(<option key={item} value={[item]}>{item}</option>))}
      </select>
      </div>

    <span className='line'></span>

    <h5 className='title'> SinBad Classification</h5>
    <div className='form-group flex'>
      <label className='label'>Ischemia</label>
      <select className='form-input' onChange={e=>dispatch(updatePresent({fieldName:'sinbad',nestedField:'ischemia',value:e.target.value}))}>
      <option value="" disabled selected style={{color:"darkgray",opacity:'0.5'}}>Nothing selected</option>
        <option value={false}>bedal blood flow intact:at least one pulse palpable</option>
        <option value={true}>Clinical evidence of reduced pedal bloody flow</option>
      </select>
      </div>
      <div className='form-group flex'>
      <label className='label'>Neropathy</label>
      <select className='form-input' onChange={e=>dispatch(updatePresent({fieldName:'sinbad',nestedField:'neropath',value:e.target.value}))}>
      <option value="" disabled selected style={{color:"darkgray",opacity:'0.5'}}>Nothing selected</option>
        <option value={false}>Protective sensation intact</option>
        <option value={true}>Protective sensation lost</option>
      </select>
      </div>
    <div className='form-group flex'>
      <label className='label'>bacterial Infection</label>
      <select className='form-input' onChange={e=>dispatch(updatePresent({fieldName:'sinbad',nestedField:'bacterial_infection',value:e.target.value}))}>
      <option value="" disabled selected style={{color:"darkgray",opacity:'0.5'}}>Nothing selected</option>
        <option value={false}>none</option>
        <option value={true}>present</option>
      </select>
    </div>
    <div className='form-group flex'>
      <label className='label'>Area ulcer</label>
      <select className='form-input' onChange={e=>dispatch(updatePresent({fieldName:'sinbad',nestedField:'area_ulcer',value:e.target.value}))}>
      <option value="" disabled selected style={{color:"darkgray",opacity:'0.5'}}>Nothing selected</option>
        <option value={false}>test</option>
        <option value={true}>test2</option>
      </select>
    </div> 
    <div className='form-group flex'>
      <label className='label'>Depth</label>
      <select className='form-input' onChange={e=>dispatch(updatePresent({fieldName:'sinbad',nestedField:'depth',value:e.target.value}))}>
      <option value="" disabled selected style={{color:"darkgray",opacity:'0.5'}}>Nothing selected</option>
        <option value={false}>test</option>
        <option value={true}>test2</option>
      </select>
    </div> 
    <span className='line'></span>

    <div className='form-group flex'>
      <label className='label'>Gate Analysis</label>
      <input  className='form-input' onChange={e=>dispatch(updatePresent({fieldName:'gate_analysis',value:e.target.value}))} type='text'/>
    </div>
    <div className='form-group flex'>
      <label className='label'>Disability</label>
      <select className='form-input' onChange={e=>dispatch(updatePresent({fieldName:'disability',value:e.target.value}))}>
      <option value="" disabled selected style={{color:"darkgray",opacity:'0.5'}}>Nothing selected</option>
      {disabilities.map(item=>(<option key={item}>{item}</option>))}
      </select>
    </div> 

 </div>
  )
}

export default PresentIllness