import React, { useState } from "react";

import axios from "axios";

function SearchFeedbackByDrId() {
  const [doctorId, setDoctorId] = useState("");
  const [feedback, setFeedback] = useState([]);
  const [message, setMessage] = useState("");
  const user = JSON.parse(localStorage.getItem("mytoken"));
  const handleSubmit = () => {
    //api call
    axios
      .get(`http://localhost:8081/feedback/${user.doctorId}`)
      .then((resp) => setFeedback(resp.data))

      .catch((error) => {
        setFeedback([])
        setMessage(error.response.data);
      });
  };
  return (
    <div class="jumbotron">
      <h2 style={{marginTop:"12%"}}>Search Feedback</h2>
     
      <button onClick={handleSubmit}>Search</button>
      {feedback.length > 0 ? (
        feedback.map((f) => (
          <div>
            <h2>Doctor Feedback Details</h2>
            <p>feedbackId: {f.feedbackId}</p>
            <p>comments: {f.comments}</p>
            <p>doctorId: {f.doctorId}</p>
            <p>rating: {f.rating}</p>
          </div>
        ))
      ) : (
        <h3>{message}</h3>
      )}
    </div>
  );
}
export default SearchFeedbackByDrId;
