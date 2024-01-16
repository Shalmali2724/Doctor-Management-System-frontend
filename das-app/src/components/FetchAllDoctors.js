import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function FetchAllDoctors() {
    const [doctors, setDoctors] = useState([]);

    //similar to componentDidMount and componentDidUpdate:

    useEffect(() => {
        axios.get("http://localhost:8081/doctor/all").then(resp => setDoctors(resp.data));
    }, [])
    return (
        <div className="container">
            <div className="row">
                {
                    doctors.map(p =>
                        <div className="card" style={{ width: "200px" }}>
                            {/* <img className="card-img-top" src={doc2} alt="Card Image" /> */}
                            <div class="card-body">
                                <h4 className="card-title">{p.doctorName}</h4>
                                <p className="card-text">{p.specialization}</p>

                                <td><Link to={`/doctor/details/${p.doctorId}`} className="btn btn-primary">View</Link></td>
                                

                                {/* {p.doctorId}  {p.doctorPhone}   {p.email} {p.password} */}
                            </div>

                        </div>
                    )

                }
                </div>
         </div>)
} 

 export default FetchAllDoctors;
