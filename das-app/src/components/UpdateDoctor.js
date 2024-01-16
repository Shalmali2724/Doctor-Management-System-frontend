import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

function UpdateDoctor() {
    const { did } = useParams();
    const [dId, setDId] = useState("");
    const [dName, setDName] = useState("");
    const [dPhone, setDPhone] = useState("");
    const [dSpecialization, setDSpecialization] = useState("");
    const [dLocation, setDLocation] = useState("");
    const [dChargespervisit, setDChargespervisit] = useState("");
    const [dEmail, setDEmail] = useState("");
    const [dPassword, setDPassword] = useState("");
    const user = JSON.parse(localStorage.getItem("mytoken"));
    useEffect(() => {
        axios.get(`http://localhost:8081/doctor/${user.doctorId}`).then(resp => {
            setDId(resp.data.doctorId);
            setDName(resp.data.doctorName);
            setDLocation(resp.data.location);
            setDSpecialization(resp.data.specialization);
            setDPhone(resp.data.doctorPhone);
            setDChargespervisit(resp.data.chargespervisit);
            setDEmail(resp.data.email);
            setDPassword(resp.data.password);

        });
    }, [])
    const updateDoctorSubmit = () => {
        const payload = {
            doctorId: dId,
            doctorName: dName,
            doctorPhone: dPhone,
            specialization: dSpecialization,
            location: dLocation,
            chargespervisit: dChargespervisit,
            email: dEmail,
            password: dPassword


        }
        axios.put("http://localhost:8081/doctor/update", payload).then(resp => alert("Doctor Updated"));

    }



    return (<div>
        <div class='jumbotron' align='center'>
            <div class='row'>
            <div className="form-group" class="col-8">
                <label>Doctor Name</label>
                <input type="text" name="dName" value={dName} onChange={(event) => setDName(event.target.value)} />
            </div>
            <div className="form-group" class="col-8">
                <label>Doctor PhoneNo</label>
                <input type="text" name="dPhone" value={dPhone} onChange={(event) => setDPhone(event.target.value)} />

            </div>
            <div className="form-group" class="col-8">
                <label>Specialization</label>
                <input type="text" name="dSpecialization" value={dSpecialization} onChange={(event) => setDSpecialization(event.target.value)} />

            </div>
            <div className="form-group" class="col-8">
                <label>Location</label>
                <input type="text" name="dLocation" value={dLocation} onChange={(event) => setDLocation(event.target.value)} />

            </div>
            <div className="form-group" class="col-8">
                <label>ChargesPerVisit</label>
                <input type="text" name="dChargespervisit" value={dChargespervisit} onChange={(event) => setDChargespervisit(event.target.value)} />

            </div>
            <div className="form-group" class="col-8">
                <label>Email</label>
                <input type="text" name="dEmail" value={dEmail} onChange={(event) => setDEmail(event.target.value)} />

            </div>
            <div className="form-group" class="col-8">
                <label>Password</label>
                <input type="text" name="dPassword" value={dPassword} onChange={(event) => setDPassword(event.target.value)} />

            </div>
            
            </div>
            <button onClick={updateDoctorSubmit} className='btn btn-primary'>Update</button>

        </div>
    </div >
    )
}
export default UpdateDoctor;