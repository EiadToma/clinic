import React from 'react'
import { updatePresent } from '../../redux/FaqSlice'
import { useSelector ,useDispatch} from 'react-redux'
const SecondPhoto = ({positions,mode}) => {
  if(positions===undefined || positions===null)
  positions=[]
  const dispatch = useDispatch()
    const selecteHandel=(e)=>{
      if (mode === 'show') return; 
        const id =  e.nativeEvent.srcElement.id
        if(positions.find(item=>item==id))
        dispatch(updatePresent({fieldName:'lesion',nestedField:'positions2',value:positions.filter(item=>item!==id)}))
        else
        dispatch(updatePresent({fieldName:'lesion',nestedField:'positions2',value:[...positions,id]}))
        }
  return (
<div className='image2'>
    <div className={`cub ${positions.find(i=>i=='1')?'bg-red-500':''}`} id='1' onClick={e=>selecteHandel(e)} style={{ left:"20%",top:"10%"}}></div>
    <div  className={`cub ${positions.find(i=>i=='2')?'bg-red-500':''}`}id='2' onClick={e=>selecteHandel(e)} style={{ left:"20%",top:"30%"}}></div>
    <div  className={`cub ${positions.find(i=>i=='3')?'bg-red-500':''}`}id='3' onClick={e=>selecteHandel(e)} style={{ left:"20%",top:"45%"}}></div> 
    <div  className={`cub ${positions.find(i=>i=='4')?'bg-red-500':''}`}id='4' onClick={e=>selecteHandel(e)} style={{ left:"20%",top:"60%"}}></div>
    <div  className={`cub ${positions.find(i=>i=='5')?'bg-red-500':''}`}id='5' onClick={e=>selecteHandel(e)} style={{ left:"20%",top:"74%"}}></div>
    <div  className={`cub ${positions.find(i=>i=='6')?'bg-red-500':''}`}id='6' onClick={e=>selecteHandel(e)} style={{ left:"40%",top:"10%"}}></div>
    <div  className={`cub ${positions.find(i=>i=='7')?'bg-red-500':''}`}id='7' onClick={e=>selecteHandel(e)} style={{ left:"40%",top:"30%"}}></div>
    <div  className={`cub ${positions.find(i=>i=='8')?'bg-red-500':''}`}id='8' onClick={e=>selecteHandel(e)} style={{ left:"40%",top:"45%"}}></div>
    <div  className={`cub ${positions.find(i=>i=='9')?'bg-red-500':''}`}id='9' onClick={e=>selecteHandel(e)} style={{ left:"40%",top:"60%"}}></div>
    <div  className={`cub ${positions.find(i=>i=='10')?'bg-red-500':''}`}id='10' onClick={e=>selecteHandel(e)} style={{ left:"40%",top:"74%"}}></div>
    <div  className={`cub ${positions.find(i=>i=='11')?'bg-red-500':''}`}id='11' onClick={e=>selecteHandel(e)} style={{ left:"60%",top:"10%"}}></div>
    <div  className={`cub ${positions.find(i=>i=='12')?'bg-red-500':''}`}id='12' onClick={e=>selecteHandel(e)} style={{ left:"60%",top:"30%"}}></div>
    <div  className={`cub ${positions.find(i=>i=='13')?'bg-red-500':''}`}id='13' onClick={e=>selecteHandel(e)} style={{ left:"60%",top:"45%"}}></div>
    <div  className={`cub ${positions.find(i=>i=='14')?'bg-red-500':''}`}id='14' onClick={e=>selecteHandel(e)} style={{ left:"60%",top:"60%"}}></div>
    <div  className={`cub ${positions.find(i=>i=='15')?'bg-red-500':''}`}id='15' onClick={e=>selecteHandel(e)} style={{ left:"60%",top:"74%"}}></div>
    <div  className={`cub ${positions.find(i=>i=='16')?'bg-red-500':''}`}id='16' onClick={e=>selecteHandel(e)} style={{ left:"85%",top:"10%"}}></div>
    <div  className={`cub ${positions.find(i=>i=='17')?'bg-red-500':''}`}id='17' onClick={e=>selecteHandel(e)} style={{ left:"85%",top:"30%"}}></div>
    <div  className={`cub ${positions.find(i=>i=='18')?'bg-red-500':''}`}id='18' onClick={e=>selecteHandel(e)} style={{ left:"85%",top:"45%"}}></div>
    <div  className={`cub ${positions.find(i=>i=='19')?'bg-red-500':''}`}id='19' onClick={e=>selecteHandel(e)} style={{ left:"85%",top:"60%"}}></div>
    <div  className={`cub ${positions.find(i=>i=='20')?'bg-red-500':''}`}id='20' onClick={e=>selecteHandel(e)} style={{ left:"85%",top:"74%"}}></div>
</div>
  )
}

export default SecondPhoto