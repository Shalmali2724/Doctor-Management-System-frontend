import { useState } from "react"
import axios from "axios";
import { Link, Navigate } from "react-router-dom";


function ByDoctorId() {

    const [appointment, setAppointment] = useState([]);
    
    const [message, setMessage] = useState("");
   

    const user = JSON.parse(localStorage.getItem("mytoken"));
    const handleSubmit = () => {
        //Axios is used for connecting with database
        axios.get(`http://localhost:8081/appointment/getByDoctorId/${user.doctorId}` )
            .then(resp => setAppointment(resp.data))
            .catch(error => {
                setAppointment([]);
                setMessage(error.response.data);

            })


    }

    return (<div class="jumbotron">

     
       
        <div>
            <button onClick={handleSubmit} style={{marginTop:"3%",width:"33%"}} class="btn btn-primary rounded" >View All Appointment</button>
        </div>
        <div style={{marginLeft:"10px"}}>
            <Link to="/GetAppointmentByDate"><button class="btn btn-primary rounded" style={{marginTop:"3%"}}>View Appointment ByDate</button></Link>
        </div>
        <div>

            {

                appointment.length>0 ?

                    <table className="table table-striped">
                        <thead className="thead-dark">
                            
                            <tr>
                                <th>AppointmentId</th>
                                <th>appointementDate</th>
                                <th></th>
                               
                            </tr>

                        </thead>

                        <tbody>

                            {
                                appointment.map(p => <tr key={p.appointmentId}>
                                    <td>{p.appointmentId}</td>
                                    <td>{p.date}</td> 
                
                                 <td><Link to={`/PatientDetails/${p.appointmentId}`}>View</Link></td>
                                    
                                </tr>)
                            }

                        </tbody>

                    </table>



                    : <h2>{message}</h2>


            }


        </div>





    </div>);





}

export default ByDoctorId;
