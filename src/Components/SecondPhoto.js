import React from 'react'
import { updatePresent } from '../redux/FaqSlice'
import { useSelector ,useDispatch} from 'react-redux'
const SecondPhoto = () => {
    const positions = useSelector(state=>state.faq?.present_illness.lesion.positions2)
    const dispatch = useDispatch()
    const selecteHandel=(e)=>{
        const id =  e.nativeEvent.srcElement.id
        if(positions.find(item=>item==id))
        dispatch(updatePresent({fieldName:'lesion',nestedField:'positions2',value:positions.filter(item=>item!==id)}))
        else
        dispatch(updatePresent({fieldName:'lesion',nestedField:'positions2',value:[...positions,id]}))
        }
  return (
<div className='image2'>
    <div className='cub'id='1' onClick={e=>selecteHandel(e)} style={positions.find(i=>i=='1')?{backgroundColor:'red',left:"20%",top:"10%"}:{left:"20%",top:"10%"}}></div>
    <div className='cub'id='2' onClick={e=>selecteHandel(e)} style={positions.find(i=>i=='2')?{backgroundColor:'red',left:"20%",top:"30%"}:{left:"20%",top:"30%"}}></div>
    <div className='cub'id='3' onClick={e=>selecteHandel(e)} style={positions.find(i=>i=='3')?{backgroundColor:'red',left:"20%",top:"45%"}:{left:"20%",top:"45%"}}></div>
    <div className='cub'id='4' onClick={e=>selecteHandel(e)} style={positions.find(i=>i=='4')?{backgroundColor:'red',left:"20%",top:"60%"}:{left:"20%",top:"60%"}}></div>
    <div className='cub'id='5' onClick={e=>selecteHandel(e)} style={positions.find(i=>i=='5')?{backgroundColor:'red',left:"20%",top:"74%"}:{left:"20%",top:"74%"}}></div>
    <div className='cub'id='6' onClick={e=>selecteHandel(e)} style={positions.find(i=>i=='6')?{backgroundColor:'red',left:"40%",top:"10%"}:{left:"40%",top:"10%"}}></div>
    <div className='cub'id='7' onClick={e=>selecteHandel(e)} style={positions.find(i=>i=='7')?{backgroundColor:'red',left:"40%",top:"30%"}:{left:"40%",top:"30%"}}></div>
    <div className='cub'id='8' onClick={e=>selecteHandel(e)} style={positions.find(i=>i=='8')?{backgroundColor:'red',left:"40%",top:"45%"}:{left:"40%",top:"45%"}}></div>
    <div className='cub'id='9' onClick={e=>selecteHandel(e)} style={positions.find(i=>i=='9')?{backgroundColor:'red',left:"40%",top:"60%"}:{left:"40%",top:"60%"}}></div>
    <div className='cub'id='10' onClick={e=>selecteHandel(e)} style={positions.find(i=>i=='10')?{backgroundColor:'red',left:"40%",top:"74%"}:{left:"40%",top:"74%"}}></div>
    <div className='cub'id='11' onClick={e=>selecteHandel(e)} style={positions.find(i=>i=='11')?{backgroundColor:'red',left:"60%",top:"10%"}:{left:"60%",top:"10%"}}></div>
    <div className='cub'id='12' onClick={e=>selecteHandel(e)} style={positions.find(i=>i=='12')?{backgroundColor:'red',left:"60%",top:"30%"}:{left:"60%",top:"30%"}}></div>
    <div className='cub'id='13' onClick={e=>selecteHandel(e)} style={positions.find(i=>i=='13')?{backgroundColor:'red',left:"60%",top:"45%"}:{left:"60%",top:"45%"}}></div>
    <div className='cub'id='14' onClick={e=>selecteHandel(e)} style={positions.find(i=>i=='14')?{backgroundColor:'red',left:"60%",top:"60%"}:{left:"60%",top:"60%"}}></div>
    <div className='cub'id='15' onClick={e=>selecteHandel(e)} style={positions.find(i=>i=='15')?{backgroundColor:'red',left:"60%",top:"74%"}:{left:"60%",top:"74%"}}></div>
    <div className='cub'id='16' onClick={e=>selecteHandel(e)} style={positions.find(i=>i=='16')?{backgroundColor:'red',left:"85%",top:"10%"}:{left:"85%",top:"10%"}}></div>
    <div className='cub'id='17' onClick={e=>selecteHandel(e)} style={positions.find(i=>i=='17')?{backgroundColor:'red',left:"85%",top:"30%"}:{left:"85%",top:"30%"}}></div>
    <div className='cub'id='18' onClick={e=>selecteHandel(e)} style={positions.find(i=>i=='18')?{backgroundColor:'red',left:"85%",top:"45%"}:{left:"85%",top:"45%"}}></div>
    <div className='cub'id='19' onClick={e=>selecteHandel(e)} style={positions.find(i=>i=='19')?{backgroundColor:'red',left:"85%",top:"60%"}:{left:"85%",top:"60%"}}></div>
    <div className='cub'id='20' onClick={e=>selecteHandel(e)} style={positions.find(i=>i=='20')?{backgroundColor:'red',left:"85%",top:"74%"}:{left:"85%",top:"74%"}}></div>
</div>
  )
}

export default SecondPhoto