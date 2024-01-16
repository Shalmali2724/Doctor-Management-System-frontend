import React from "react";
import { useNavigate } from "react-router-dom";


function PatientLogout(){

    const patient =JSON.parse(localStorage.getItem("mytoken"));
    const navigate= useNavigate();

    const handleLogout =() =>{
        if(patient !== null)
        {
            localStorage.removeItem("mytoken");
            alert("Successfully logout");
            navigate("/");
        }
    }
    return(
        <div>
            <button onClick={handleLogout} className="btn btn-primary">Logout</button>
        </div>
    )
}
export default PatientLogout;