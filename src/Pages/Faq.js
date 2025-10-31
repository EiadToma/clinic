import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendFaqReq } from "../redux/FaqSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getHistoryLists, getFaq } from "../redux/FaqSlice";
import PresentIllness from "../Components/Doctor/PresentIllness";
import Related from "../Components/Doctor/Related";
import Recommendation from "../Components/Doctor/Recommendation";
import Management from "../Components/Doctor/Management";
import SuccessToaster from "../Components/SuccessToaster";

const Faq = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.faq);
  const [notification, setNotification] = useState(null);
  const {id} = useParams()
  
  useEffect(() => {
        dispatch(getHistoryLists());
        dispatch(getFaq());
  }, [dispatch]);


  // Function to handle form submission
  const sendFaq = async () => {
    const form = new FormData();
    const related_consultation = JSON.stringify(state.consultations);
    const plan_of_managment = JSON.stringify(state.managment);
    const recommendation = JSON.stringify(state.recommendation);
    const present = state.present_illness;
    const str = JSON.stringify(present);

    form.append("present_illness_x_ray", state.present_illness_x_ray);
    form.append("present_illness_previous", state.present_illness_previous);
    form.append("present_illness_current", state.present_illness_current);
    form.append("present_illness", str);
    form.append("related_consultation", related_consultation);
    form.append("related_consultation_attachment", state.related_consultation_attachment);
    form.append("plan_of_managment", plan_of_managment);
    form.append("recommendation", recommendation);

    const result = await dispatch(sendFaqReq({ form, id }));
    if (result.meta?.requestStatus === "fulfilled") {
      setNotification({ type: "success", message: "FAQ case created!" });
    } else {
      const { status, message } = result.payload;
      setNotification({
        type: "error",
        message: `Error ${status}: ${message}`,
      });
    }

    setTimeout(() => setNotification(null), 5000);
  };

  return (
    <div className="container">
      <div className="title-section sm:w-full">
        <p className="section-title">Frequently Asked Questions</p>
      </div>

      <PresentIllness />
      <div className="media">
        <Management />
        <Related />
        <Recommendation />
      </div>

      {notification && (
        <SuccessToaster
          title={
            notification.type === "success"
              ? notification.message
              : `Error: ${notification.message}`
          }
          color={notification.type === "success" ? "green" : "red"}
        />
      )}

      <div className="m-9">
        <button className="Submit-btn" onClick={sendFaq}>
          Save patient Info
        </button>
      </div>
    </div>
  );
};

export default Faq;
