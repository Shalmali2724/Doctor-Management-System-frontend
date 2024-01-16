import React,{useEffect,useState} from "react";
import axios from "axios";


function AllPatient(){
    const[patient,setPatient]=useState([]);

    //similar to componentDidMount and componentDidUpdate

    useEffect(()=>{
        axios.get("http://localhost:8081/patient/all").then(resp=> setPatient(resp.data));
    },[])
    return (
        <div  align="center">
            <h1>Patient List</h1>
            <table border={1} className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                                 <th>patientId</th>
                                <th>patientName</th>
                                <th>patientPhone</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Age</th>
                                <th>Weight</th>
                                <th>BloodGroup</th>
                                <th>Gender</th>
                                <th>Address</th>
                                <th>PatientIssue</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        patient.map(p=> <tr key={p.patientId}>
                                        <td>{p.patientId}</td>
                                        <td>{p.patientName}</td>
                                        <td>{p.patientPhone} </td>
                                        <td>{p.email} </td>
                                        <td>{p.password}</td>
                                        <td>{p.age} </td>
                                        <td>{p.weight} </td>
                                        <td>{p.bloodGroup}</td>
                                        <td>{p.gender}</td>
                                        <td>{p.address}</td>
                                        <td>{p.patientIssue}</td>
                              </tr>)
                    }
                </tbody>
            </table>
           
        </div>
    )

}
export default AllPatient;
