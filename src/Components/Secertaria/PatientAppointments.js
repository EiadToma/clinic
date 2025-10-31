import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPatientAppointments, DeleteAppointment,DeletePatient } from '../../redux/Secertaria';

const PatientAppointments = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.patient.patient.id);
  const patient = useSelector((state) => state.patient.patients.data.data).find(patient => patient.id === data);
  const initialAppointments = useSelector((state) => state.secertaria.patientAppointments.data?.data);
  const mode = useSelector(state => state.user.Mode);
  const navigate = useNavigate()
  const [appointments, setAppointments] = useState(initialAppointments || []);

  useEffect(() => {
    if (data) {
      dispatch(getPatientAppointments({ patient_id: data }));
    }
  }, [dispatch, data]);

  useEffect(() => {
    if (initialAppointments) {
      setAppointments(initialAppointments);
    }
  }, [initialAppointments]);

  const handleDeleteAppointment = async (appointmentId) => {
    await dispatch(DeleteAppointment(appointmentId));
    // Update local state to reflect deletion instantly
    setAppointments((prev) => prev.filter(appointment => appointment.id !== appointmentId));
  };

  return (
    <div className={`container mx-auto p-6 min-h-screen`}>
      <div className='max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden'>
        {/* Patient Details */}
        <div className={`p-6 ${mode === 'dark' ? 'bg-blue-800 text-white' : 'bg-blue-600 text-white'}`}>
          <h5 className='text-xl font-bold mb-4'>Patient Details</h5>
          <div className='grid grid-cols-2 gap-4'>
            <div><span className="font-semibold">Name:</span> {patient?.name}</div>
            <div><span className="font-semibold">Phone Number:</span> {patient?.phone_number}</div>
            <div><span className="font-semibold">Address:</span> {patient?.address}</div>
            <div><span className="font-semibold">City:</span> {patient?.city}</div>
            <div><span className="font-semibold">Country:</span> {patient?.country}</div>
            <div><span className="font-semibold">Date of Birth:</span> {patient?.date_of_birth}</div>
            <div><span className="font-semibold">How Found Us:</span> {patient?.find_us}</div>
            <div><span className="font-semibold">Job:</span> {patient?.job}</div>
            <div><span className="font-semibold">Height:</span> {patient?.height} cm</div>
            <div><span className="font-semibold">Weight:</span> {patient?.weight} kg</div>
            <button className='bg-red-500 w-fit p-2 hover:scale-105 rounded transition-transform'
            onClick={()=>{dispatch(DeletePatient(data))
              navigate('/secertariatabel')
            }
          }
            >Delete</button>
          </div>
        </div>

        {/* Appointments */}
        <div className={`p-6 ${mode === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-900'}`}>
          {appointments?.length > 0 ? (
            appointments.map((appointment, index) => (
              <div key={index} className={`mt-6 p-4 rounded-lg shadow relative ${mode === 'dark' ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800'}`}>
                <h5 className='text-lg font-semibold mb-2'>
                  Appointment {index + 1}
                </h5>
                <p className='mb-2'>
                  <span className='font-semibold'>Date:</span> {appointment.day}/{appointment.month}/{appointment.year}
                </p>
                <p className='mb-2'>
                  <span className='font-semibold'>Time:</span> {appointment.time}
                </p>
                <p className='mb-2'>
                  <span className='font-semibold'>Type:</span> {appointment.visit_type}
                </p>

                {/* Delete Appointment Button */}
                <button
                  className='absolute top-2 right-2 text-red-500 hover:text-red-700'
                  onClick={() => handleDeleteAppointment(appointment.id)}
                >
                  &times;
                </button>

                {/* Payments */}
                <p className='font-sans font-semibold'>Payments:</p>
                {appointment.Payments.map((payment, i) => (
                  <div key={i} className='mt-4'>
                    <label className='font-medium'>{payment.name}</label>
                    <p>{payment.amount} S.P</p>
                  </div>
                ))}
              </div>
            ))
          ) : (
            <p className='text-gray-600'>No appointments found for this patient.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientAppointments;
