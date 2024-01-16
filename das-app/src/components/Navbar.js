import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("mytoken"));
  const navigate = useNavigate();
  const handleLogout = () => {
    if (user !== null) {
      localStorage.removeItem("mytoken");
      alert("logout");
      navigate("/");
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
                <button onClick={handleLogout} style={{marginRight:'6px'}}>Logout</button>
              </li>
            </ul>
          </div>
        </nav>

       
      </div>
   
  );
}
export default Navbar;
