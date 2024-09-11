import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const ShowRechecks = ({ RecheckData }) => {
    const [file, setfile] = useState(false)
    const [xRay, setXray] = useState(false)
    const [Consultations, setConsultations] = useState(false)

    const mode = useSelector(state => state.user.Mode);
    const RowStyle = `${mode === 'dark' ? 'bg-gray-800' : 'text-black bg-white'} border-b border-gray-700`;
    const ThStyle = `px-6 py-4 ${mode==='dark'?'text-white':'text-gray-900'} w-1/2 font-medium  whitespace-nowrap `

    console.log(RecheckData);

    return (
        <div className={`${mode === "dark" ? "bg-sky-900" : "bg-gray-50"} relative`}>
            <div className="w-full flex flex-row justify-between items-center ">
                <h3 className="text-4xl font-bold text-cyan-600">Recheck {RecheckData?.id}</h3>
            </div>
            <div >
                <table className={`${mode === "dark" ? "text-gray-400" : "text-gray-500"} w-full m-auto text-sm text-left rtl:text-right`}>
                    <tbody>
                        <tr className={RowStyle}>
                            <th className={ThStyle}>Dressing_status</th>
                            <td className="px-6 py-4">{RecheckData?.dressing_status ? RecheckData.dressing_status : "no Data"}</td>
                        </tr>
                        <tr className={RowStyle}>
                            <th className={ThStyle}>Management</th>
                            <td className="px-6 py-4">{RecheckData?.wound_status ? RecheckData.wound_status : "no Data"}</td>
                        </tr>
                        <tr className={RowStyle}>
                            <th className={ThStyle}>Infection_status</th>
                            <td className="px-6 py-4">{RecheckData.infection_status ? `${RecheckData?.infection_status}` : "no Data"}</td>
                        </tr>
                        <tr className={RowStyle}>
                            <th className={ThStyle}>Managment</th>
                            <td className="px-6 py-4">{RecheckData.managment ? `${RecheckData?.managment}` : "no Data"}</td>
                        </tr>
                        <tr className={RowStyle}>
                            <th className={ThStyle}>Laboratory tests  </th>
                            <td className="px-6 py-4">{RecheckData.managment ? `${RecheckData?.managment}` : "no Data"}</td>
                        </tr>
                        <tr className={RowStyle}>
                            <th className={ThStyle}>File_url</th>
                            <td className="px-6 py-4">
                            <button className='block w-1/3 my-1  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                            onClick={()=>setfile(true)}>view File</button>
                            </td>
                        </tr>
                        {file && (
                            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                                <div className="relative bg-black rounded-lg shadow-lg w-fit">
                                    <button onClick={() => setfile(false)} className="absolute top-2 right-2 text-white text-2xl">
                                        &times;
                                    </button>
                                    <div className=" w-11/12 h-1/3 center ">
                                        <img src={`https://clinic-backend-0lcl.onrender.com/${RecheckData?.file_url}`} className="w-full h-auto rounded" />
                                    </div>
                                </div>
                            </div>
                        )}

                        <tr className={RowStyle}>
                            <th className={ThStyle}>X ray </th>
                            <td className="px-6 py-4">
                            <button className='block w-1/3 my-1  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                            onClick={()=>setXray(true)}>view Xray</button>
                            </td>
                        </tr>
                        {xRay && (
                            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                                <div className="relative bg-black rounded-lg shadow-lg w-fit">
                                    <button onClick={() => setXray(false)} className="absolute top-2 right-2 text-white text-2xl">
                                        &times;
                                    </button>
                                    <div className=" w-11/12 h-1/3 center ">
                                        <img src={`https://clinic-backend-0lcl.onrender.com/${RecheckData?.x_ray_url}`} className="w-full h-auto rounded" />
                                    </div>
                                </div>
                            </div>
                        )}

                        <tr className={RowStyle}>
                            <th className={ThStyle}>antibiotics</th>
                            <td className="px-6 py-4">{RecheckData.antibiotics ? `${RecheckData?.antibiotics.text}, ${RecheckData?.antibiotics.type}` : "no Data"}</td>
                        </tr>
                        <tr className={RowStyle}>
                            <th className={ThStyle}>Vitamines</th>
                            <td className="px-6 py-4">{RecheckData.vitamines ? `${RecheckData?.vitamines.map(item => item )}` : "no Data"}</td>
                        </tr>
                        <tr className={RowStyle}>
                            <th className={ThStyle}>Anticoagulant</th>
                            <td className="px-6 py-4">{RecheckData.anticoaglulant ? `${RecheckData?.anticoaglulant}` : "no Data"}</td>
                        </tr>
                        <tr className={RowStyle}>
                            <th className={ThStyle}>Antiplatelet Drug</th>
                            <td className="px-6 py-4">{RecheckData.antiplatelet ? `${RecheckData?.antiplatelet}` : "no Data"}</td>
                        </tr>
                        <tr className={RowStyle}>
                            <th className={ThStyle}>Gait analysis</th>
                            <td className="px-6 py-4">{RecheckData.gait_analysis ? `${RecheckData?.gait_analysis}` : "no Data"}</td>
                        </tr>
                        <tr className={RowStyle}>
                            <th className={ThStyle}>Does patient wears appropriate shoes</th>
                            <td className="px-6 py-4">{RecheckData.wear_approp_shoes ? `${RecheckData?.wear_approp_shoes}` : "no Data"}</td>
                        </tr>
                        <tr className={RowStyle}>
                            <th className={ThStyle}>Need to customize shoes</th>
                            <td className="px-6 py-4">{RecheckData.need_customization===true ? `yes` : "false"}</td>
                        </tr>
                        <tr className={RowStyle}>
                            <th className={ThStyle}>Shoe Customizer</th>
                            <td className="px-6 py-4">{RecheckData.shoe_customizer ? `${RecheckData?.shoe_customizer}` : "no Data"}</td>
                        </tr>
                        <tr className={RowStyle}>
                            <th className={ThStyle}>Comorbidities</th>
                            <td className="px-6 py-4">{RecheckData.comorbidities ? `${RecheckData?.comorbidities}` : "no Data"}</td>
                        </tr>
                        <tr className={RowStyle}>
                            <th className={ThStyle}>Consultations</th>
                            <td className="px-6 py-4">
                            <button className='block w-1/3 my-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                            onClick={()=>setConsultations(true)}>view Consultation</button>
                            </td>
                        </tr>
                        {Consultations && (
                            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                                <div className="relative bg-black rounded-lg shadow-lg w-fit">
                                    <button onClick={() => setConsultations(false)} className="absolute top-2 right-2 text-white text-2xl">
                                        &times;
                                    </button>
                                    <div className=" w-11/12 h-1/3 center ">
                                        <img src={`https://clinic-backend-0lcl.onrender.com/${RecheckData?.consultation}`} className="w-full h-auto rounded" />
                                    </div>
                                </div>
                            </div>
                        )}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ShowRechecks;
