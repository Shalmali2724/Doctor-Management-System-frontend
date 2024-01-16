import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AddDoctor() {
    const [dName, setDName] = useState("");
    const [dPhone, setDPhone] = useState("");
    const [dSpecialization, setDSpecialization] = useState("");
    const [dLocation, setDLocation] = useState("");
    const [dChargespervisit, setDChargespervisit] = useState("");
    const [dEmail, setDEmail] = useState("");
    const [dPassword, setDPassword] = useState("");
    const [formErrors, setFormErrors] = useState({});

    const handleSubmit = () => {
        let errors = {};
        if (!dName) {
            errors['dNameError'] = "Doctor Name is required."
        } if (!dPhone) {
            errors['dPhoneError'] = "Doctor Phone is required."
        }
       
        if (!dSpecialization) {
            errors['dSpecializationError'] = "Doctor Specialization is required."
        } if (!dLocation) {
            errors['dLocationError'] = "Doctor Location is required."
        } if (!dChargespervisit) {
            errors['dChargespervisitError'] = "Charges Per Visit requred."
        } if (!dEmail) {
            errors['dEmailError'] = "Email is required."
        }
        if (!dPassword) {
            errors['dPasswordError'] = "Password is required."
        }


        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;
        // if no errors call the api
        if (noErrors) {

            const payload = {
                doctorName: dName,
                doctorPhone: dPhone,
                specialization: dSpecialization,
                location: dLocation,
                chargespervisit: dChargespervisit,
                email: dEmail,
                password: dPassword


            }
            axios.post("http://localhost:8081/doctor/save", payload).then(resp => alert("Doctor is saved with id: " + resp.data.doctorId));
        }
    }
    return (
        <div className="container" class="jumbotron" align="center">
            {/* <img src="/assets/doc1.png" class="thumbnail" alt="xx"/> */}
            <div class="row">
                <div className="form-group" class="col-md-6 mb-4">

                    <label htmlFor='dName'> Doctor Name: </label>
                    <input type="text" name="dName" value={dName} className="form-control" id="dName" onChange={(event) => setDName(event.target.value)} />
                    {
                        formErrors.dNameError && <div style={{ color: "red" }}>{formErrors.dNameError}</div>
                    }
                </div>
                <div className="form-group" class="col-md-6 mb-4">
                    <label htmlFor='dPhone'> Doctor PhoneNo: </label>
                    <input type="text" name="dPhone" value={dPhone} className="form-control" id="dPhone" onChange={(event) => setDPhone(event.target.value)} />
                    {
                        formErrors.dPhoneError && <div style={{ color: "red" }}>{formErrors.dPhoneError}</div>
                    }
                </div>
                <div className="form-group" class="col-md-6 mb-4">
                    <label htmlFor='dSpecialization'> Specialization: </label>
                    <input type="text" name="dSpecialization" value={dSpecialization} className="form-control" id="dSpecialization"
                        onChange={(event) => setDSpecialization(event.target.value)} />
                    {
                        formErrors.dSpecializationError && <div style={{ color: "red" }}>{formErrors.dSpecializationError}</div>
                    }
                </div>
                <div className="form-group" class="col-md-6 mb-4">
                    <label htmlFor='dLocation'> Location: </label>
                    <input type="text" name="dLocation" value={dLocation} className="form-control"
                        id="dLocation" onChange={(event) => setDLocation(event.target.value)} />
                    {
                        formErrors.dLocationError && <div style={{ color: "red" }}>{formErrors.dLocationError}</div>
                    }

                </div>
                <div className="form-group" class="col-md-6 mb-4">
                    <label htmlFor='dChargesoervisit'> ChargesPerVisit: </label>
                    <input type="text" name="dChargespervisit" value={dChargespervisit} className="form-group"
                        id="dChargespervisit" onChange={(event) => setDChargespervisit(event.target.value)} />
                    {
                        formErrors.dChargespervisitError && <div style={{ color: "red" }}>{formErrors.dChargespervisitError}</div>
                    }

                </div>
                <div className="form-group" class="col-md-6 mb-4">
                    <label htmlFor='dEmail'> Email :</label><br></br>
                    <input type="text" name="dEmail" value={dEmail} className="form-group" id="dEmail"
                        onChange={(event) => setDEmail(event.target.value)} />
                    {
                        formErrors.dEmailError && <div style={{ color: "red" }}>{formErrors.dEmailError}</div>
                    }
                </div>
                <div className="form-group" class="col-md-6 mb-4">
                    <label htmlFor='dPassword'> Password: </label>
                    <input type="password" name="dPassword" value={dPassword} className="form-group"
                        id="dPassword" onChange={(event) => setDPassword(event.target.value)} />
                    {
                        formErrors.dPasswordError && <div style={{ color: "red" }}>{formErrors.dPasswordError}</div>
                    }

                </div>
            </div>

            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button><br></br>
            <Link to="/doctor/login">Go Back</Link>


        </div>

    )
}
export default AddDoctor;