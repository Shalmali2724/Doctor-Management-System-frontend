import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function AddPatient() {
    const [pName, setPName] = useState("");
    const [pPhone, setPPhone] = useState("");
    const [pemail, setPEmail] = useState("");
    const [pw, setPw] = useState("");
    const [page, setPAge] = useState();
    const [wt, setWt] = useState();
    const [bgroup, setBgroup] = useState("");
    const [pgender, setPgender] = useState("");
    const [paddress, setPaddress] = useState("");
    const [pissue, setPissue] = useState("");
    const[formErrors, setFormErrors] = useState({});
    const handleChange = (event) => {
        const target = event.target;
        if (target.checked) {
            setPgender(target.value);
        }

    }


    const handleSubmit = () => {


        let errors={};
        if(!pName){
            errors['pNameError']= "Patient name is required."
        }
        if(!pPhone){ 
            errors['pPhoneError']= "Patient phone no is required." 
        }
        if(!page){
            errors['pageError']="Age is required."
        }
        if(!pemail){
             errors['pemailError']="Email is required." 
            }
        if(!pissue){
            errors['pissueError']="PatientIssue is required."
         }
        if(!pw){
             errors['pwError']="Password is required."
            }
        if(!wt){
            errors['wtError']="weight is required."
        }
        if(!bgroup){ 
            errors['bgroupError']="BloodGroup is required."
         }
         // set the errors to forms error 
         setFormErrors(errors);
         const noErrors= Object.keys(errors).length ===0;
         if(noErrors){
        
        
        const payload = {
            patientName: pName,
            patientPhone: pPhone,
            email: pemail,
            password: pw,
            age: page,
            weight: wt,
            bloodGroup: bgroup,
            gender: pgender,
            address: paddress,
            patientIssue: pissue
        }
        // allows you to fetch data and make HTTP requests
        axios.post("http://localhost:8081/patient/save", payload).then(resp =>
            alert("Patient is saved with id:" + resp.data.patientId));
    }}

    return (



        <div class='bg-imge' style={{paddingTop:'1px',paddingBottom: '1px'}}>
        <div className="container" class="jumbotron" align="center">

            <img src="/asset/reg.png" class="thumbnail" alt="Cinque Terre" />
            <h3>Patient Registration Form</h3>
            <div class="row">
                <div className='form-group' class="col-md-6 mb-4">
                    <label>Patient Name: </label>
                    <input type="text" name="pName" value={pName} className="form-control" id='pName' onChange={(event) => setPName(event.target.value)} />
                    { formErrors.pNameError && <div style={{color: 'red'}}>{formErrors.pNameError}</div>}
                </div>
                <div className='form-group' class="col-md-6 mb-4">
                    <label>Patient Phone: </label>
                    <input type="text" name="pPhone" value={pPhone} className="form-control" id='pPhone' onChange={(event) => setPPhone(event.target.value)} />
                    { formErrors.pPhoneError && <div style={{color: 'red'}}>{formErrors.pPhoneError}</div> }
                </div>
                <div className='form-group' class="col-md-6 mb-4">
                    <label>Email Id: </label>
                   
                 <input type="text" name="pEmail" value={pemail} className="form-control" id='pemail' onChange={(event) => setPEmail(event.target.value)} />
                
                 { formErrors.pemailError && <div style={{color: 'red'}}>{formErrors.pemailError}</div>}
                </div>
                <div className='form-group' class="col-md-6 mb-4">
                    <label>Password: </label>
                    <input type="password" name="pw" value={pw} className="form-control" id='pw' onChange={(event) => setPw(event.target.value)} required />
                    { formErrors.pwError && <div style={{color: 'red'}}>{formErrors.pwError}</div>}
                </div>
                <div className='form-group' class="col-md-6 mb-4">
                    <label>Patient Age: </label>
                    <input type="text" name="pAge" value={page} className="form-control" id='page' onChange={(event) => setPAge(event.target.value)} />
                    { formErrors.pageError && <div style={{color: 'red'}}>{formErrors.pageError}</div>}
                </div>
                <div className='form-group' class="col-md-6 mb-4">
                    <label>Weight: </label>
                    <input type="text" name="wt" value={wt} className="form-control" id='wt' onChange={(event) => setWt(event.target.value)} />
                    {formErrors.wtError && <div style={{color: 'red'}}>{formErrors.wtError}</div>}
                </div>
                <div className='form-group' class="col-md-6 mb-4">
                    <label>BloodGroup: </label>
                    <input type="text" name="bgroup" value={bgroup} className="form-control" id='bgroup' onChange={(event) => setBgroup(event.target.value)} />
                    {formErrors.bgroupError && <div style={{color: 'red'}}>{formErrors.bgroupError}</div>}
                </div>
                <div className='form-group' class="col-md-6 mb-4">
                    <label>Address: </label>
                    <input type="text" name="paddress" value={paddress} className="form-control" id='paddress' onChange={(event) => setPaddress(event.target.value)} />
                
                </div>
                <div className='form-group' class="col-md-6 mb-4" >
                    <label>Gender: </label>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <input type="radio" class='padding-pt1' style={{ width: '10%' }} name="pgender" value="Male" checked={pgender == 'Male'} className="form-control"
                            id='pgender' onChange={handleChange} />
                        <label for="male" class='nomargin padding-pt1'>Male</label>
                        <input type="radio" class='padding-pt1' style={{ width: '10%' }} name="pgender" value="Female" checked={pgender == 'Female'} className="form-control"
                            id='pgender' onChange={handleChange} />
                        <label for="Female" class='nomargin padding-pt1'>Female</label>

                    </div>
                </div>

                <div className='form-group' class="col-md-6 mb-4">
                    <label>PatientIssue: </label>
                    <input type="text" name="pissue" value={pissue} className="form-control" id='pissue' onChange={(event) => setPissue(event.target.value)} />
                    { formErrors.pissueError && <div style={{color: 'red'}}>{formErrors.pissueError}</div>}
                </div>
            </div>
            <button onClick={handleSubmit} className="btn btn-primary">Submit</button><br></br>
            <Link to="/patient/login">Go Back</Link>
        </div>
        </div>





    )

}
export default AddPatient;