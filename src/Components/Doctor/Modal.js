import React, { useState } from 'react';
import SecondPhoto from './SecondPhoto'
import { useSelector } from 'react-redux';
import FirstPhoto from './FirstPhoto';
const Modal = ({number,data}) => {
  const [isOpen, setIsOpen] = useState(false);
  const CasesData = useSelector(state=>state.patient.patient.cases?.data)
  const poss =CasesData? CasesData[0]?.PresentIllness?.LesionIllness.positions1:[]
  const positions =CasesData? CasesData[0]?.PresentIllness?.LesionIllness.positions2:[]
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        onClick={toggleModal}
        className="block w-1/3 my-1  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button">
       Show photo
      </button>

      {isOpen && (
        <div
          id="default-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 right-0 bottom-0 left-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
        >
          <div className="relative  w-fit ">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between  border-b rounded-t dark:border-gray-600">
                <button
                  onClick={toggleModal}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-2 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="w-fit space-y-4 ">
                {data==='second'?<SecondPhoto positions={positions}/>:<FirstPhoto poss={poss}/>}
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
