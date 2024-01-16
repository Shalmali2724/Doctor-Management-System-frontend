import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function AddPatientReport() {

    const [rDate, setrDate] = useState("");
    const [pId, setpId] = useState("");
    const [dId, setdId] = useState("");
    const [bGroup, setbGroup] = useState("");
    const [pIssue, setpIssue] = useState("");
    const [pres, setpres] = useState("");
    const [patientReport,setPatientReport]=useState("");
    const user = JSON.parse(localStorage.getItem("mytoken"));
    const[formErrors, setFormErrors] = useState({});

    const handleSubmit = () => {

    //     let errors = {};

    //     if (!rDate) { 
    //         errors['rDateError'] = "Report Date is required."
    //      }
    //      if (!pId) {
    //         errors['pIdError'] = "Patient Id is required." 
    //     }
    //    if (!dId) {
    //     errors['dIdError'] = "Doctor Id is required."
    //        }
    //    if (!bGroup) {
    //      errors['bGroupError'] = "Blood Group is required."
    //     }
    //      if (!pIssue) {
    //         errors['pIssueError'] = "Patient Issue is required."
    //      }
    //      if (!pres) { 
    //         errors['presError'] = "Prescription is required."
    //      }
    //      setFormErrors(errors);
    //      const noErrors = Object.keys(errors).length === 0;
        
    // if(noErrors)
    // {
        
        const payload = {

            reportDate: rDate,
            patientId: pId,
            doctorId: user.doctorId,
            bloodGroup: bGroup,
            patientIssue: pIssue,
            prescription: pres

        }
        axios.post("http://localhost:8081/ipatientreport/save", payload)
        .then(resp =>alert("Patient Report Saved"))
            // .catch(error => {
              
            //     setMessage(error.response.data);
            // })

    }

    return (
        <div class="bg-imgi">

            <div className="container" align="center" class="jumbotron">
                <img src="/Assets/med2.jpg" class="thumbnail" alt='x'></img>
                <h2>Add Patient Report</h2>
                <div className='form-group' class="col-md-6 md-4">
                    <label> PatientId: </label><br></br>
                    <input type="text" name="pId" value={pId}
                     onChange={(event) => setpId(event.target.value)}></input>

{ formErrors.pIdError && <div style={{ color: "red" }}>{formErrors.pIdError}</div>}


                </div>
                <div className='form-group' class="col-md-6 md-4">
                    <label> ReportDate: </label><br></br>
                    <input type="date" style={{width:'75%'}} name="rDate" required pattern="\d{4}-\d{2}-\d{2}" value={rDate} 
                    onChange={(event) => setrDate(event.target.value)}></input>
{formErrors.rDateError && <div style={{ color: "red" }}>{formErrors.rDateError}</div>}

                </div><br></br>
                
               

                <div className='form-group' class="col-md-6 md-4">
                    <label> BloodGroup: </label>
                    <input type="text" name="bGroup" value={bGroup} 
                    onChange={(event) => setbGroup(event.target.value)}></input>

{ formErrors.bGroupError && <div style={{ color: "red" }}>{formErrors.bGroupError}</div> }
                </div>

                <div className='form-group' class="col-md-6 md-4">
                    <label> PatientIssue: </label>
                    <input type="text" name="pIssue" value={pIssue} 
                    onChange={(event) => setpIssue(event.target.value)}></input>
{formErrors.pIssueError && <div style={{ color: "red" }}>{formErrors.pIssueError}</div> }
                </div>
                <div className='form-group' class="col-md-6 md-4" >
                    <label> Prescription: </label>
                    <input type="text" name="pres" value={pres} 
                    onChange={(event) => setpres(event.target.value)}></input>
                    {formErrors.presError && <div style={{ color: "red" }}>{formErrors.presError}</div> }

                </div><br></br>

                <button  class="btn btn-success"onClick={handleSubmit} >Save</button>

               
            </div>
        </div>


    )

}
export default AddPatientReport;

