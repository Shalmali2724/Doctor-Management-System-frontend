import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import LoginNavBar from './LoginNavBar';




function PatientLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [patient, setPatient] = useState(null);
    const [msg, setMessage] = useState("");
    const navigate = useNavigate();
    const[formErrors, setFormErrors] = useState({});
    const handleSubmit = () => {

        let errors = {};
        if(!email){ errors['emailError']= "Email is required."}
        if(!password){errors['passwordError'] = "Password is required."}
        setFormErrors(errors);
        const noErrors =Object.keys(errors).length == 0;
        //if no errors call the api      
        if(noErrors){
        const payload = {
            email: email,
            password: password
        }
        axios.post("http://localhost:8081/auth/patient/login", payload).then(resp => {
            //setUser(resp.data);

            const obj = {
                patientId: resp.data.patientId,
                patientName: resp.data.patientName,
                email : resp.data.email
            }
            localStorage.setItem("mytoken", JSON.stringify(obj));

            alert("Login success..");

            navigate("/patient/*");
            window.location.reload(true)

        })
            .catch(error => {
                alert("login failed")
                setMessage(error.response.data);
            })
    }}
    return (
        <div>
            <LoginNavBar/>
        
            <div className="register" class="bg-img" style={{paddingTop:'1px'}}>
                <div >
                <h3 style={{paddingLeft:'-70%'}}>Patient Login</h3>
                <div className='col-1' style={{maxWidth:"50%",marginLeft:"20%"}} >
                    {
                        msg
                    }
                    <form id='form' className='flex flex-col'>
                        <label htmlFor="email">Enter your Email Id:</label>
                        <input type="text"  name="email" value={email} className="form-control" id="email" onChange={(event) => setEmail(event.target.value) } />
                        { formErrors.emailError && <div style={{color:'red'}}>{formErrors.emailError}</div>}
                        <label htmlFor="password">Enter your Password:</label>
                        <input type="password" name="password" value={password} className="form-control" id="password"
                          
                          onChange={(event) => setPassword(event.target.value)} />
                           {formErrors.passwordError && <div style={{color:'red'}}>{formErrors.passwordError}</div> }
                         
                    </form>
                    <button onClick={handleSubmit}  style={{marginTop:"5%"}} className="btn btn-primary">Login</button><br></br>
                    
                    <Link to="/patient/save" ><label style={{color:'black',marginTop:"5%"}}>Dont'have Account ? Register Please</label></Link>
                    </div>
                     </div>
                     </div>
                     
                     </div>
                    
                       
                    
           
        
    )

}
export default PatientLogin;