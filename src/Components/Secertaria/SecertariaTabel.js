import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setpatientID } from '../../redux/PatientSlice';
import { getPatients, PatientsData } from "../../redux/PatientSlice"
import SearchSection from '../SearchSection';
const SecertariaTabel = () => {
  const Theme = useSelector(state => state.user.Mode)
  const localSearch = useSelector(state => state.user.localSearch)
  const patients = useSelector(PatientsData)
  var data = patients?.data
  const searchData = useSelector(state => state.user.searchResult?.data)
  if (searchData)
    data = searchData
  if (localSearch)
    data = data.filter(item => item.name && item.name.toLowerCase().includes(localSearch.toLowerCase()));
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPatients())
  }, [])
  return (
    <div className='w-10/12 m-auto' >
      <SearchSection />
      <div className={`relative w-full shadow-md sm:rounded-lg ${Theme === 'dark' ? 'dark:bg-gray-900' : ''}`}>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className={`text-xs text-gray-700 uppercase bg-gray-50 ${Theme === 'dark' ? ' dark:bg-gray-700 dark:text-gray-400' : ''}`}>
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
              <tr key={patient.id} className={` ${Theme === 'dark' ? ' odd:dark:bg-gray-900 even:dark:bg-gray-800 dark:border-gray-700' : 'odd:bg-white even:bg-gray-50'}  border-b`}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" >
                  <Link
                    className=' p-2 font-mono text-white bg-green-900 hover:bg-green-1000 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-green-800 dark:hover:bg-green-900 dark:focus:ring-blue-800'
                    to={`${patient?.id}/details`}
                    onClick={() => dispatch(setpatientID(patient?.id))}
                  >
                    {patient.name}
                  </Link>
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