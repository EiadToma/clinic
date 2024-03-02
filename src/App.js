import './App.css';
import NewCase from './Pages/NewCase';
import Patient_create from './Pages/Patient_create';
import Home from './Pages/Home';
import Header from './Components/Header';
import Navbar from './Components/Navbar'
import Login from './Pages/Login';
import User_create from './Pages/User_create';
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Patient_review from './Pages/Patient_review';

<Header/> 

function App() {
  return (
    <BrowserRouter>
      <Header/>
    <div className="App">
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/patients" element={<Home/>}/>
    <Route path="patientcreate" element={<Patient_create/>} />
    <Route path="usercreate" element={<User_create/>} />
    <Route path='/patients/:id/case' element={<NewCase/>}/>
    <Route path='/patients/:id/faq' element={<Patient_review/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
