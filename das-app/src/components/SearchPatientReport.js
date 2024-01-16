import React,{useState} from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
function SearchPatientReport(){
    
    
    const [patientReport, setPatientReport] = useState(null);
    const [message, setMessage] = useState("");
    const user = JSON.parse(localStorage.getItem("mytoken"));
   
    const handleSubmit = () => {
        //api call
        axios.get(`http://localhost:8081/ipatientreport/${user.patientId}`).then(resp => setPatientReport(resp.data))
        .catch(error =>{
              setPatientReport(null);
              setMessage(error.response.data) 
            })
    }
 return(
  
    <div align= "center" class="jumbotron">
        <h2>Search Patient Report</h2>
     {/* <div> 
        <label>Enter Patient Id:</label>
        <input type="text" name="patientId" value={patientId}
        onChange={(event) => setPatientId(event.target.value)}/>
     </div> */}

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
  )

}
export default SearchPatientReport;