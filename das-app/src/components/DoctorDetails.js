import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DoctorDetails() {
  const [appointment, setAppointment] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    //axios.get() metod use for getAppointmentBy doctor Id from backEend
    axios.get("http://localhost:8081/appointment/getByAppointment/"+id).then(resp => setAppointment(resp.data));
  }, [])

  return (<div>
    {


      appointment != null &&
      <div class="jumbotron" style={{ textAlign:"center", justifyContent:"center",width:"50%" , marginTop:"5%",marginLeft:"25%"}}>
        <div>
    <img src="https://media.istockphoto.com/id/1210939712/vector/user-icon-people-icon-isolated-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=vKDH9j7PPMN-AiUX8vsKlmOonwx7wjqdKiLge7PX1ZQ=" alt="image" class="rounded"  style={{width:"120px" ,height:"120px"}}/>
    </div>
      <div>
        {
          <div>
            <h6>Appointment Date:<small>{appointment.date}</small></h6>
            <h6>Doctor Id :<small>{appointment.doctor.doctorId}</small></h6>
            <h6>Doctor Name :<small>{appointment.doctor.doctorName}</small></h6>
            <h6>Doctor Mobile Number :<small>{appointment.doctor.doctorPhone}</small></h6>
            <h6>Doctor specialization :<small>{appointment.doctor.specialization}</small></h6>
            <h6>Doctor Charges :<small>{appointment.doctor.chargespervisit}</small> </h6>
            </div>
          }

        </div>
      </div>
    }
    
  </div>

  )

}
export default DoctorDetails;