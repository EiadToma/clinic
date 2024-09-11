import { useEffect } from "react"
import { useDispatch ,useSelector} from "react-redux"
import {getPatients,PatientsData} from "../redux/PatientSilce"
import Table from "../Components/Doctor/Table";
import {getHistoryLists} from '../redux/FaqSlice'
import { getFaq } from "../redux/FaqSlice"
import SearchSection from '../Components/SearchSection'
const Patients = () => {
const dispatch = useDispatch() 
const data = useSelector(PatientsData)
const searchData = useSelector(state=>state.user.searchResult?.data)

console.log(data)
useEffect(()=>{
   dispatch(getPatients()) 
   dispatch(getHistoryLists())
   dispatch(getFaq())
},[])
 return (
    <>
        <div className='container '>
          <SearchSection/>
            <Table data = {searchData? searchData:data?.data}/>
        </div>
    </>

  )
}

export default Patients