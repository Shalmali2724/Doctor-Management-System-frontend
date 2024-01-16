import { useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";
import { Container,Col,Row } from "react-bootstrap";
import DocNavBar from "./DocNavBar";
import SideCols from './SideCols';
function GetAppointmentByDate()
{
    const [appointment, setAppointment] = useState([]);
    const [appointementDate, setAppointmentDate] = useState([]);
    const [message, setMessage] = useState("");


    const handleSubmit = () => {
        axios.get("http://localhost:8081/appointment/getAppointment/" +appointementDate)
            .then(resp => setAppointment(resp.data))
            .catch(error => {
                setAppointment([]);
                setMessage(error.response.data);

            })

        }


return(<div >
    <DocNavBar/>
    <Container className='container'>
        <Row>
            <Col sm={5}>
                <SideCols/>
            </Col>
            <Col>
            <div style={{marginTop:'10%'}}>
            <div>
            <label>Enter Date</label>
            <input type="date" name="appointmentDate" placeholder="Select Date" value={appointementDate} onChange={(event) => setAppointmentDate(event.target.value)} required/>
        </div>
        <div>
            <button onClick={handleSubmit} class="btn btn-primary rounded" >Serch</button>
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





</div>
            
            </Col>
        </Row>
    </Container>

    </div>

       );




}
export default GetAppointmentByDate;