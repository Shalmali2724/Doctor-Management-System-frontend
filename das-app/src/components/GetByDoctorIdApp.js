import { useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
function GetByDoctorIdApp() {

    const [availability, setAvailability] = useState(null);
    
    const [message, setMessage] = useState("");
    const [formErrors, setFormErrors] = useState("");
    const user = JSON.parse(localStorage.getItem("mytoken"));
    const handleSubmit = () => {

        let errors = {};

    

        setFormErrors(errors);

        const noErrors = Object.keys(errors).length ===0;

        if (noErrors){
            axios.get(`http://localhost:8081/availability/getByDoctorId/${user.doctorId}`)
            .then(resp => setAvailability(resp.data))
            .catch(error => {
                setAvailability(null)
                setMessage(error.response.data)
            })
        }

    }
    function DeleteAvailability(id) {

        axios.delete(`http://localhost:8081/availability/delete/${id}`)
            .then(resp => {
                alert("Availability deleted !!");
              handleSubmit();
            })
    }
    return (
    <div class="container jumbotron"  >
        <div class="row">
                <div class="col-md-8 offset-md-2">
                    <div class="add">
                        
                            
                            <button type="button"class="btn btn-primary" onClick={handleSubmit}> Search</button>
                            
                        
                    </div>
                </div>
            </div>
        <div>
            {
                availability !== null ?
                    <table className="table table-striped table-responsive">
                        <thead className="thead-dark">                           
                            <tr>
                                <th>Availability ID</th>
                                <th>From Date</th>
                                <th>To Date</th>
                                <th>Status</th>   
                            </tr>
                        </thead>
                        <tbody>
                            {
                                availability.map(p => <tr key={p.availabilityId}>
                                    
                                    <td>{p.availabilityId}</td>
                                    <td>{p.fromDate}</td> 
                                    <td>{p.toDate}</td>
                                    <td>{p.status}</td>
                                    <td><Link to= {`/update/${p.availabilityId}`}>Update</Link></td> 
                                          
                                   
                                </tr>)
                            }
                        </tbody>
                    </table>
                    : <h2>{message}</h2>
            }
        </div>
        
    </div>
    );
}
export default GetByDoctorIdApp;
