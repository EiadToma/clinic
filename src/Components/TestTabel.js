import React from 'react';
import { useSelector } from 'react-redux';

const PatientsTable = () => {
  const patients = useSelector(state=>state.user.fullSearch.data)
  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-green-500 text-white">
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">ID</th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Gender</th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">phone number</th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">weight</th>
          </tr>
        </thead>
        <tbody>
          {patients?.map((patient, index) => (
            <tr key={patient.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="text-left py-3 px-4">{patient.Patient.id}</td>
              <td className="text-left py-3 px-4">{patient.Patient.name}</td>
              <td className="text-left py-3 px-4">{patient.Patient.gender===true?'male':patient.Patient.gender===false?'female':'noData'}</td>
              <td className="text-left py-3 px-4">{patient.Patient.phone_number}</td>
              <td className="text-left py-3 px-4">{patient.Patient.weight}</td>
            </tr>
          ))};
        </tbody>
      </table>
    </div>
  );
};

export default PatientsTable;
