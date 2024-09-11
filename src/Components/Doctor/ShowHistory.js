import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCases, getHistory,getPatientData } from "../../redux/PatientSilce";
import ShowFaq from "./ShowFaq";

const ShowHistory = () => {
  const [General, setGeneral] = useState(true);
  const [cases, setCases] = useState(true);

  const dispatch = useDispatch();
  const mode = useSelector((state) => state.user.Mode);
  const id = useSelector((state) => state.patient.patient.id);
  const CasesData = useSelector((state) => state.patient.patient.cases?.data);
  const patientInfo = useSelector((state) => state.patient.patientInfo);
  const wtf = useSelector((state) => state.patient);

  let HistoryData;
  patientInfo.data ? (HistoryData = patientInfo.data?.MedicalHistory) : (HistoryData = {});
  if (HistoryData==null)
    HistoryData={}
  console.log(patientInfo);

  useEffect(() => {
    dispatch(getPatientData(id))
    dispatch(getCases(id));
  }, [dispatch, id]);

  const generalRef = useRef(null);
  const casesRef = useRef(null);

  const RowStyle = `${mode === "dark" ? "bg-gray-800" : "text-black bg-white"} border-b border-gray-700`;
  const ThStyle = `px-6 py-4 ${mode === "dark" ? "text-white" : "text-gray-900"} w-1/2 font-medium whitespace-nowrap`;

  const getHeight = (ref) => (ref.current ? `${ref.current.scrollHeight}px` : "0px");

  return (
    <div>
      <div className={`${mode === "dark" ? "bg-sky-900" : "bg-gray-50"} relative w-11/12 m-auto text-center`}>
        <div className="w-full flex flex-row justify-between items-center border border-sky-500 ">
          <h3 className="text-4xl font-bold text-cyan-600">General History</h3>
          <div
            onClick={() => setGeneral(!General)}
            className="cursor-pointer text-lg font-semibold text-white py-2 px-4 rounded-md transition duration-300"
          >
            {General ? "Hide" : "Show"}
          </div>
        </div>
        <div
          ref={generalRef}
          style={{
            height: General ? getHeight(generalRef) : "0px",
            transition: "max-height 0.5s ease-in-out",
            overflow: "hidden",
          }}
        >
          <table className={`${mode === "dark" ? "text-gray-400" : "text-gray-500"} w-full m-auto text-sm text-left rtl:text-right`}>
            <tbody>
              <tr className={RowStyle}>
                <th className={ThStyle}>Since-Dm</th>
                <td className="px-6 py-4">{HistoryData?.SinceDM ? HistoryData.SinceDM.number + "," + HistoryData.SinceDM.number : "no Data"}</td>
              </tr>
              <tr className={RowStyle}>
                <th className={ThStyle}>HTN</th>
                <td className="px-6 py-4">    {HistoryData?.htn === undefined ? "no Data" : HistoryData.htn.toString()} </td>
              </tr>
              <tr className={RowStyle}>
                <th className={ThStyle}>Renal impair</th>
                <td className="px-6 py-4">{HistoryData?.renal_impair === undefined ? "no Data" : HistoryData.renal_impair.toString()}</td>
              </tr>
              <tr className={RowStyle}>
                <th className={ThStyle}>Smoking</th>
                <td className="px-6 py-4">{HistoryData?.smoking === undefined ? "no Data" : HistoryData.smoking.toString()} </td>
              </tr>
              <tr className={RowStyle}>
                <th className={ThStyle}>Hyperlipemia</th>
                <td className="px-6 py-4">{HistoryData?.hyperlipidemia === undefined ? "no Data" : HistoryData.hyperlipidemia.toString()} </td>
              </tr>
              <tr className={RowStyle}>
                <th className={ThStyle}>Others</th>
                <td className="px-6 py-4">{HistoryData?.others ? `${HistoryData.others}` : "no Data"}</td>
              </tr>
              <tr className={RowStyle}>
                <th className={ThStyle}>Surgical history</th>
                <td className="px-6 py-4">{HistoryData?.surgical_history ? HistoryData.surgical_history : "no Data"}</td>
              </tr>
              <tr className={RowStyle}>
                <th className={ThStyle}>Amputations</th>
                <td className="px-6 py-4">{HistoryData?.Amputations ? HistoryData.Amputations?.map((item) => `- ${item.type} `) : "no Data"}</td>
              </tr>
              <tr className={RowStyle}>
                <th className={ThStyle}>Previous DVT</th>
                <td className="px-6 py-4">{HistoryData?.previous_dvt ? HistoryData.previous_dvt : "no Data"}</td>
              </tr>
              <tr className={RowStyle}>
                <th className={ThStyle}>Previous Surgery</th>
                <td className="px-6 py-4">{HistoryData?.previous_surgery ? HistoryData.previous_surgery : "no Data"}</td>
              </tr>
              <tr className={RowStyle}>
                <th className={ThStyle}>Disabled</th>
                <td className="px-6 py-4">{HistoryData?.disabled === undefined ? "no Data" : HistoryData.disabled.toString()}</td>
              </tr>
              <tr className={RowStyle}>
                <th className={ThStyle}>Allergic</th>
                <td className="px-6 py-4">{HistoryData?.allergic === undefined ? "no Data" : HistoryData.allergic.toString()}</td>
              </tr>
              <tr className={RowStyle}>
                <th className={ThStyle}>CardioVascular</th>
                <td className="px-6 py-4">{HistoryData ? HistoryData.CardiovascularDrugs?.map((item) => `- ${item.name} `) : "no Data"}</td>
              </tr>
              <tr className={RowStyle}>
                <th className={ThStyle}>AntiCougualent</th>
                <td className="px-6 py-4">{HistoryData ? HistoryData.AnticougualentDrugs?.map((item) => `- ${item.name} `) : "no Data"}</td>
              </tr>
              <tr className={RowStyle}>
                <th className={ThStyle}>Diabites Drugs</th>
                <td className="px-6 py-4">{HistoryData ? HistoryData.DiabetesDrugs?.map((item) => `- ${item.name} `) : "no Data"}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full flex flex-row justify-between items-center">
          <h3 className="text-4xl font-bold text-cyan-600">Previous Cases</h3>
          <div
            onClick={() => setCases(!cases)}
            className="cursor-pointer text-lg font-semibold  text-white py-2 px-4 rounded-md  transition duration-300"
          >
            {cases ? "Hide" : "Show"}
          </div>
        </div>
        <div
          ref={casesRef}
          style={{
            height: cases ? getHeight(casesRef) : "0px",
            transition: "max-height 0.5s ease-in-out",
            overflow: "hidden",
          }}
        >
          <div className="w-full flex flex-col">
            {/* add for loop for the cases number and render each one */}
            {patientInfo.data?.Cases?.slice().sort((a, b) => a.id - b.id).map(caseItem => (
            <ShowFaq key={caseItem.id} FAQ={caseItem} />
          ))}
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default ShowHistory;
