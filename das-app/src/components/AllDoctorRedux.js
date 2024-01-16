import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllDoctorActions } from "../store/action/DoctorAction";

function AllDoctorRedux() {

    const doctor = useSelector(state => state.doctorReducer.Doctors);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllDoctorActions())

    }, [])

    return (<div align='center' style={{marginTop:'3%'}}>
             <h3>Doctor List</h3>
        {
            <table  border={1} align="center" className="table table-striped" style={{width:'50%'}}>
                <thead className="thead-dark">
                    <tr>
                        <th>doctorId</th>
                        <th>doctorName</th>
                        <th>doctorPhone</th>
                        <th>Email</th>
                        <th>Password</th> 
                        <th>Specialization</th>
                        <th>Chargespervisit</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        doctor.map(p => <tr key={p.doctorId}>

                            <td>{p.doctorId}</td>
                            <td>{p.doctorName}</td>
                            <td>{p.doctorPhone} </td>
                            <td>{p.email} </td>
                            <td>{p.password}</td>
                            <td>{p.specialization}</td>
                            <td>{p.chargespervisit}</td>
                            <td>{p.location}</td>
                            

                        </tr>)



                    }

                </tbody>



            </table>

        }

    </div>)



}

export default AllDoctorRedux;