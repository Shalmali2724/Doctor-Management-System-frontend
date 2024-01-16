import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function ByPatientId() {

    const [appointment, setAppointment] = useState([]);
   
    const [message, setMessage] = useState("");
    const user = JSON.parse(localStorage.getItem("mytoken"));
    const handleSubmit = () => {
      
        axios.get(`http://localhost:8081/appointment/getByPatientid/ ${user.patientId}`).
            then(resp => setAppointment(resp.data))

            .catch(error => {
                setAppointment([])
                setMessage(error.response.data);
            })
    }

    function DeleteUser(id) {

        axios.delete(`http://localhost:8081/appointement/deleteByAppointmentId/${id}`)
            .then(resp => {
                alert("Appointment deleted !!");
                handleSubmit();
            })
    }

    return (
        <div>

           
            
            <div>
                <button onClick={handleSubmit} class="btn btn-primary rounded"> Serch</button>
            </div>

            <div>

                {

                    appointment.length > 0 ?

                        <table className="table table-striped">
                            <thead className="thead-dark">

                                <tr>
                                    <th>AppointmentId</th>
                                    <th>appointementDate</th>
                                    <th></th>
                                    <th></th>
                                </tr>

                            </thead>

                            <tbody>

                                {
                                    appointment.map(p => <tr key={p.appointmentId}>
                                        <td>{p.appointmentId}</td>
                                        <td>{p.date}</td>

                                        
                                        <td><button onClick={() => DeleteUser(p.appointmentId)}>Delete</button> </td>

                                    </tr>)
                                }

                            </tbody>

                        </table>



                        : <h2>{message}</h2>


                }


            </div>

        </div>






    )




}
export default ByPatientId;