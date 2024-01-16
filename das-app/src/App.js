import React from "react";
import "./App.css";


import './Styles/updatedoctor.css';
import Navbar from "./components/Navbar";
import DoctorLogin from "./components/DoctorLogin";
import AddDoctor from "./components/AddDoctor";
import PatientDashBoard from "./components/PatientDashboard";
import PatientLogin from "./components/PatientLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import DoctorDashBoard from "./components/DoctorDashboard";
import PatientDetails from "./components/PatientDetails";
import Bookappointment from "./components/Bookappointment";
import AddPatient from "./components/AddPatient";
import ViewDoctorDetails from "./components/ViewDoctorDetails";
import GetAppointmentByDate from "./components/GetAppointmentByDate";
import FooterForAll from "./components/FooterForAll";
import Footer from "./components/Footer";
import ByPatientId from "./components/ByPatientId";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Navbar /> */}
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/doctor/login" element={<DoctorLogin />}></Route>
          <Route path="/doctor/add" element={<AddDoctor />} />
          <Route path="/patient/save" element={< AddPatient/>} />
          <Route path="/*" element={<DoctorDashBoard />}></Route>
          <Route
            path="/PatientDetails/:id"
            exact
            element={<PatientDetails />}
          ></Route>
          <Route path="/patient/*" element={<PatientDashBoard />}></Route>
          <Route path="/patient/login" element={<PatientLogin />}></Route>
          <Route
            path="/doctor/appointment/:doctorId"
            exact
            element={<Bookappointment />}
          ></Route>

          

          
          
          <Route
            path="/doctor/details/:did"
            exact
            element={<ViewDoctorDetails />}
          ></Route>
           <Route
            path="/GetAppointmentByDate"
            exact
            element={<GetAppointmentByDate />}
          ></Route>
        </Routes>
      </BrowserRouter>
      {/* <Footer/> */}
      {/* <FooterForAll/> */}
    </div>
  );
}

export default App;
