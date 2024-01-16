import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import { fetchPatientReportAction } from '../store/actions/PatientReportActions';


function SearchPatientReport() {

   const [patientId, setPatientId] = useState("");
   const dispatch = useDispatch();
   const patientReport = useSelector(state => state.patientReportReducer.patientReport);
   const [message, setMessage] = useState("");


   const handleSubmit = () => {
      //api call
      dispatch(fetchPatientReportAction(patientId))
   }
   return (
      <div class="bg-img">
      <div align="center" class="jumbotron">
         <h2>Search Patient Report</h2>

         <div>
            <label>Enter Patient Id:</label>
            <input type="text" name="patientId" value={patientId}
               onChange={(event) => setPatientId(event.target.value)} />
         </div>

         <button onClick={handleSubmit}>Search</button>

         {
            patientReport !== null &&
            <div>
               <h2>Patient Report Details</h2>

               <p><b>Date:</b> {patientReport.reportDate}</p>
               <p><b>Doctor Id:</b>{patientReport.doctorId}</p>


               {/* <p>Doctor Name: {patientReport.doctorName}</p> */}


               <p><b>Patient Name:</b> {patientReport.patient.patientName}</p>

               <p><b>Patient Gender: </b>{patientReport.patient.gender}</p>

               <p><b>Patient weight: </b>{patientReport.patient.weight}</p>
               <p><b>Blood Group:</b> {patientReport.bloodGroup}</p>

               <p><b>Patient Issue:</b> {patientReport.patientIssue}</p>
               <p><b>Prescription:</b> {patientReport.prescription}</p>


            </div>
            // :<h3>{message}</h3>
         }
         

      </div>
      </div>
   )

}
export default SearchPatientReport;