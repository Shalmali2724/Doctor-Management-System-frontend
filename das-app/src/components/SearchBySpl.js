import React from "react";
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AddFeedback from "./AddFeedback";
import Bookappointment from "./Bookappointment";
function SearchBySpl() {

    const [specialization, setSpecialization] = useState("");
    const [doctor, setDoctor] = useState([]);
    const [message, setMessage] = useState("");


    const handleSubmit = () => {
        //api call
        axios.get("http://localhost:8081/dctor/specialization/" + specialization)
            .then(resp => setDoctor(resp.data))
            .catch(error => {
                setDoctor(null);
                setMessage(error.response.data)
            }, [])
    }
    const bookAppointment = (e) => {
        // what should I write here to pass props on component < Details />

    }
    return (<div>

        <div style={{ marginTop: "3%" }}>
            <label><b>Enter Specialization</b></label>
            <input type="text" name="specialization" value={specialization}
                onChange={(event) => setSpecialization(event.target.value)}></input>
        </div>
        <button class="btn btn-success" onClick={handleSubmit}>Search</button>
        {
            doctor !== null ? <div>
                <h2>Doctor Details</h2>

                {
                    doctor.map(p =>
                        <div className="card" style={{ width: "350px" }}>
                            <div class="card-body">
                                <h6 className="card-title">DoctorName:{p.doctorName}</h6>
                                <p className="card-text">Specialization:{p.specialization}</p>
                                <p className="card-text">DoctorId:{p.doctorId}</p>
                                <p className="card-text">Charges:{p.chargespervisit}</p>
                                 <td><Link to={`/doctor/details/${p.doctorId}`} class="btn btn-primary"  >View</Link></td>
                                <td><Link to={`/doctor/appointment/ ${p.doctorId}`} className="btn btn-primary" class="btn btn-success" style={{ marginLeft: "15px" }}>BookAppointement</Link></td>


                            </div>



                        </div>

                    )

                }

            </div>
                : <h3>{message}</h3>

        }
    </div>
    )
}
export default SearchBySpl;
