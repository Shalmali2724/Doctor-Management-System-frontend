import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllFeedbackAction } from "../store/actions/FeebackActions";


function AllFeedbackRedux() {
    const feedback = useSelector(state => state.feedbackReducer.Feedbacks);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllFeedbackAction())
    }, [])

    return (<div  style={{width:"70%",padding:"16%" }}>
        {
                 <table className="table table-striped">
                 <thead className="thead-dark">
                     <tr>
                         <th>FeedbackId</th>
                         <th>Comments</th>
                         <th>DoctorId</th>
                         <th>Rating</th>
                     </tr>
                 </thead>
                 <tbody>

                     {
                         feedback.map(p =><tr key={p.feebackId}>
                             <td> {p.feedbackId}</td>
                             <td> {p.comments}</td>
                             <td>  {p.doctorId}</td>
                             <td>  {p.rating}</td>
                             </tr>)

                    }
                         </tbody>

          </table>
        }
    </div>)

}
export default AllFeedbackRedux;