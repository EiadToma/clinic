import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPatients, PatientsData,fetchTodayPatients } from "../redux/PatientSlice";
import Table from "../Components/Doctor/Table";
import { getHistoryLists, getFaq } from "../redux/FaqSlice";
import Loading from "../Components/Loading";
import SearchSection from "../Components/SearchSection";

const Patients = () => {
  const dispatch = useDispatch();
  const [selectedFilter, setSelectedFilter] = useState("allPatients");
  const data = useSelector(PatientsData);
  const searchData = useSelector((state) => state.user.searchResult?.data);
  const todayPatients = useSelector(state=>state.patient.todayPatients)
  const mode = useSelector(state=>state.user.Mode)
  
  useEffect(() => {
    dispatch(getPatients());
    dispatch(fetchTodayPatients())
    dispatch(getHistoryLists());
    dispatch(getFaq());
  }, [dispatch]);

  // Determine which data to display based on the selected filter
  const displayedData = searchData 
    ? searchData :
    selectedFilter ==='today'?
    todayPatients.data?.data:
    data?.data;

  return (
    <>
      <div className="container">
        {/* Filter section */}
        <div className="flex justify-center m-auto mb-4">
          <div className={`${mode==='dark'?'bg-gray-600':'bg-gray-100'} p-2 rounded-md shadow-md flex space-x-4`}>
            <div
              className={`cursor-pointer px-4 py-2 rounded-md ${
                selectedFilter === "today" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setSelectedFilter("today")}
            >
              Today
            </div>
            <div
              className={`cursor-pointer px-4 py-2 rounded-md ${
                selectedFilter === "allPatients" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setSelectedFilter("allPatients")}
            >
              All Patients
            </div>
          </div>
        </div>

        <SearchSection />
        {!data && <Loading />}
        {data && <Table data={displayedData} />}
      </div>
    </>
  );
};

export default Patients;
