import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function PatientNavBar() {
  const user = JSON.parse(localStorage.getItem("mytoken"));
  const navigate = useNavigate();
  const handleBack = () => {
    if (user !== null) {
      
      alert("Back");
      navigate("/patient/dashboard");
    }
  };
  return (
  
      <div>
        <nav class="navbar bg-info">
          <img
            src="https://thumbs.dreamstime.com/z/doctor-appointment-icon-flat-style-vector-eps-doctor-appointment-icon-flat-style-vector-eps-154283841.jpg"
            length="50px"
            width="40px"
            alt="logo"
           
          ></img>

          <div>
            <ul class="navbar nav">
              <li class="nav-item">
                <a class="nav-link text-dark" href="#">
                    
                {user.email}
                </a>
              </li>
              <li >
                <button onClick={handleBack} style={{marginRight:'6px'}}>Back</button>
              </li>
            </ul>
          </div>
        </nav>

       
      </div>
   
  );
}
export default PatientNavBar;
