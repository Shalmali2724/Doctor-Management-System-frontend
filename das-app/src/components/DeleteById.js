import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function DeleteById() {

    const [availability, setAvailability] = useState([])
    const [doctorId, setDoctorID] = useState([])
    const [message, setMessage] = useState("");

    const handleSubmit = () => {
        //
        axios.get("http://localhost:8081/availability/getByDoctorId/"+doctorId).
            then(resp => setAvailability(resp.data))

            .catch(error => {
                setAvailability([])
                setMessage(error.response.data);
            })
    }

    function DeleteAvailability(id) {

        axios.delete(`http://localhost:8081/availability/delete/${id}`)
            .then(resp => {
                alert("Availability deleted !!");
                handleSubmit();
            
            })
            
           
           
    }

    return (
        <div>

  
            <div style={{marginTop:"3%"}}>
                <h6>Enter DoctorID</h6>
                <input type="text" name="doctorId" placeholder="Enter Doctor Id" value={doctorId} onChange={(event) => setDoctorID(event.target.value)} required />
            </div>
            <div>
                <button onClick={handleSubmit} style={{marginTop:"2%"}} class="btn btn-primary rounded"> Search</button>
            </div>

            <div>
                {
                    availability!==null ?
                        <table className="table table-striped" style={{marginTop:"9%", width:"35%"}}>
                            <thead className="thead-dark">
                                <tr>
                                    <th>AvailabilityId</th>
                                    <th>FromDate</th>
                                    <th>ToDate</th>
                                    <th>status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    availability.map(p => <tr key={p.availabilityId}>
                                        <td>{p.availabilityId}</td>
                                        <td>{p.fromDate}</td>
                                        <td>{p.toDate}</td>
                                        <td>{p.status}</td>
                                        
                                        <td><button onClick={() => DeleteAvailability(p.availabilityId)}>Delete</button> </td> 
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
export default DeleteById;