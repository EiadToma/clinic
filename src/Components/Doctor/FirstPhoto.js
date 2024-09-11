import React from 'react'
import { updatePresent } from '../../redux/FaqSlice'
import { useSelector ,useDispatch} from 'react-redux'

 const FirstPhoto = ({poss}) => {
if(poss===undefined || poss===null)
    poss=[]
    // const poss = useSelector(state=>state.faq?.present_illness.lesion.positions1)

    const dispatch = useDispatch()
    const selecteHandel=(e)=>{
        const id =  e.nativeEvent.srcElement.id
        if(poss.find(item=>item==id))
        dispatch(updatePresent({fieldName:'lesion',nestedField:'positions1',value:poss.filter(item=>item!==id)}))
        else
        dispatch(updatePresent({fieldName:'lesion',nestedField:'positions1',value:[...poss,id]}))
        }
  return (
<div className='image-div'>
    <div className= {`area text-center ${poss.find(i=>i=='1')?'bg-red-500':''}`} id='1' onClick={e=>selecteHandel(e)} style={{width:"50px",height:"50px",left:"30%",top:"7%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='2')?'bg-red-500':''}`} id='2' onClick={e=>selecteHandel(e)} style={{width:"50px",height:"50px",left:"30%",top:"15%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='3')?'bg-red-500':''}`} id='3' onClick={e=>selecteHandel(e)} style={{width:"50px",height:"50px",left:"20%",top:"15%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='4')?'bg-red-500':''}`} id='4' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"10%",top:"22%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='5')?'bg-red-500':''}`} id='5' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"7%",top:"22%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='6')?'bg-red-500':''}`} id='6' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"5%",top:"21%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='7')?'bg-red-500':''}`} id='7' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"4%",top:"19%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='8')?'bg-red-500':''}`} id='8' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"3%",top:"16%"}}></div>
    {/*  */}
    <div className={`area text-center ${poss.find(i=>i=='9')?'bg-red-500':''}`} id='9' onClick={e=>selecteHandel(e)} style={{width:"50px",height:"50px",left:"30%",top:"30%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='10')?'bg-red-500':''}`} id='10' onClick={e=>selecteHandel(e)} style={{width:"50px",height:"50px",left:"32%",top:"40%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='11')?'bg-red-500':''}`} id='11' onClick={e=>selecteHandel(e)} style={{width:"50px",height:"50px",left:"22%",top:"38%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='12')?'bg-red-500':''}`} id='12' onClick={e=>selecteHandel(e)} style={{width:"50px",height:"50px",left:"13%",top:"41%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='13')?'bg-red-500':''}`} id='13' onClick={e=>selecteHandel(e)} style={{width:"30px",height:"30px",left:"3%",top:"45%"}}></div>
    {/*  */}
    <div className={`area text-center ${poss.find(i=>i=='14')?'bg-red-500':''}`} id='14' onClick={e=>selecteHandel(e)} style={{width:"50px",height:"50px",left:"9%",top:"55%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='15')?'bg-red-500':''}`} id='15' onClick={e=>selecteHandel(e)} style={{width:"50px",height:"50px",left:"6%",top:"63%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='16')?'bg-red-500':''}`} id='16' onClick={e=>selecteHandel(e)} style={{width:"50px",height:"50px",left:"16%",top:"64%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='17')?'bg-red-500':''}`} id='17' onClick={e=>selecteHandel(e)} style={{width:"50px",height:"50px",left:"25%",top:"67%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='18')?'bg-red-500':''}`} id='18' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"32%",top:"71.5%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='115')?'bg-red-500':''}`} id='115' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"35%",top:"71%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='116')?'bg-red-500':''}`} id='116' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"37%",top:"70%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='117')?'bg-red-500':''}`} id='117' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"39%",top:"69%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='119')?'bg-red-500':''}`} id='119' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"39.5%",top:"66.5%"}}></div>
    {/*  */}
    <div className={`area text-center ${poss.find(i=>i=='19')?'bg-red-500':''}`} id='19' onClick={e=>selecteHandel(e)} style={{width:"50px",height:"50px",left:"9%",top:"80%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='20')?'bg-red-500':''}`} id='20' onClick={e=>selecteHandel(e)} style={{width:"50px",height:"50px",left:"6%",top:"89%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='21')?'bg-red-500':''}`} id='21' onClick={e=>selecteHandel(e)} style={{width:"50px",height:"50px",left:"16%",top:"88%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='22')?'bg-red-500':''}`} id='22' onClick={e=>selecteHandel(e)} style={{width:"50px",height:"50px",left:"25%",top:"91%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='23')?'bg-red-500':''}`} id='23' onClick={e=>selecteHandel(e)} style={{width:"30px",height:"30px",left:"35%",top:"94%"}}></div>
    {/*  */}
    <div className={`area text-center ${poss.find(i=>i=='24')?'bg-red-500':''}`} id='24' onClick={e=>selecteHandel(e)} style={{width:"60px",height:"60px",left:"60%",top:"8%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='25')?'bg-red-500':''}`} id='25' onClick={e=>selecteHandel(e)} style={{width:"80px",height:"80px",left:"55%",top:"17%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='26')?'bg-red-500':''}`} id='26' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"61.5%",top:"29.5%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='27')?'bg-red-500':''}`} id='26' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"60%",top:"32%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='28')?'bg-red-500':''}`} id='28' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"58%",top:"28%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='29')?'bg-red-500':''}`} id='29' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"56%",top:"30%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='30')?'bg-red-500':''}`} id='30' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"55%",top:"32%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='31')?'bg-red-500':''}`} id='31' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"55.5%",top:"26%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='32')?'bg-red-500':''}`} id='32' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"54%",top:"28%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='33')?'bg-red-500':''}`} id='33' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"53%",top:"30%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='34')?'bg-red-500':''}`} id='34' onClick={e=>selecteHandel(e)} style={{width:"15px",height:"15px",left:"54%",top:"25%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='35')?'bg-red-500':''}`} id='35' onClick={e=>selecteHandel(e)} style={{width:"15px",height:"15px",left:"53%",top:"26%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='36')?'bg-red-500':''}`} id='36' onClick={e=>selecteHandel(e)} style={{width:"15px",height:"15px",left:"52%",top:"28%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='37')?'bg-red-500':''}`} id='37' onClick={e=>selecteHandel(e)} style={{width:"15px",height:"15px",left:"53%",top:"22%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='38')?'bg-red-500':''}`} id='38' onClick={e=>selecteHandel(e)} style={{width:"15px",height:"15px",left:"52%",top:"24%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='39')?'bg-red-500':''}`} id='39' onClick={e=>selecteHandel(e)} style={{width:"15px",height:"15px",left:"51%",top:"26%"}}></div>
    {/*  */}
    <div className={`area text-center ${poss.find(i=>i=='40')?'bg-red-500':''}`} id='40' onClick={e=>selecteHandel(e)} style={{width:"60px",height:"60px",left:"80%",top:"8%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='41')?'bg-red-500':''}`} id='41' onClick={e=>selecteHandel(e)} style={{width:"80px",height:"80px",left:"82%",top:"17%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='42')?'bg-red-500':''}`} id='42' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"85%",top:"29.5%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='43')?'bg-red-500':''}`} id='43' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"86%",top:"32%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='44')?'bg-red-500':''}`} id='44' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"88%",top:"34%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='45')?'bg-red-500':''}`} id='45' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"89%",top:"29%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='46')?'bg-red-500':''}`} id='46' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"90%",top:"31%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='47')?'bg-red-500':''}`} id='47' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"92%",top:"33%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='48')?'bg-red-500':''}`} id='48' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"91%",top:"27%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='49')?'bg-red-500':''}`} id='49' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"92%",top:"29%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='50')?'bg-red-500':''}`} id='50' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"94%",top:"31%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='51')?'bg-red-500':''}`} id='51' onClick={e=>selecteHandel(e)} style={{width:"15px",height:"15px",left:"93%",top:"26%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='52')?'bg-red-500':''}`} id='52' onClick={e=>selecteHandel(e)} style={{width:"15px",height:"15px",left:"94.5%",top:"27%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='53')?'bg-red-500':''}`} id='53' onClick={e=>selecteHandel(e)} style={{width:"15px",height:"15px",left:"96%",top:"29%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='54')?'bg-red-500':''}`} id='54' onClick={e=>selecteHandel(e)} style={{width:"15px",height:"15px",left:"95%",top:"24%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='55')?'bg-red-500':''}`} id='55' onClick={e=>selecteHandel(e)} style={{width:"15px",height:"15px",left:"96%",top:"25%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='56')?'bg-red-500':''}`} id='56' onClick={e=>selecteHandel(e)} style={{width:"15px",height:"15px",left:"97%",top:"27%"}}></div>

    {/*  */}
    <div className={`area text-center ${poss.find(i=>i=='57')?'bg-red-500':''}`} id='57' onClick={e=>selecteHandel(e)} style={{width:"60px",height:"60px",left:"82%",top:"45%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='58')?'bg-red-500':''}`} id='58' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"81%",top:"59%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='59')?'bg-red-500':''}`} id='59' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"87%",top:"58%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='60')?'bg-red-500':''}`} id='60' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"90%",top:"58%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='61')?'bg-red-500':''}`}id='61' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"93%",top:"58%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='62')?'bg-red-500':''}`}id='62' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"96%",top:"57%"}}></div>
    {/*  */}
    <div className={`area text-center ${poss.find(i=>i=='63')?'bg-red-500':''}`}id='63' onClick={e=>selecteHandel(e)} style={{width:"60px",height:"60px",left:"58%",top:"45%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='64')?'bg-red-500':''}`}id='64' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"51%",top:"56%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='65')?'bg-red-500':''}`}id='65' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"53%",top:"57%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='66')?'bg-red-500':''}`}id='66' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"56%",top:"58%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='67')?'bg-red-500':''}`}id='67' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"59%",top:"59%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='68')?'bg-red-500':''}`}id='68' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"65%",top:"59%"}}></div>
    {/*  */}
    <div className={`area text-center ${poss.find(i=>i=='69')?'bg-red-500':''}`}id='69' onClick={e=>selecteHandel(e)} style={{width:"60px",height:"60px",left:"54%",top:"79%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='70')?'bg-red-500':''}`}id='70' onClick={e=>selecteHandel(e)} style={{width:"60px",height:"60px",left:"54%",top:"88%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='71')?'bg-red-500':''}`}id='71' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"52%",top:"75%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='72')?'bg-red-500':''}`}id='72' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"53%",top:"72%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='73')?'bg-red-500':''}`}id='73' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"53%",top:"70%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='74')?'bg-red-500':''}`}id='74' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"55.5%",top:"74%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='75')?'bg-red-500':''}`}id='75' onClick={e=>selecteHandel(e)} style={{width:"15px",height:"15px",left:"56.5%",top:"72%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='76')?'bg-red-500':''}`}id='76' onClick={e=>selecteHandel(e)} style={{width:"15px",height:"15px",left:"56.5%",top:"70%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='77')?'bg-red-500':''}`}id='77' onClick={e=>selecteHandel(e)} style={{width:"15px",height:"15px",left:"56.5%",top:"68%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='78')?'bg-red-500':''}`}id='78' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"59%",top:"74%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='79')?'bg-red-500':''}`}id='79' onClick={e=>selecteHandel(e)} style={{width:"15px",height:"15px",left:"59%",top:"71%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='80')?'bg-red-500':''}`}id='80' onClick={e=>selecteHandel(e)} style={{width:"15px",height:"15px",left:"59%",top:"69%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='81')?'bg-red-500':''}`}id='81' onClick={e=>selecteHandel(e)} style={{width:"15px",height:"15px",left:"59%",top:"67%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='82')?'bg-red-500':''}`}id='82' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"62%",top:"74%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='83')?'bg-red-500':''}`}id='83' onClick={e=>selecteHandel(e)} style={{width:"15px",height:"15px",left:"62%",top:"71%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='84')?'bg-red-500':''}`}id='84' onClick={e=>selecteHandel(e)} style={{width:"15px",height:"15px",left:"62%",top:"69%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='85')?'bg-red-500':''}`}id='85' onClick={e=>selecteHandel(e)} style={{width:"15px",height:"15px",left:"62%",top:"67%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='86')?'bg-red-500':''}`}id='86' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"65%",top:"75%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='87')?'bg-red-500':''}`}id='87' onClick={e=>selecteHandel(e)} style={{width:"15px",height:"15px",left:"66%",top:"71%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='88')?'bg-red-500':''}`}id='88' onClick={e=>selecteHandel(e)} style={{width:"15px",height:"15px",left:"66%",top:"69%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='89')?'bg-red-500':''}`}id='89' onClick={e=>selecteHandel(e)} style={{width:"15px",height:"15px",left:"66%",top:"67%"}}></div>
    {/*  */}
    <div className={`area text-center ${poss.find(i=>i=='90')?'bg-red-500':''}`}id='90' onClick={e=>selecteHandel(e)} style={{width:"60px",height:"60px",left:"86%",top:"79%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='91')?'bg-red-500':''}`}id='91' onClick={e=>selecteHandel(e)} style={{width:"60px",height:"60px",left:"86%",top:"88%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='92')?'bg-red-500':''}`}id='92' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"81%",top:"75%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='93')?'bg-red-500':''}`}id='93' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"81%",top:"72%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='94')?'bg-red-500':''}`}id='94' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"81%",top:"69%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='95')?'bg-red-500':''}`}id='95' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"81%",top:"67%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='96')?'bg-red-500':''}`}id='96' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"84.5%",top:"74%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='97')?'bg-red-500':''}`}id='97' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"84.5%",top:"71%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='98')?'bg-red-500':''}`}id='98' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"84.5%",top:"69%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='99')?'bg-red-500':''}`}id='99' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"84.5%",top:"67%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='100')?'bg-red-500':''}`}id='100' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"88%",top:"74%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='101')?'bg-red-500':''}`}id='101' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"88%",top:"71%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='102')?'bg-red-500':''}`}id='102' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"88%",top:"69%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='103')?'bg-red-500':''}`}id='103' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"88%",top:"67%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='104')?'bg-red-500':''}`}id='104' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"91%",top:"74%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='105')?'bg-red-500':''}`}id='105' onClick={e=>selecteHandel(e)} style={{width:"15px",height:"15px",left:"91%",top:"72%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='106')?'bg-red-500':''}`}id='106' onClick={e=>selecteHandel(e)} style={{width:"15px",height:"15px",left:"91%",top:"70%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='107')?'bg-red-500':''}`}id='107' onClick={e=>selecteHandel(e)} style={{width:"15px",height:"15px",left:"91%",top:"68%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='108')?'bg-red-500':''}`}id='108' onClick={e=>selecteHandel(e)} style={{width:"20px",height:"20px",left:"94%",top:"75%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='109')?'bg-red-500':''}`}id='109' onClick={e=>selecteHandel(e)} style={{width:"15px",height:"15px",left:"94%",top:"73%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='110')?'bg-red-500':''}`}id='110' onClick={e=>selecteHandel(e)} style={{width:"15px",height:"15px",left:"94%",top:"71%"}}></div>
    <div className={`area text-center ${poss.find(i=>i=='111')?'bg-red-500':''}`}id='111' onClick={e=>selecteHandel(e)} style={{width:"15px",height:"15px",left:"93.5%",top:"70%"}}></div>
</div>
)}
export default FirstPhoto