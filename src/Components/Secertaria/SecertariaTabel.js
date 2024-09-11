import React ,{useEffect}from 'react';
import SecertariaDropdown from './SecertariaDropdown';
import { useSelector,useDispatch } from 'react-redux';
import {getPatients,PatientsData} from "../../redux/PatientSilce"
import SearchSection from '../SearchSection';
const SecertariaTabel = () => {
    const Theme=useSelector(state=>state.user.Mode)
    const localSearch = useSelector(state=>state.user.localSearch)
    const patients = useSelector(PatientsData)
    var data = patients.data
    const searchData = useSelector(state=>state.user.searchResult?.data)
    if(localSearch)
      data = data.filter(item => item.name && item.name.toLowerCase().includes(localSearch.toLowerCase()));
    if(searchData)
        data = searchData
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getPatients()) 
     },[])
console.log(data)
    return (
        <div className='w-10/12 m-auto' >
        <SearchSection/>
    <div className={`relative w-full shadow-md sm:rounded-lg ${Theme === 'dark' ? 'dark:bg-gray-900' : ''}`}>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className={`text-xs text-gray-700 uppercase bg-gray-50 ${Theme==='dark' ? ' dark:bg-gray-700 dark:text-gray-400' : ''}`}>
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Phone Number
            </th>
            <th scope="col" className="px-6 py-3">
              Gender
            </th>
            <th scope="col" className="px-6 py-3">
              Nationality
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((patient) => (
            <tr key={patient.id} className={` ${Theme==='dark' ? ' odd:dark:bg-gray-900 even:dark:bg-gray-800 dark:border-gray-700' : 'odd:bg-white even:bg-gray-50'}  border-b`}>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <SecertariaDropdown patient={patient} />
              </th>
              <td className="px-6 py-4">
                {patient?.phone_number}
              </td>
              <td className="px-6 py-4">
                {patient?.gender === true ? 'Male' : 'Female'}
              </td>
              <td className="px-6 py-4">
                {patient?.country}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default SecertariaTabel;