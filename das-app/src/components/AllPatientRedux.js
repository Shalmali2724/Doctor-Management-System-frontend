import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPatientActions } from "../store/actions/PatientActions";

function AllPatientRedux() {

    const patient = useSelector(state => state.patientReducer.Patients);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllPatientActions())

    }, [])

    return (<div style={{ width: "70%", padding: "16%" }}>

        {
            <table className="table table-striped">
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
                        patient.map(p => <tr key={p.patientId}>

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

        }

    </div>)



}

export default AllPatientRedux;