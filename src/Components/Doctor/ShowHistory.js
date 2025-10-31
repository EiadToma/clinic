import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPatientData } from "../../redux/PatientSlice";
import Loading from "../Loading";
import ShowFaq from "./ShowFaq";

const ShowHistory = () => {
  const [General, setGeneral] = useState(true);
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.user.Mode);
  const id = useSelector((state) => state.patient.patient.id);
  const patientInfo = useSelector((state) => state.patient.patientInfo);
  const loading = patientInfo.isLoading;

  let HistoryData = patientInfo.data?.MedicalHistory || {};
  if (HistoryData == null) HistoryData = {};

  useEffect(() => {
    if (id) dispatch(getPatientData(id));
  }, [dispatch, id]);

  const isDark = mode === "dark";
  const RowStyle = `${isDark ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"} border-b border-gray-300`;
  const ThStyle = `px-6 py-4 ${isDark ? "text-cyan-300" : "text-cyan-700"} font-semibold w-1/2 whitespace-nowrap`;

  if (loading) return <Loading />;

  return (
    <div className="w-full flex flex-col items-center">
      <div
        className={`${isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"} 
        w-11/12 rounded-lg shadow-lg border border-cyan-600 overflow-hidden`}
      >
        {/* Header */}
        <div
          className={`w-full flex justify-between items-center px-6 py-4 border-b 
          ${isDark ? "border-cyan-700" : "border-cyan-500"} bg-cyan-600/10`}
        >
          <h3 className="text-3xl font-bold text-cyan-600">General History</h3>
          <button
            onClick={() => setGeneral(!General)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition 
              ${isDark
                ? "bg-cyan-700 text-white hover:bg-cyan-600"
                : "bg-cyan-500 text-white hover:bg-cyan-600"}`}
          >
            {General ? "Hide" : "Show"}
          </button>
        </div>

        {/* Collapsible Section */}
        <div
          style={{
            maxHeight: General ? "1000px" : "0",
            transition: "max-height 0.5s ease-in-out",
            overflow: "hidden",
          }}
        >
          <table className="w-full text-sm text-left">
            <tbody>
              <tr className={RowStyle}>
                <th className={ThStyle}>Since-DM</th>
                <td className="px-6 py-4">
                  {HistoryData?.SinceDM
                    ? `${HistoryData.SinceDM.number}, ${HistoryData.SinceDM.number}`
                    : "No Data"}
                </td>
              </tr>
              <tr className={RowStyle}>
                <th className={ThStyle}>HTN</th>
                <td className="px-6 py-4">{HistoryData?.htn?.toString() || "No Data"}</td>
              </tr>
              <tr className={RowStyle}>
                <th className={ThStyle}>Renal impair</th>
                <td className="px-6 py-4">{HistoryData?.renal_impair?.toString() || "No Data"}</td>
              </tr>
              <tr className={RowStyle}>
                <th className={ThStyle}>Smoking</th>
                <td className="px-6 py-4">{HistoryData?.smoking?.toString() || "No Data"}</td>
              </tr>
              <tr className={RowStyle}>
                <th className={ThStyle}>Hyperlipemia</th>
                <td className="px-6 py-4">{HistoryData?.hyperlipidemia?.toString() || "No Data"}</td>
              </tr>
              <tr className={RowStyle}>
                <th className={ThStyle}>Others</th>
                <td className="px-6 py-4">{HistoryData?.others || "No Data"}</td>
              </tr>
              <tr className={RowStyle}>
                <th className={ThStyle}>Surgical history</th>
                <td className="px-6 py-4">{HistoryData?.surgical_history || "No Data"}</td>
              </tr>
              <tr className={RowStyle}>
                <th className={ThStyle}>Amputations</th>
                <td className="px-6 py-4">
                  {HistoryData?.Amputations
                    ? HistoryData.Amputations.map((item) => `- ${item.type} `)
                    : "No Data"}
                </td>
              </tr>
              <tr className={RowStyle}>
                <th className={ThStyle}>Previous DVT</th>
                <td className="px-6 py-4">{HistoryData?.previous_dvt || "No Data"}</td>
              </tr>
              <tr className={RowStyle}>
                <th className={ThStyle}>Previous Surgery</th>
                <td className="px-6 py-4">{HistoryData?.previous_surgery || "No Data"}</td>
              </tr>
              <tr className={RowStyle}>
                <th className={ThStyle}>Disabled</th>
                <td className="px-6 py-4">{HistoryData?.disabled?.toString() || "No Data"}</td>
              </tr>
              <tr className={RowStyle}>
                <th className={ThStyle}>Allergic</th>
                <td className="px-6 py-4">{HistoryData?.allergic?.toString() || "No Data"}</td>
              </tr>
              <tr className={RowStyle}>
                <th className={ThStyle}>CardioVascular</th>
                <td className="px-6 py-4">
                  {HistoryData?.CardiovascularDrugs
                    ? HistoryData.CardiovascularDrugs.map((item) => `- ${item.name} `)
                    : "No Data"}
                </td>
              </tr>
              <tr className={RowStyle}>
                <th className={ThStyle}>AntiCougualent</th>
                <td className="px-6 py-4">
                  {HistoryData?.AnticougualentDrugs
                    ? HistoryData.AnticougualentDrugs.map((item) => `- ${item.name} `)
                    : "No Data"}
                </td>
              </tr>
              <tr className={RowStyle}>
                <th className={ThStyle}>Diabetes Drugs</th>
                <td className="px-6 py-4">
                  {HistoryData?.DiabetesDrugs
                    ? HistoryData.DiabetesDrugs.map((item) => `- ${item.name} `)
                    : "No Data"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Previous Cases Section */}
        <div className={`px-6 py-4 mt-6 border-t ${isDark ? "border-cyan-700" : "border-cyan-500"}`}>
          <h3 className="text-3xl font-bold text-cyan-600 mb-4">Previous Cases</h3>
          <div className="flex flex-col gap-3">
            {patientInfo.data?.Cases?.length > 0 ? (
              [...patientInfo.data.Cases]
                .sort((a, b) => a.id - b.id)
                .map((caseItem, index) => (
                  <ShowFaq key={caseItem.id} FAQ={caseItem} index={index} />
                ))
            ) : (
              <p className={`${isDark ? "text-gray-400" : "text-gray-500"}`}>No cases available.</p>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowHistory;
