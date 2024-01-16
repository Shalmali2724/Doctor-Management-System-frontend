import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import DocNavBar from "./DocNavBar";
//axios is used to connect with database
function PatientDetails() {

    //to set the state of appointments
    const [appointment, setAppointment] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        //axios.get() metod use for getAppointmentBy doctor Id from backEend
        axios.get("http://localhost:8081/appointment/getByAppointment/" + id).then(resp => setAppointment(resp.data));
    }, [])
    return (<div >

           <DocNavBar/>
        <div class="jumbotron" style={{ textAlign: "center", justifyContent: "center", width: "50%", marginTop: "5%", marginLeft: "25%" }}>
            {
                appointment != null &&
                <div>

                    <div>
                        <img src="https://media.istockphoto.com/id/1210939712/vector/user-icon-people-icon-isolated-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=vKDH9j7PPMN-AiUX8vsKlmOonwx7wjqdKiLge7PX1ZQ=" alt="image" class="rounded" style={{ width: "120px", height: "120px" }} />
                    </div>
                    <div style={{ textAlign: "justifyContent" }}>
                        <h6>Appointment Date:<small>{appointment.date}</small></h6>

                        <h6>Patient Name :<small>{appointment.patient.patientName}</small></h6>
                        <h6>Patient Issue :<small>{appointment.patient.patientIssue}</small></h6>
                        <h6>Patient Mobile Number :<small>{appointment.patient.patientPhone}</small></h6>
                        <h6>Patient Age: <small>{appointment.patient.age}</small> </h6>
                        <h6>Patient BloodGroup:<small>{appointment.patient.bloodGroup}</small> </h6>
                        <h6>Patient Location : <small>{appointment.patient.address}</small></h6>
                        {/* <Link to="/Serchappointment">Back</Link> */}
                    </div>
                </div>
            }

        </div>


    </div>)


}
export default PatientDetails;