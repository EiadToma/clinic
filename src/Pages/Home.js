import { useEffect,useState } from "react"
import { useDispatch ,useSelector} from "react-redux"
import {getPatients,PatientsData,setpatientID} from "../redux/PatientSilce"
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
const Patients = () => {
const dispatch = useDispatch() 
const data = useSelector(PatientsData)
console.log(data)
useEffect(()=>{
   dispatch(getPatients()) 
},[])


 return (
    <>      <Navbar/>
    <div className='container'>
        <table className="table">
            <thead>
            <tr className="table-row">
            <th className="table-header">Name</th>
            <th className="table-header">Phone number</th>
            <th className="table-header">Gender</th>
            <th className="table-header">Nationality</th>
        </tr>
            </thead>
<tbody>
        {data?.map(patient=>(
        <tr className="table-row row" key={patient.id}>
            <td className="table-header cell" >
                <p style={{cursor:"pointer"}} >{patient?.name}</p>
                <div className="table-drop">
                    <Link className='table-link' to={`/patients/${patient.id}/faq`} onClick={()=>dispatch(setpatientID(patient?.id))}> NewCase</Link>
                    <Link className="table-link" to={`/patients/${patient.id}/case`} onClick={()=>dispatch(setpatientID(patient?.id))}> Review</Link>
                </div>
                </td>
            <td className="table-header cell">{patient?.phone_number}</td>
            <td className="table-header cell">{patient?.gender===true?'Male':'Female'}</td>
            <td className="table-header cell">{patient?.country}</td>
        </tr>))}
        </tbody>
        </table>


    </div>
    </>

  )
}

export default Patients