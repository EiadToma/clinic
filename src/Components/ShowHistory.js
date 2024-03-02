import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getHistory } from "../redux/PatientSilce"
const ShowHistory = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
dispatch(getHistory())
  })
  return (
  <div>
    <div>
    <table className="table">
      <thead>
        <tr className="table-row">
        <th className="table-header">General History</th>
        </tr>
      </thead>
      <tbody>
        <tr className="table-row row" >
          <td className="table-header cell">Since-Dm</td>
          <td className="table-header cell">no data</td>
        </tr>
        <tr className="table-row row" >
          <td className="table-header cell">HTN</td>
          <td className="table-header cell"></td>
        </tr>
        <tr className="table-row row" >
          <td className="table-header cell">Renal impair</td>
          <td className="table-header cell"></td>
        </tr>
        <tr className="table-row row" >
          <td className="table-header cell">Smoking</td>
          <td className="table-header cell"></td>
        </tr>
        <tr className="table-row row" >
          <td className="table-header cell">Hyperlipemia</td>
          <td className="table-header cell"></td>
        </tr>
        <tr className="table-row row" >
          <td className="table-header cell">Others</td>
          <td className="table-header cell"></td>
        </tr>
        <tr className="table-row row" >
          <td className="table-header cell">Surgical history</td>
          <td className="table-header cell"></td>
        </tr>
        <tr className="table-row row" >
          <td className="table-header cell">Amputaion</td>
          <td className="table-header cell"></td>
        </tr>
        <tr className="table-row row" >
          <td className="table-header cell">Previous DVT</td>
          <td className="table-header cell"></td>
        </tr>
        <tr className="table-row row" >
          <td className="table-header cell">Previous Surgery</td>
          <td className="table-header cell"></td>
        </tr>
        <tr className="table-row row" >
          <td className="table-header cell">Disabled</td>
          <td className="table-header cell"></td>
        </tr>
        <tr className="table-row row" >
          <td className="table-header cell">Allergic</td>
          <td className="table-header cell"></td>
        </tr>
        <tr className="table-row row" >
          <td className="table-header cell">cardiovascular</td>
          <td className="table-header cell"></td>
        </tr>
        <tr className="table-row row" >
          <td className="table-header cell">anticough</td>
          <td className="table-header cell"></td>
        </tr>
        <tr className="table-row row" >
          <td className="table-header cell">insulin</td>
          <td className="table-header cell"></td>
        </tr>
        </tbody>
      </table>
      </div>
      <div>
      Old visits history
      </div>
    </div>
  )
}

export default ShowHistory