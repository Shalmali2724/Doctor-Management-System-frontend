import { useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import PatientNavBar from "./PatientNavBar ";

function Bookappointment() {
  const user = JSON.parse(localStorage.getItem("mytoken"));
  const [appointmentDate, setAppointmentDate] = useState("");
  const [remark, setRemark] = useState("");
  const { doctorId } = useParams();
  const [formError, setFormError] = useState({});
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    let errors = {};
    if (!appointmentDate) {
      errors["appointmentDateError"] = "Appointment Date is Required";
    }

    if (!remark) {
      errors["remarkError"] = "Remark is Required";
    }

  
    setFormError(errors);

    const noError = Object.keys(errors).length == 0;
    if (noError) {
      const payload = {
        date: appointmentDate,
        remark: remark,
        doctorId: doctorId,
        patientId: user.patientId,
      };
      //axios .post() is used to store the data into databasse
      axios
        .post("http://localhost:8081/Bookappointment/save", payload)
        .then((resp) =>
          alert(
            "Appointment is booked !! Your AppointmentId is:" +
              resp.data.appointmentId
          )
        )
        .catch((error) => {
          alert(error.response.data);
        });
    }
  };

  return (
    <section>
    <PatientNavBar/>
      <div className="container" class="bg-img" style={{ paddingTop: "1px" }}>
        <div class="jumbotron" align="center">
          <h3>Book Appointment</h3>
          <div class="row" style={{ justifyContent: "center" }}>
            <div
              className="form-group"
              class="col-8"
              style={{ marginTop: "19px" }}
            >
              <label style={{ float: "left" }}>Enter Appointment Date</label>
              <input
                type="date"
                style={{ marginTop: "15px" }}
                name="appointmentDate"
                class="form-control"
                id="appointmentDate"
                value={appointmentDate}
                onChange={(event) => setAppointmentDate(event.target.value)}
                required
              />
              {formError.appointmentDateError && (
                <div style={{ color: "red" }}>{formError.appointmentDateError}</div>
              )}
            </div>
            <div className="form-group" class="col-8">
              <input
                type="text"
                style={{ marginTop: "15px" }}
                name="remark"
                class="form-control"
                placeholder="Enter Remark"
                id="remark"
                value={remark}
                onChange={(event) => setRemark(event.target.value)}
                required
              />
             
              {formError.remarkError && (
                <div style={{ color: "red" }}>{formError.remarkError}</div>
              )}
            </div>
          </div>
          <button
            onClick={handleSubmit}
            class="btn btn-success"
            style={{ marginTop: "15px", marginRight: "12px" }}
          >
            {" "}
            Book
          </button>

         
        </div>
      </div>
    </section>
  );
}
export default Bookappointment;
