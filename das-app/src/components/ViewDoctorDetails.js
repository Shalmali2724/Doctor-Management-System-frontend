import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';


function ViewDoctorDetails() {
    const [doctor, setDoctors] = useState(null);
    const { did } = useParams();
    console.log(did);

    useEffect(() => {
        axios.get("http://localhost:8081/doctor/" + did).then(resp => setDoctors(resp.data));
    }, [])

    return (<div>
        {
            doctor !== null &&
            <div>
                <p>DoctorId:{doctor.doctorId}</p>
                <p>DoctorName:{doctor.doctorName}</p>
                <p>DoctorPhone:{doctor.doctorPhone}</p>
                <p>Specialization:{doctor.specialization}</p>
                <p>Location:{doctor.location}</p>
                <p>ChargesPerVisit:{doctor.chargespervisit}</p>
                <p>Email:{doctor.email}</p>
                <p>Password:{doctor.password}</p>
            </div>
        }
        <div>
            {/* <img src={doc1} alt ='docpic'></img> */}
        </div>


    </div>)
}
export default ViewDoctorDetails;