import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCase } from "../../redux/PatientSlice";
import Modal from "./Modal";
import ShowRechecks from "./ShowRechecks";

const ShowFaq = ({ FAQ, index }) => {
  const [showPrev, setShowPrev] = useState(false);
  const [showCurrent, setShowCurrent] = useState(false);
  const [showXray, setShowXray] = useState(false);

  // need to change the url in images to the var url if he change it later
  const url = process.env.REACT_APP_API_URL;
  const mode = useSelector((state) => state.user.Mode);
  const isDark = mode === "dark";
  const RowStyle = `${isDark ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"} border-b border-gray-300`;
  const ThStyle = `px-6 py-4 ${isDark ? "text-cyan-300" : "text-cyan-700"} font-semibold w-1/2 whitespace-nowrap`;

  const dispatch = useDispatch();
  console.log(FAQ);

  const faqData = FAQ?.PresentIllness || {};
  const Recommendation = FAQ?.Recommendation;
  const RelatedConsultation = FAQ?.RelatedConsultation;
  const PlanOfManagment = FAQ?.PlanOfManagment;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center w-full mb-4">
        <h5 className="text-2xl font-bold bg-emerald-700 text-white px-4 py-2 rounded-t-lg">
          Present Illness {index + 1}
        </h5>
        <button
          className="text-2xl w-10 h-10 flex items-center justify-center bg-emerald-700 text-white hover:text-red-300 rounded-tr-lg rounded-br-lg"
          onClick={() => dispatch(deleteCase({ patientId: FAQ.patient_id, caseId: FAQ.id }))}
        >
          &times;
        </button>
      </div>

      <table className="w-full text-sm text-left">
        <tbody>
          <tr className={RowStyle}>
            <th className={ThStyle}>Main Lesion</th>
            <td className="px-6 py-4">
              {faqData?.LesionIllness?.main_lesion
                ? faqData.LesionIllness.main_lesion.map((item) => `- ${item.type} `)
                : "No Data"}
            </td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Secondary lesion</th>
            <td className="px-6 py-4">
              {faqData?.LesionIllness?.secondary_lesion
                ? faqData.LesionIllness.secondary_lesion.map((item) => `- ${item.type} `)
                : "No Data"}
            </td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Previous Photo</th>
            <td className="px-6 py-4">
              <button
                className={`block w-1/3 my-1 m-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${isDark ? "dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" : ""}`}
                onClick={() => setShowPrev(true)}
              >
                View Previous
              </button>
            </td>
          </tr>

          {showPrev && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
              <div className="relative bg-black rounded-lg shadow-lg w-fit">
                <button onClick={() => setShowPrev(false)} className="absolute top-2 right-2 text-white text-2xl">
                  &times;
                </button>
                <div className=" w-11/12 h-1/3 center">
                  <img src={url + `/${faqData?.IllnessPhotos[0].url}`} className="w-full h-auto rounded" />
                </div>
              </div>
            </div>
          )}

          <tr className={RowStyle}>
            <th className={ThStyle}>Current Photo</th>
            <td className="px-6 py-4">
              <button
                className={`block w-1/3 my-1 m-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${isDark ? "dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" : ""}`}
                onClick={() => setShowCurrent(true)}
              >
                View Current
              </button>
            </td>
          </tr>

          {showCurrent && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
              <div className="relative bg-black rounded-lg shadow-lg w-fit">
                <button onClick={() => setShowCurrent(false)} className="absolute top-2 right-2 text-white text-2xl">
                  &times;
                </button>
                <div className=" w-11/12 h-1/3 center ">
                  <img src={url + `/${faqData?.IllnessPhotos[1].url}`} className="w-full h-auto rounded" />
                </div>
              </div>
            </div>
          )}

          <tr className={RowStyle}>
            <th className={ThStyle}>XRay Photo</th>
            <td className="px-6 py-4">
              <button
                className={`block w-1/3 my-1 m-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${isDark ? "dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" : ""}`}
                onClick={() => setShowXray(true)}
              >
                View XRay
              </button>
            </td>
          </tr>

          {showXray && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
              <div className="relative bg-black rounded-lg shadow-lg w-fit">
                <button onClick={() => setShowXray(false)} className="absolute top-2 right-2 text-white text-2xl">
                  &times;
                </button>
                <div className=" w-11/12 h-1/3 center">
                  <img src={url + `/${faqData?.IllnessPhotos[2].url}`} className="w-full h-auto rounded" />
                </div>
              </div>
            </div>
          )}

          <tr className={RowStyle}>
            <th className={ThStyle}>Notes</th>
            <td className="px-6 py-4">{faqData?.notes ? "Exists" : "No Data"}</td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Picture 1</th>
            <td className="px-6 py-4"><Modal data="first" /></td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Picture 2</th>
            <td className="px-6 py-4"><Modal data="second" /></td>
          </tr>

          {/* Sinbad Section */}
          <tr className={RowStyle}>
            <th className={ThStyle}>Site</th>
            <td className="px-6 py-4">
              {faqData?.Sinbad
                ? faqData.Sinbad.site === false
                  ? "ForeFoot"
                  : "MidFoot or HindFoot"
                : "No Data"}
            </td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Area Ulcer</th>
            <td className="px-6 py-4">
              {faqData?.Sinbad
                ? faqData.Sinbad.area_ulcer === false
                  ? "<1cm²"
                  : ">1cm²"
                : "No Data"}
            </td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Bacterial Infection</th>
            <td className="px-6 py-4">
              {faqData?.Sinbad
                ? faqData.Sinbad.bacterial_infection === false
                  ? "None"
                  : "Present"
                : "No Data"}
            </td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Depth</th>
            <td className="px-6 py-4">
              {faqData?.Sinbad
                ? faqData.Sinbad.depth === false
                  ? "Skin, subcutaneous tissue"
                  : "Ulcer reaching muscle, tendon or deeper"
                : "No Data"}
            </td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Ischemia</th>
            <td className="px-6 py-4">
              {faqData?.Sinbad
                ? faqData.Sinbad.ischemia === false
                  ? "Pedal blood flow intact: at least one pulse palpable"
                  : "Clinical evidence of reduced pedal blood flow"
                : "No Data"}
            </td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Neuropath</th>
            <td className="px-6 py-4">
              {faqData?.Sinbad
                ? faqData.Sinbad.neropath === false
                  ? "Protective sensation intact"
                  : "Protective sensation lost"
                : "No Data"}
            </td>
          </tr>

          <tr className={RowStyle}>
            <th className={ThStyle}>Disability</th>
            <td className="px-6 py-4">{faqData?.disability || "No Data"}</td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Gait Analysis</th>
            <td className="px-6 py-4">{faqData?.gate_analysis || "No Data"}</td>
          </tr>

          {/* Vascular */}
          <tr className={RowStyle}>
            <th className={ThStyle}>Left ABI</th>
            <td className="px-6 py-4">{faqData?.VascularStatus?.labi || "No Data"}</td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Right ABI</th>
            <td className="px-6 py-4">{faqData?.VascularStatus?.rabi || "No Data"}</td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Left Dorsalis Pedis Pulse</th>
            <td className="px-6 py-4">{faqData?.VascularStatus?.ldp || "No Data"}</td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Left Dorsalis Pedis Doppler</th>
            <td className="px-6 py-4">{faqData?.VascularStatus?.ldd || "No Data"}</td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Right Dorsalis Pedis Pulse</th>
            <td className="px-6 py-4">{faqData?.VascularStatus?.rdp || "No Data"}</td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Right Dorsalis Pedis Doppler</th>
            <td className="px-6 py-4">{faqData?.VascularStatus?.rdd || "No Data"}</td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Left Posterior Tibial Pulse</th>
            <td className="px-6 py-4">{faqData?.VascularStatus?.lpp || "No Data"}</td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Left Posterior Tibial Doppler</th>
            <td className="px-6 py-4">{faqData?.VascularStatus?.lpd || "No Data"}</td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Right Posterior Tibial Pulse</th>
            <td className="px-6 py-4">{faqData?.VascularStatus?.rpp || "No Data"}</td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Right Posterior Tibial Doppler</th>
            <td className="px-6 py-4">{faqData?.VascularStatus?.rpd || "No Data"}</td>
          </tr>

          {/* Infection */}
          <tr className={RowStyle}>
            <th className={ThStyle}>Clinical Classification</th>
            <td className="px-6 py-4">
              {faqData?.Infection?.ClinicalClassifications
                ? faqData.Infection.ClinicalClassifications.map((item) => `- ${item.type} `)
                : "No Data"}
            </td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Infection</th>
            <td className="px-6 py-4">{faqData?.Infection?.exists?.toString() || "No Data"}</td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Finger</th>
            <td className="px-6 py-4">{faqData?.Infection?.finger || "No Data"}</td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>IWGDF Classification</th>
            <td className="px-6 py-4">{faqData?.Infection?.iwgdf_classification || "No Data"}</td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Leg</th>
            <td className="px-6 py-4">
              {faqData?.Infection?.leg
                ? faqData.Infection.leg === "r"
                  ? "Right"
                  : "Left"
                : "No Data"}
            </td>
          </tr>

          {/* Nervous */}
          <tr className={RowStyle}>
            <th className={ThStyle}>Thermo</th>
            <td className="px-6 py-4">
              {faqData?.NervousStatus
                ? `${faqData.NervousStatus.thermo}, ${faqData.NervousStatus.thermo_check}`
                : "No Data"}
            </td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Mino</th>
            <td className="px-6 py-4">
              {faqData?.NervousStatus
                ? `${faqData.NervousStatus.mino}, ${faqData.NervousStatus.mino_check}`
                : "No Data"}
            </td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Neuro</th>
            <td className="px-6 py-4">
              {faqData?.NervousStatus
                ? `${faqData.NervousStatus.neuro}, ${faqData.NervousStatus.neuro_check}`
                : "No Data"}
            </td>
          </tr>

          {/* Deformity */}
          <tr className={RowStyle}>
            <th className={ThStyle}>Right Deformity</th>
            <td className="px-6 py-4">
              {faqData?.right_deformity
                ? faqData.right_deformity.map((item) => item.type).join(", ")
                : "No Data"}
            </td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Left Deformity</th>
            <td className="px-6 py-4">
              {faqData?.left_deformity
                ? faqData.left_deformity.map((item) => item.type).join(", ")
                : "No Data"}
            </td>
          </tr>
        </tbody>
      </table>

      {/* Plan of Management */}
      <h5 className="text-2xl font-bold bg-emerald-700 text-white px-4 py-2 mt-6 rounded-t-lg">
        The Plan of Management
      </h5>
      <table className="w-full text-sm text-left">
        <tbody>
          <tr className={RowStyle}>
            <th className={ThStyle}>Laboratory Tests</th>
            <td className="px-6 py-4">
              {PlanOfManagment?.LabratoryTests
                ? PlanOfManagment.LabratoryTests.map((item) => item.type).join(", ")
                : "No Data"}
            </td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Next Visit</th>
            <td className="px-6 py-4">{PlanOfManagment?.next_visit || "No Data"}</td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Notes</th>
            <td className="px-6 py-4">{PlanOfManagment?.notes || "No Data"}</td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Prescription IV</th>
            <td className="px-6 py-4">{PlanOfManagment?.prescription_iv || "No Data"}</td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Prescription PO</th>
            <td className="px-6 py-4">{PlanOfManagment?.prescription_po || "No Data"}</td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Status</th>
            <td className="px-6 py-4">{PlanOfManagment?.status || "No Data"}</td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Technique</th>
            <td className="px-6 py-4">
              {PlanOfManagment?.technique
                ? `${PlanOfManagment.technique.tech}, ${PlanOfManagment.technique.text}`
                : "No Data"}
            </td>
          </tr>
        </tbody>
      </table>

      {/* Recommendation */}
      <h5 className="text-2xl font-bold bg-emerald-700 text-white px-4 py-2 mt-6 rounded-t-lg">
        Recommendation
      </h5>
      <table className="w-full text-sm text-left">
        <tbody>
          <tr className={RowStyle}>
            <th className={ThStyle}>Consultation</th>
            <td className="px-6 py-4">{Recommendation?.consultation || "No Data"}</td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Continue Shoes</th>
            <td className="px-6 py-4">{Recommendation?.continue_shoes || "No Data"}</td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Hospitalization</th>
            <td className="px-6 py-4">{Recommendation?.hospitalization || "No Data"}</td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>New Shoes</th>
            <td className="px-6 py-4">{Recommendation?.new_shoes || "No Data"}</td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Physical Therapy</th>
            <td className="px-6 py-4">{Recommendation?.physical_therapy || "No Data"}</td>
          </tr>
        </tbody>
      </table>

      {/* Related Consultations */}
      <h5 className="text-2xl font-bold bg-emerald-700 text-white px-4 py-2 mt-6 rounded-t-lg">
        Related Consultations
      </h5>
      <table className="w-full text-sm text-left">
        <tbody>
          <tr className={RowStyle}>
            <th className={ThStyle}>Consultor Name</th>
            <td className="px-6 py-4">{RelatedConsultation?.consultor_name || "No Data"}</td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Last Cons Date</th>
            <td className="px-6 py-4">{RelatedConsultation?.last_cons_date || "No Data"}</td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Need Of Vascular</th>
            <td className="px-6 py-4">{RelatedConsultation?.need_of_vascular || "No Data"}</td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Other</th>
            <td className="px-6 py-4">{RelatedConsultation?.other || "No Data"}</td>
          </tr>
          <tr className={RowStyle}>
            <th className={ThStyle}>Vascular Procedure</th>
            <td className="px-6 py-4">{RelatedConsultation?.vascular_precedure || "No Data"}</td>
          </tr>
        </tbody>
      </table>

      {/* ReChecks */}
      {FAQ?.ReChecks?.length > 0 && (
        <div className="mt-6">
          {FAQ.ReChecks.slice()
            .sort((a, b) => a.id - b.id)
            .map((recheck) => (
              <ShowRechecks key={recheck.id} RecheckData={recheck} />
            ))}
        </div>
      )}
    </div>
  );
};

export default ShowFaq;