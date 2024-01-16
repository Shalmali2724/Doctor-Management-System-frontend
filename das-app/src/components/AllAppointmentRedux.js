import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllAppointmentAction } from "../action/appointmentAction";


function AllAppointmentRedux() {
    const appointment = useSelector(state => state.appointmentReducer.Appointments);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllAppointmentAction())
    }, [])

    return (<div  style={{width:"70%",padding:"16%" }}>
        {
                 <table className="table table-striped">
                 <thead className="thead-dark">
                     <tr>
                         <th>AppointmentId</th>
                         <th>appointementStatus</th>
                         <th>AppointmentDate</th>
                         <th>AppointmentRemark</th>
                     </tr>
                 </thead>
                 <tbody>

                     {
                         appointment.map(p =><tr key={p.appointmentId}>
                             <td> {p.appointmentId}</td>
                             <td> {p.appointementStatus}</td>
                             <td>  {p.date}</td>
                             <td>  {p.remark}</td>
                             </tr>)

                    }
                         </tbody>

          </table>
        }
    </div>)

}
export default AllAppointmentRedux;