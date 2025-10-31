import React, { useState } from "react";
import { useSelector } from "react-redux";

const ShowRechecks = ({ RecheckData }) => {
  const [file, setFile] = useState(false);
  const [xRay, setXray] = useState(false);
  const [consultations, setConsultations] = useState(false);

  const url = process.env.REACT_APP_API_URL;
  const mode = useSelector((state) => state.user.Mode);
  const isDark = mode === "dark";
  const RowStyle = `${isDark ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"} border-b border-gray-300`;
  const ThStyle = `px-6 py-4 ${isDark ? "text-cyan-300" : "text-cyan-700"} font-semibold w-1/2 whitespace-nowrap`;

  console.log(RecheckData);

  return (
    <div className={`${isDark ? "bg-sky-900" : "bg-gray-50"} rounded-lg shadow-md p-6 mt-6 relative`}>
      <h3 className="text-3xl font-bold text-cyan-600 mb-4">Recheck {RecheckData?.id}</h3>

      <table className="w-full text-sm text-left">
        <tbody>
          <tr className={RowStyle}>
            <th className={ThStyle}>Dressing Status</th>
            <td className="px-6 py-4">{RecheckData?.dressing_status || "No Data"}</td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Wound Status</th>
            <td className="px-6 py-4">{RecheckData?.wound_status || "No Data"}</td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Infection Status</th>
            <td className="px-6 py-4">{RecheckData?.infection_status?.toString() || "No Data"}</td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Management</th>
            <td className="px-6 py-4">{RecheckData?.managment || "No Data"}</td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Laboratory Tests</th>
            <td className="px-6 py-4">{RecheckData?.lab_tests || "No Data"}</td>
          </tr>

          {/* File */}
          <tr className={RowStyle}>
            <th className={ThStyle}>File</th>
            <td className="px-6 py-4">
              <button
                className={`block w-1/3 my-1 m-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${isDark ? "dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" : ""}`}
                onClick={() => setFile(true)}
              >
                View File
              </button>
            </td>
          </tr>

          {file && (
            <tr>
              <td colSpan="2" className="p-0">
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                  <div className="relative bg-black rounded-lg shadow-lg max-w-3xl w-full mx-4">
                    <button
                      onClick={() => setFile(false)}
                      className="absolute top-2 right-2 text-white text-2xl"
                    >
                      &times;
                    </button>
                    <div className="p-4">
                      <img
                        src={url + `/${RecheckData?.file_url}`}
                        alt="Recheck File"
                        className="w-full h-auto rounded"
                      />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          )}

          {/* X-Ray */}
          <tr className={RowStyle}>
            <th className={ThStyle}>X-Ray</th>
            <td className="px-6 py-4">
              <button
                className={`block w-1/3 my-1 m-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${isDark ? "dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" : ""}`}
                onClick={() => setXray(true)}
              >
                View X-Ray
              </button>
            </td>
          </tr>

          {xRay && (
            <tr>
              <td colSpan="2" className="p-0">
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                  <div className="relative bg-black rounded-lg shadow-lg max-w-3xl w-full mx-4">
                    <button
                      onClick={() => setXray(false)}
                      className="absolute top-2 right-2 text-white text-2xl"
                    >
                      &times;
                    </button>
                    <div className="p-4">
                      <img
                        src={url + `/${RecheckData?.x_ray_url}`}
                        alt="X-Ray"
                        className="w-full h-auto rounded"
                      />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          )}

          <tr className={RowStyle}>
            <th className={ThStyle}>Antibiotics</th>
            <td className="px-6 py-4">
              {RecheckData?.antibiotics
                ? `${RecheckData.antibiotics.text}, ${RecheckData.antibiotics.type}`
                : "No Data"}
            </td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Vitamins</th>
            <td className="px-6 py-4">
              {RecheckData?.vitamines
                ? RecheckData.vitamines.join(", ")
                : "No Data"}
            </td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Anticoagulant</th>
            <td className="px-6 py-4">{RecheckData?.anticoaglulant || "No Data"}</td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Antiplatelet Drug</th>
            <td className="px-6 py-4">{RecheckData?.antiplatelet || "No Data"}</td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Gait Analysis</th>
            <td className="px-6 py-4">{RecheckData?.gait_analysis || "No Data"}</td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Wears Appropriate Shoes</th>
            <td className="px-6 py-4">{RecheckData?.wear_approp_shoes?.toString() || "No Data"}</td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Needs Shoe Customization</th>
            <td className="px-6 py-4">
              {RecheckData?.need_customization === true ? "Yes" : "No"}
            </td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Shoe Customizer</th>
            <td className="px-6 py-4">{RecheckData?.shoe_customizer || "No Data"}</td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Comorbidities</th>
            <td className="px-6 py-4">{RecheckData?.comorbidities || "No Data"}</td>
          </tr>

          {/* Consultation */}
          <tr className={RowStyle}>
            <th className={ThStyle}>Consultation</th>
            <td className="px-6 py-4">
              <button
                className={`block w-1/3 my-1 m-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${isDark ? "dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" : ""}`}
                onClick={() => setConsultations(true)}
              >
                View Consultation
              </button>
            </td>
          </tr>

          {consultations && (
            <tr>
              <td colSpan="2" className="p-0">
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                  <div className="relative bg-black rounded-lg shadow-lg max-w-3xl w-full mx-4">
                    <button
                      onClick={() => setConsultations(false)}
                      className="absolute top-2 right-2 text-white text-2xl"
                    >
                      &times;
                    </button>
                    <div className="p-4">
                      <img
                        src={url + `/${RecheckData?.consultation}`}
                        alt="Consultation"
                        className="w-full h-auto rounded"
                      />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ShowRechecks;