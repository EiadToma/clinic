import React, { useState, useEffect } from 'react';
import SuccessToaster from '../Components/SuccessToaster'
import { useSelector, useDispatch } from 'react-redux';
import { getPatients } from '../redux/PatientSlice';
import { addPayment,AddPayment, DeleteAppointment } from '../redux/Secertaria';
import Loading from '../Components/Loading'
import Calendar from '../Components/Secertaria/Calender';
import AppointmentForm from '../Components/Secertaria/AppointmentForm';

const Secertaria = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [paymentName, setPaymentName] = useState('');
  const [paymentAmount, setPaymentAmount] = useState('');
  const [selectedAppointment, setAppointment] = useState({})
  const [newPayments, setNewPayments] = useState([]);
  const selectedMonth = useSelector((state) => state.secertaria.date.month);
  const selectedDay = useSelector((state) => state.secertaria.date.day);
  let appointments = useSelector(state => state.secertaria.appointments.data?.data)
  let LoadAppointments = useSelector(state => state.secertaria.appointments.isLoading)
  let payment = useSelector(state => state.secertaria.payments.isLoading)
  const patients = useSelector((state) => state.patient.patients.data?.data);
  const dispatch = useDispatch();

  const appointmentPatient = patients?.filter(patient => patient.id === selectedAppointment.patient_id)[0]
  const payments = appointments.find(item=>item.id===selectedAppointment.id)?.Payments

  useEffect(() => {
    dispatch(getPatients());
  }, [appointments]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const ADD = (e) => {
    e.preventDefault()
    if (paymentName && paymentAmount) {
      dispatch(addPayment({id:selectedAppointment.id,name:paymentName,amount:paymentAmount}))
      const newPayment = { name: paymentName, amount: paymentAmount };
      dispatch(AddPayment({newPayment:newPayment,id:selectedAppointment.id}))
      setPaymentName('');
      setPaymentAmount('');
    }
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December',
  ];

  return (
    <div className='flex flex-row w-10/12 bg-white borderform-container  p-2 m-auto'>
      {isOpen && (
        <div className="fixed top-0 right-0 bottom-0 left-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
          <div className="relative  w-fit ">
            <div className="relative bg-white rounded-lg shadow ">
              <div className="w-fit  ">
                <button onClick={toggleModal} type="button"
                  className="text-gray-400 bg-transparent   rounded-lg text-sm w-8 h-2 ms-auto inline-flex justify-center items-center npm"
                >
                  <svg className="w-3 h-3" aria-hidden="true" fill="none" viewBox="0 0 14 14"
                  >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
                <AppointmentForm setIsOpen={setIsOpen} />
              </div>
            </div>
          </div>
        </div>
      )}

      <Calendar />

      <div className='w-1/3 h-fit p-5 mt-2 bg-white shadow-lg rounded-lg'>
        <p className='text-lg font-semibold text-gray-700'>
          Appointments reserved for:
          <span className='text-blue-500 font-bold'> {monthNames[selectedMonth - 1]} {selectedDay}</span>
        </p>
        {/* Existing Appointments */}
        {LoadAppointments && <Loading />}
        {!LoadAppointments && appointments?.map(item => (
          <div key={item.id} onClick={() => setAppointment(item)} className={`w-full h-10 mt-4 bg-gray-200 ${item === selectedAppointment ? 'border border-blue-400' : ''} flex items-center rounded-lg shadow-inner`}>
            <div className='w-1/3 text-center text-gray-800 font-semibold'>{item.time}</div>
            <div className={`w-1 h-5/6 ${item.visit_type === 'new' ? 'bg-green-500' : item.visit_type === 'surgery' ? 'bg-red-400' : 'bg-yellow-400'} rounded-full mx-2`}></div>
            <p className='w-2/3 text-center text-gray-600 font-medium'>{patients?.filter(patient => patient.id === item.patient_id)[0]?.name}</p>
            <button
              className="text-red-500 p-2  hover:text-red-700"
              onClick={() => dispatch(DeleteAppointment(item.id))}
            >
              &times; {/* This is the "X" icon */}
            </button>
          </div>
        ))}
        <button onClick={toggleModal} disabled={!selectedDay} className={`${selectedDay ? 'bg-blue-500' : 'bg-gray-400'} text-white my-3 rounded w-36 mx-auto`}>
          Create New Appointment
        </button>
        <p className='text-lg font-semibold text-gray-700'>
          Total Payments: {appointments?.reduce((accumulator, currentAppointment) => {
            const totalPaymentForAppointment = currentAppointment.Payments.reduce((acc, payment) => {
              return acc + Number(payment.amount);
            }, 0);
            return accumulator + totalPaymentForAppointment;
          }, 0)}
        </p>
      </div>

      <div className='w-1/3 mx-auto text-center h-fit p-4 bg-white shadow-lg rounded-lg space-y-4'>
        <div className='flex items-center justify-center space-x-2'>
          <label className='font-mono text-lg text-gray-700'>Name:</label>
          <span className='text-gray-600'>{appointmentPatient?.name}</span>
        </div>
        <div className='flex items-center justify-center space-x-2'>
          <label className='font-mono text-lg text-gray-700'>number:</label>
          <span className='text-gray-600'>{appointmentPatient?.phone_number}</span>
        </div>
        <div className='flex items-center justify-center space-x-2'>
          <label className='font-serif text-lg text-gray-700'>Details:{selectedAppointment.visit_type}</label>
          <span className='text-gray-600'>{appointmentPatient?.details}</span>
        </div>
        <div className='flex items-center justify-center space-x-2'>
          <label className='font-serif text-lg text-gray-700'>Gender:</label>
          <span className='text-gray-600'>{appointmentPatient?.gender === undefined ? 'no Data' : appointmentPatient?.gender === false ? 'female' : 'male'}</span>
        </div>

        {/* Payments Section */}
        <div className='w-full p-4 '>
          <h3 className='text-lg font-semibold text-gray-800 mb-4'>Payments</h3>
          <div className='flex items-center justify-between mb-4'>
            <input
              type='text'
              value={paymentName}
              onChange={(e) => setPaymentName(e.target.value)}
              placeholder='Payment description'
              className='w-1/2 p-2 border border-gray-300 rounded-md'
            />
            <input
              type='number'
              value={paymentAmount}
              onChange={(e) => setPaymentAmount(e.target.value)}
              placeholder='Amount'
              className='w-1/3 p-2 border border-gray-300 rounded-md ml-2'
            />
            <button
              onClick={(e) => ADD(e)}
              className='bg-blue-500 text-white px-4 py-2 rounded-md ml-2'>
              Add
            </button>
          </div>
          {/* Display Added Payments */}
          <div className='space-y-2'>
            {payment && <SuccessToaster title={'adding payment..'} />}
            {newPayments.map(payment => (
              <div
                className='flex justify-between items-center p-2 bg-white border border-gray-200 rounded-lg'>
                <span className='text-gray-700'>{payment.name}</span>
                <span className='text-gray-700'>{payment.amount} SP</span>
              </div>
            ))}
            {!payment && payments?.map((payment, index) => (
              <div
                key={index}
                className='flex justify-between items-center p-2 bg-white border border-gray-200 rounded-lg'>
                <span className='text-gray-700'>{payment.name}</span>
                <span className='text-gray-700'>{payment.amount} SP</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Secertaria;