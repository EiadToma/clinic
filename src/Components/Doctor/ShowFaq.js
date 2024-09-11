import { useState } from 'react'
import { useSelector } from 'react-redux'
import Modal from './Modal'
import ShowRechecks from './ShowRechecks'
const ShowFaq = ({ FAQ }) => {
    const [showPrev, setShowPrev] = useState(false)
    const [showCurrent, setShowCurrent] = useState(false)
    const [showXray, setShowXray] = useState(false)
    // need to change the url in images to the var url if he change it later
    const mode = useSelector(state => state.user.Mode)
    const RowStyle = ` ${mode === 'dark' ? 'bg-gray-800 ' : 'text-black bg-white'} border-b border-gray-700`
    const ThStyle = `px-6 py-4 ${mode === 'dark' ? 'text-white' : 'text-gray-900'} w-1/2 font-medium  whitespace-nowrap `

    const faqData = FAQ?.PresentIllness ||{}
    const Recommendation = FAQ?.Recommendation
    const RelatedConsultation = FAQ?.RelatedConsultation
    const PlanOfManagment = FAQ?.PlanOfManagment
    console.log(FAQ)
    return (
        <div>
            <h5 className=" text-2xl font-bold bg-emerald-700"> Present Illness </h5>
            <table className={` ${mode === 'dark' ? 'text-gray-400' : 'text-gray-500'} w-full m-auto text-sm text-left rtl:text-right  `}>
                <tbody>
                    <tr className={RowStyle}>
                        <th className={ThStyle}>Main Lesion</th>
                        <td className="px-6 py-4">{faqData ? faqData.LesionIllness.main_lesion.map(item => (`- ${item.type} `)) : 'no Data'}</td>
                    </tr>
                    <tr className={RowStyle}>
                        <th className={ThStyle}>Secondary lesion</th>
                        <td className="px-6 py-4">{faqData ? faqData.LesionIllness.secondary_lesion.map(item => (`- ${item.type} `)) : 'no Data'}</td>
                    </tr>
                    <tr className={RowStyle}>
                        <th className={ThStyle}>Previous Photo</th>
                        <td className="px-6 py-4">
                            <button className='className="block w-1/3 my-1 m-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
'               onClick={() => setShowPrev(true)}>view Previous</button>
                        </td>
                    </tr>
                    {showPrev && (
                        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                            <div className="relative bg-black rounded-lg shadow-lg w-fit">
                                <button onClick={() => setShowPrev(false)} className="absolute top-2 right-2 text-white text-2xl">
                                    &times;
                                </button>
                                <div className=" w-11/12 h-1/3 center">
                                    <img src={`https://clinic-backend-0lcl.onrender.com/${faqData?.IllnessPhotos[0].url}`} className="w-full h-auto rounded" />
                                </div>
                            </div>
                        </div>
                    )}

                    <tr className={RowStyle}>
                        <th className={ThStyle}>Current Photo</th>
                        <td className="px-6 py-4"><button
                            className='className="block w-1/3 my-1 m-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
'           onClick={() => setShowCurrent(true)}>view Current</button></td>
                    </tr>
                    {showCurrent && (
                        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                            <div className="relative bg-black rounded-lg shadow-lg w-fit">
                                <button onClick={() => setShowCurrent(false)} className="absolute top-2 right-2 text-white text-2xl">
                                    &times;
                                </button>
                                <div className=" w-11/12 h-1/3 center ">
                                    <img src={`https://clinic-backend-0lcl.onrender.com/${faqData?.IllnessPhotos[1].url}`} className="w-full h-auto rounded" />
                                </div>
                            </div>
                        </div>
                    )}
                    <tr className={RowStyle}>
                        <th className={ThStyle}>XRay Photo</th>
                        <td className="px-6 py-4"><button
                            className='className="block w-1/3 my-1 m-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
'           onClick={() => setShowXray(true)}>view XRay</button></td>
                    </tr>
                    {showXray && (
                        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                            <div className="relative bg-black rounded-lg shadow-lg w-fit">
                                <button onClick={() => setShowXray(false)} className="absolute top-2 right-2 text-white text-2xl">
                                    &times;
                                </button>
                                <div className=" w-11/12 h-1/3 center">
                                    <img src={`https://clinic-backend-0lcl.onrender.com/${faqData?.IllnessPhotos[2].url}`} className="w-full h-auto rounded" />
                                </div>
                            </div>
                        </div>
                    )}
                    <tr className={RowStyle}>
                        <th className={ThStyle}>Notes</th>
                        <td className="px-6 py-4">{faqData?.notes ? 'exists' : 'no Data'}</td>
                    </tr>
                    <tr className={RowStyle}>
                        <th className={ThStyle}>Picture 1</th>
                        <td className="px-6 py-4"><Modal data='first' /></td>
                    </tr>
                    <tr className={RowStyle}>
                        <th className={ThStyle}>Picture 2</th>
                        <td className="px-6 py-4"><Modal data='second' /></td>
                    </tr>

                    {/* sinbadSection    */}
                    <tr className={RowStyle}>
                        <th className={ThStyle}>Site</th>
                        <td className="px-6 py-4">{faqData ? faqData.Sinbad.site == false ? 'ForeFoot' : 'MidFoot or ThindFoot' : 'no Data'}</td>
                    </tr>
                    <tr className={RowStyle}>
                        <th className={ThStyle}>Area Ulcer</th>
                        <td className="px-6 py-4">{faqData ? faqData.Sinbad.area_ulcer == false ? '<1cm²' : '>1cm²' : 'no Data'}</td>
                    </tr>
                    <tr className={RowStyle}>
                        <th className={ThStyle}>Bacterial Infection</th>
                        <td className="px-6 py-4">{faqData ? faqData.Sinbad.bacterial_infection == false ? 'none' : 'present' : 'no Data'}</td>
                    </tr>
                    <tr className={RowStyle}>
                        <th className={ThStyle}>Depth</th>
                        <td className="px-6 py-4">{faqData ? faqData.Sinbad.depth == false ? 'Skin,subcutaneous,tissue' : 'Ulcer reaching muscle - tendo or deeper' : 'no Data'}</td>
                    </tr>
                    <tr className={RowStyle}>
                        <th className={ThStyle}>Ischemia</th>
                        <td className="px-6 py-4">{faqData ? faqData.Sinbad.ischemia == false ? 'bedal blood flow intact:at least one pulse palpable' : 'Clinical evidence of reduced pedal bloody flow' : 'no Data'}</td>
                    </tr>
                    <tr className={RowStyle}>
                        <th className={ThStyle}>Neropath</th>
                        <td className="px-6 py-4">{faqData ? faqData.Sinbad.neropath == false ? 'Protective sensation intact' : 'Protective sensation lost' : 'no Data'}</td>
                    </tr>
                    {/*  */}
                    <tr className={RowStyle}>
                        <th className={ThStyle}>Disability</th>
                        <td className="px-6 py-4">{faqData?.disability ? faqData.disability : 'no Data'}</td>
                    </tr>
                    <tr className={RowStyle}>
                        <th className={ThStyle}>Gate analysis</th>
                        <td className="px-6 py-4">{faqData?.gate_analysis ? faqData?.gate_analysis : 'no Data'}</td>
                    </tr>
                    {/* vascular */}
                    <tr className={RowStyle}>
                        <th className={ThStyle}>Left Abi</th>
                        <td className="px-6 py-4">{faqData?.VascularStatus ? faqData?.VascularStatus.labi : 'no Data'}</td>
                    </tr>
                    <tr className={RowStyle}>
                        <th className={ThStyle}>Right Abi</th>
                        <td className="px-6 py-4">{faqData?.VascularStatus ? faqData?.VascularStatus.rabi : 'no Data'}</td>
                    </tr>
                    <tr className={RowStyle}>
                        <th className={ThStyle}>Left Dorsalis pedias pulse</th>
                        <td className="px-6 py-4">{faqData?.VascularStatus ? faqData?.VascularStatus.ldp : 'no Data'}</td>
                    </tr>
                    <tr className={RowStyle}>
                        <th className={ThStyle}>Left Dorsalis pedias doppler</th>
                        <td className="px-6 py-4">{faqData?.VascularStatus ? faqData?.VascularStatus.ldd : 'no Data'}</td>
                    </tr>
                    <tr className={RowStyle}>
                        <th className={ThStyle}>Right Dorsalis pedias pulse</th>
                        <td className="px-6 py-4">{faqData?.VascularStatus ? faqData?.VascularStatus.rdp : 'no Data'}</td>
                    </tr>
                    <tr className={RowStyle}>
                        <th className={ThStyle}>Right Dorsalis pedias doppler</th>
                        <td className="px-6 py-4">{faqData?.VascularStatus ? faqData?.VascularStatus.rdd : 'no Data'}</td>
                    </tr>
                    <tr className={RowStyle}>
                        <th className={ThStyle}>Left Posterior tibial pulse</th>
                        <td className="px-6 py-4">{faqData?.VascularStatus ? faqData?.VascularStatus.lpp : 'no Data'}</td>
                    </tr>
                    <tr className={RowStyle}>
                        <th className={ThStyle}>Left Posterior tibial doppler</th>
                        <td className="px-6 py-4">{faqData?.VascularStatus ? faqData?.VascularStatus.lpd : 'no Data'}</td>
                    </tr>
                    <tr className={RowStyle}>
                        <th className={ThStyle}>Right Posterior tibial pulse</th>
                        <td className="px-6 py-4">{faqData?.VascularStatus ? faqData?.VascularStatus.rpp : 'no Data'}</td>
                    </tr>
                    <tr className={RowStyle}>
                        <th className={ThStyle}>Right Posterior tibial doppler</th>
                        <td className="px-6 py-4">{faqData?.VascularStatus ? faqData?.VascularStatus.rpd : 'no Data'}</td>
                    </tr>
                    {/* Infection  */}
                    <tr className={RowStyle}>
                        <th className={ThStyle}>Clinical Classification</th>
                        <td className="px-6 py-4">{faqData ? faqData?.Infection.ClinicalClassifications.map(item => ' - ' + item.type) : 'no Data'}</td>
                    </tr>
                    <tr className={RowStyle}>
                        <th className={ThStyle}>Infection</th>
                        <td className="px-6 py-4">{faqData?.Infection ? `${faqData?.Infection.exists}` : 'no Data'}</td>
                    </tr>
                    <tr className={RowStyle}>
                        <th className={ThStyle}>Finger</th>
                        <td className="px-6 py-4">{faqData?.Infection ? faqData?.Infection.finger : 'no Data'}</td>
                    </tr>
                    <tr className={RowStyle}>
                        <th className={ThStyle}>IWGDF Classification</th>
                        <td className="px-6 py-4">{faqData?.Infection ? faqData?.Infection.iwgdf_classification : 'no Data'}</td>
                    </tr>
                    <tr className={RowStyle}>
                        <th className={ThStyle}>Leg</th>
                        <td className="px-6 py-4">{faqData?.Infection ? faqData?.Infection.leg === 'r' ? 'Right' : 'Left' : 'no Data'}</td>
                    </tr>
                    {/* nervouse */}
                    <tr className={RowStyle}>
                        <th className={ThStyle}>Thermo</th>
                        <td className="px-6 py-4">{faqData?.NervousStatus ? `${faqData?.NervousStatus.thermo} , ${faqData?.NervousStatus.thermo_check}` : 'no Data'}</td>
                    </tr>
                    <tr className={RowStyle}>
                        <th className={ThStyle}>Mino</th>
                        <td className="px-6 py-4">{faqData?.NervousStatus ? `${faqData?.NervousStatus.mino} , ${faqData?.NervousStatus.mino_check}` : 'no Data'}</td>
                    </tr>
                    <tr className={RowStyle}>
                        <th className={ThStyle}>Neuro</th>
                        <td className="px-6 py-4">{faqData?.NervousStatus ? `${faqData?.NervousStatus.neuro} , ${faqData?.NervousStatus.neuro_check}` : 'no Data'} , { }</td>
                    </tr>
                    {/* deformaty */}
                    <tr className={RowStyle}>
                        <th className={ThStyle}>Right Deformity</th>
                        <td className="px-6 py-4">{faqData?.right_deformity ? faqData.right_deformity.map(item => item.type) + '' : 'no Data'}</td>
                    </tr>
                    <tr className={RowStyle}>
                        <th className={ThStyle}>Left Deformity</th>
                        <td className="px-6 py-4">{faqData?.left_deformity ? faqData.left_deformity.map(item => item.type) + '' : 'no Data'}</td>
                    </tr>
                </tbody>
            </table>

            <h5 className=" text-2xl font-bold bg-emerald-700"> The Plan of managment </h5>

            <table className={` ${mode === 'dark' ? 'text-gray-400' : 'text-gray-500'} w-full m-auto text-sm text-left rtl:text-right  `}>
                <tbody>
                    <tr className={RowStyle} >
                        <th className={ThStyle}>Labratory Tests</th>
                        <td className="px-6 py-4">{PlanOfManagment ? PlanOfManagment?.LabratoryTests?.map(item => item.type) + '' : 'no Data'}</td>
                    </tr>
                    <tr className={RowStyle} >
                        <th className={ThStyle}>Next Visit</th>
                        <td className="px-6 py-4">{PlanOfManagment ? PlanOfManagment?.next_visit : 'no Data'}</td>
                    </tr>
                    <tr className={RowStyle} >
                        <th className={ThStyle}>Notes</th>
                        <td className="px-6 py-4">{PlanOfManagment ? PlanOfManagment.notes : 'no Data'}</td>
                    </tr>
                    <tr className={RowStyle} >
                        <th className={ThStyle}>Prescription Iv</th>
                        <td className="px-6 py-4">{PlanOfManagment ? PlanOfManagment.prescription_iv : 'no Data'}</td>
                    </tr>
                    <tr className={RowStyle} >
                        <th className={ThStyle}>Prescription Po</th>
                        <td className="px-6 py-4">{PlanOfManagment ? PlanOfManagment.prescription_po : 'no Data'}</td>
                    </tr>
                    <tr className={RowStyle} >
                        <th className={ThStyle}>Status</th>
                        <td className="px-6 py-4">{PlanOfManagment ? PlanOfManagment.status : 'no Data'}</td>
                    </tr>
                    <tr className={RowStyle} >
                        <th className={ThStyle}>Technique</th>
                        <td className="px-6 py-4">{PlanOfManagment ? PlanOfManagment.technique?.tech + ',' + PlanOfManagment.technique?.text : 'no Data'}</td>
                    </tr>
                </tbody>
            </table>

            <h5 className=" text-2xl font-bold bg-emerald-700"> Recommendation </h5>

            <table className={` ${mode === 'dark' ? 'text-gray-400' : 'text-gray-500'} w-full m-auto text-sm text-left rtl:text-right  `}>
                <tbody>
                    <tr className={RowStyle} >
                        <th className={ThStyle}>Consultation</th>
                        <td className="px-6 py-4">{Recommendation ? Recommendation.consultation : 'no Data'}</td>
                    </tr>
                    <tr className={RowStyle} >
                        <th className={ThStyle}>Continue Shoes</th>
                        <td className="px-6 py-4">{Recommendation ? Recommendation.continue_shoes : 'no Data'}</td>
                    </tr>
                    <tr className={RowStyle} >
                        <th className={ThStyle}>Hospitalization</th>
                        <td className="px-6 py-4">{Recommendation ? Recommendation.hospitalization : 'no Data'}</td>
                    </tr>
                    <tr className={RowStyle} >
                        <th className={ThStyle}>New Shoes</th>
                        <td className="px-6 py-4">{Recommendation ? Recommendation.new_shoes : 'no Data'}</td>
                    </tr>
                    <tr className={RowStyle} >
                        <th className={ThStyle}>Physical Therapy</th>
                        <td className="px-6 py-4">{Recommendation ? Recommendation.physical_therapy : 'no Data'}</td>
                    </tr>
                </tbody>
            </table>

            <h5 className=" text-2xl font-bold bg-emerald-700"> Related consultations</h5>

            <table className={` ${mode === 'dark' ? 'text-gray-400' : 'text-gray-500'} w-full m-auto text-sm text-left rtl:text-right  `}>
                <tbody>
                    <tr className={RowStyle} >
                        <th className={ThStyle}>Consultor Name</th>
                        <td className="px-6 py-4">{RelatedConsultation ? RelatedConsultation?.consultor_name : 'no Data'}</td>
                    </tr>
                    <tr className={RowStyle} >
                        <th className={ThStyle}>Last Cons Date</th>
                        <td className="px-6 py-4">{RelatedConsultation ? RelatedConsultation?.last_cons_date : 'no Data'}</td>
                    </tr>
                    <tr className={RowStyle} >
                        <th className={ThStyle}>Need Of Vascular</th>
                        <td className="px-6 py-4">{RelatedConsultation ? RelatedConsultation?.need_of_vascular : 'no Data'}</td>
                    </tr>
                    <tr className={RowStyle} >
                        <th className={ThStyle}>Other</th>
                        <td className="px-6 py-4">{RelatedConsultation ? RelatedConsultation?.other : 'no Data'}</td>
                    </tr>
                    <tr className={RowStyle} >
                        <th className={ThStyle}>Vascular Precedure</th>
                        <td className="px-6 py-4">{RelatedConsultation ? RelatedConsultation?.vascular_precedure : 'no Data'}</td>
                    </tr>
                </tbody>
            </table>
            {FAQ?.ReChecks?.slice().sort((a, b) => a.id - b.id).map(recheck => (
            <ShowRechecks key={recheck.id} RecheckData={recheck} />
))}
        </div>
    )
}

export default ShowFaq