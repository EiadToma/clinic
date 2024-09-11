import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setpatientID } from '../../redux/PatientSilce';

const Dropdown = ({ patient }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleDropdown}
        className="text-white bg-green-900 hover:bg-green-1000 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-green-800 dark:hover:bg-green-900 dark:focus:ring-blue-800"
        type="button"
      >
        {patient?.name}{' '}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <div
        id="dropdown"
        className={`z-20 ${isOpen ? '' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute `}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <Link
              className=' p-2 font-medium font-mono  hover:text-green-500'
              to={`${patient?.id}/faq`}
              onClick={() => dispatch(setpatientID(patient?.id))}
            >
              New Case
            </Link>
          </li>
          <li>
            <Link
              className=' p-2 font-medium font-mono hover:text-green-500'
              to={`${patient?.id}/case`}
              onClick={() => dispatch(setpatientID(patient?.id))}
            >
              Review
            </Link>
          </li>
          <li>
            <Link
              className=' p-2 font-medium font-mono hover:text-green-500'
              to={`${patient?.id}/history`}
              onClick={() => dispatch(setpatientID(patient?.id))}
            >
              Show History
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Dropdown;