import React, { useState } from 'react';
import { createAppointment, getAppointments } from '../../redux/Secertaria';
import { useDispatch, useSelector } from 'react-redux';
import SuccessToaster from '../SuccessToaster'
const AppointmentForm = ({ setIsOpen }) => {
  const { month, year, day } = useSelector(state => state.secertaria.date);
  const patients = useSelector(state => state.patient.patients?.data?.data);
  const [formData, setFormData] = useState({
    patient_id: '',
    visit_type: '',
    date: `${year}-${month}-${day}`,
    time: '',
  });
  const token = localStorage.getItem('token')
  const dispatch = useDispatch();

  const loading = useSelector(state => state.secertaria.createNew.isLoading)

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'time') {
      // Append ':00' to the time value to include seconds
      const timeWithSeconds = value + ':00';
      setFormData({ ...formData, [name]: timeWithSeconds });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh

    // Wait for createAppointment to fulfill before dispatching getAppointments
    const resultAction = await dispatch(createAppointment({ formData, token }));

    if (createAppointment.fulfilled.match(resultAction)) {
      dispatch(getAppointments({ day, month, year }));
    }

    setIsOpen(false);
  };

  return (
    <div className="h-fit bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Create Appointment</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {loading && <SuccessToaster title={'creating appointment...'} />}
          <div>
            <label htmlFor="patient_id" className="block text-sm font-medium text-gray-700">Patient ID</label>
            <select className='text-gray-500' name="patient_id" value={formData.patient_id} onChange={handleChange}>
              <option selected>nothing selected</option>
              {patients?.map(item => (
                <option key={item.id} value={item.id}>{item.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="mt-2 p-2 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="visit_type" className="block text-sm font-medium text-gray-700">Visit Type</label>
            <select
              id="visit_type"
              name="visit_type"
              value={formData.visit_type}
              onChange={handleChange}
              className="mt-2 p-2 block w-full border-gray-300 text-gray-500 rounded-md shadow-sm sm:text-sm"
              required
            >
              <option value="" disabled>Select Visit Type</option>
              <option value="follow-up">Follow-up</option>
              <option value="new">new</option>
              <option value="surgery">surgery</option>
            </select>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Create Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
