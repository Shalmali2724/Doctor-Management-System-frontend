import React, { useState } from 'react';
import axios from 'axios';


function AddAvailability() {
    const [fDate, setFDate] = useState("");
    const [tDate, setTDate] = useState("");
    const [sts, setStatus] = useState("");
   
    const [formErrors, setFormErrors] = useState("");
    const user = JSON.parse(localStorage.getItem("mytoken"));


    const handleSubmit = () => {

        let errors = {};

        if (!fDate) {
            errors['fDateError'] = "From Date is required"
        }
        if (!tDate) {
            errors['tDateError'] = "To Date is required"
        }
        if (!sts) {
            errors['stsError'] = "Status is required"
        }
       
        // if (Date.parse(fDate) > Date.parse(tDate)) {
        //     errors['DateError'] = "Invalid Range"
        //     alert("Invalid Date Range");
        // }
        

        setFormErrors(errors);

        const noErrors = Object.keys(errors).length === 0;
        if (noErrors) {

            const payload = {
                fromDate: fDate,
                toDate: tDate,
                status: sts,
                doctorId: user.doctorId
            }


            axios.post("http://localhost:8081/availability/add", payload).then(resp =>
                alert("Availability is saved with id: " + resp.data.availabilityId));

        }
        

       


    }

    return (
        <div className="container"class= 'jumbotron'>
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <div class="add">

                        <h2 class="text-center">Save Availability</h2>
                        <div class="form-group">
                            <label for="fdate">From Date:</label>
                            <input type="date" min={new Date().toISOString().split('T')[0]} class="form-control" id="fdate" name="fromDate" value={fDate}
                                onChange={(event) => setFDate(event.target.value)} />
                            {
                                formErrors.fDateError && <div style={{ color: "red" }}>{formErrors.fDateError} </div>
                            }
                        </div>
                        <div class="form-group">
                            <label for="tdate">To Date:</label>
                            <input type="date" class="form-control" id="tdate" name="toDate" placeholder="Enter to date" value={tDate}
                                onChange={(event) => setTDate(event.target.value)} />
                          
                               { formErrors.DateError && <div style={{ color: "red" }}>{formErrors.DateError} </div>}
                        </div>
                        <div class="form-group">
                            <label for="sts">Status:</label>
                            <input type="text" class="form-control" id="sts" name="status" value={sts}
                                onChange={(event) => setStatus(event.target.value)} />
                            {
                                formErrors.stsError && <div style={{ color: "red" }}>{formErrors.stsError} </div>
                            }
                        </div>
                      
                        <br></br>
                        <button type="save" class="btn btn-info" onClick={handleSubmit}>Save</button>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddAvailability;