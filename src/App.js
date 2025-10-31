import './App.css';
import NewCase from './Pages/NewCase';
import Patient_create from './Pages/Patient_create';
import Home from './Pages/Home';
import Header from './Components/Header';
import Login from './Pages/Login';
import Secertaria from './Pages/Secertaria';
import SecertariaTabel from './Components/Secertaria/SecertariaTabel';
import ShowHistory from './Components/Doctor/ShowHistory'
import PatientAppointments from './Components/Secertaria/PatientAppointments';
import User_create from './Pages/User_create';
import FullSearch from './Pages/FullSearch'
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Patient_review from './Pages/Patient_review';
import Nav from './Components/Nav';
import SecertariaNav from './Components/Secertaria/SecertariaNav';
function App() {
  

  return (
    <BrowserRouter >
      <Header/>
      <Nav />
      <SecertariaNav/>
    <div className="App bg-test" >
    <Routes>
    <Route path="/clinic" element={<Login/>}/>
    <Route path="/patients" element={<Home/>}/> 
    <Route path='/secertariatabel' element={<SecertariaTabel/>} />
    <Route path='/secertariatabel/:id/details' element={<PatientAppointments/>} />
    <Route path="patientcreate" element={<Patient_create/>} />
    <Route path="usercreate" element={<User_create/>} />
    <Route path="secertaria" element={<Secertaria/>} />
    <Route path="full-search" element={<FullSearch/>} />
    <Route path='/patients/:id/case' element={<NewCase/>}/>
    <Route path='/patients/:id/faq' element={<Patient_review/>}/>
    <Route path='/patients/:id/history' element={<ShowHistory/>}/>

    </Routes>
    </div>
    </BrowserRouter> 
  );
}

export default App;
