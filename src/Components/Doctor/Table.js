import React from 'react';
import Dropdown from './Dropdown';
import { useSelector } from 'react-redux';
const Table = ({ data }) => {
    const Theme=useSelector(state=>state.user.Mode)
    const localSearch = useSelector(state=>state.user.localSearch)
    if(localSearch)
      data = data.filter(item => item.name && item.name.toLowerCase().includes(localSearch.toLowerCase()));
    return (
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
                <Dropdown patient={patient} />
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
  );
};

export default Table;