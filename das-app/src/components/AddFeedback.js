 import React, { useState } from "react";
import axios from "axios";
function AddFeedback() {
  const [fcomments, setComments] = useState("");
  const [fdoctorId, setDoctorId] = useState("");
  const [frating, setRating] = useState("");
  const [fappointmentId, setAppointmentId] = useState("");
  const[formErrors, setFormErrors] = useState({});
  const user = JSON.parse(localStorage.getItem("mytoken"));
  const handleSubmit = () => {

    let errors={};
    if(!fcomments)
    {
      errors['fcommentsError']="Comments is required."
    }
    if(!fdoctorId)
    {
      errors['fdoctorIdError']="DoctorId  is required."
    }
    if(!frating)
    {
      errors['fratingError']="Rating  is required."
    }
    
    if(!fappointmentId)
    {
      errors['fappointmentIdError']="Appointment Id is required."
    }

    setFormErrors(errors);
    const noErrors = Object.keys(errors).length === 0;
    if(noErrors){

    const feedload = {
      comments: fcomments,
      rating: frating,
      doctorId: fdoctorId,
      patientId: user.patientId,
      appointmentId: fappointmentId,
    };
    axios.post("http://localhost:8081/feedback/save", feedload)
      .then((resp) => alert("Feedback is saved!!!"));
  }};

  return (
    <div  align="center">
      <h1>Add Feedback</h1>
      
      <div className="form-group">
        <label> Comments: </label>
        <input
          type="text"
          name="fcomments"
          value={fcomments}
          placeholder="Comments"
          id="fcomments"
          onChange={(event) => setComments(event.target.value)}
        />
        {
          formErrors.fcommentsError && <div style={{color:'red'}}>{formErrors.fcommentsError}</div>
        }
      </div>


      <div className="form-group">
      <label for="cars">Select Rating:</label>

<select  value={frating} onChange={(event) => setRating(event.target.value)}>
<option selected>Please Select Rating </option>
  <option >Worst</option>
  <option >Bad</option>
  <option >Average</option>
  <option >Good</option>
  <option >Excellent</option>
</select>
{
          formErrors.fratingError && <div style={{color:'red'}}>{formErrors.fratingError}</div>
        }
      </div>

      <div className="form-group" class="col-8">
        <label> DoctorId </label>
        <input
          type="text"
          name="fdoctorId"
          value={fdoctorId}
          placeholder="DoctorId"
          onChange={(event) => setDoctorId(event.target.value)}
        />
          {
          formErrors.fdoctorIdError && <div style={{color:'red'}}>{formErrors.fdoctorIdError}</div>
        }
      </div>
     

      <div className="form-group">
        <label> AppointmentId </label>
        <input
          type="number"
          name="fappointmentId"
          value={fappointmentId}
          placeholder="AppointmentId"
          onChange={(event) => setAppointmentId(event.target.value)}
        />
         {
          formErrors.fappointmentIdError && <div style={{color:'red'}}>{formErrors.fappointmentIdError}</div>
        }
      </div>

      <div>
        <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
      </div>
    </div>
  
  );
}

export default AddFeedback;
