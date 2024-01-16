import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LoginNavBar from './LoginNavBar';

function DoctorLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [doctor, setDoctor] = useState(null);
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({});

    const handleSubmit = () => {
        let errors = {};
        if (!email) {
            errors['emailError'] = "Email is required."
        }
        if (!password) {
            errors['passwordError'] = "Password is required."
        }

        setFormErrors(errors);
        const noErrors = Object.keys(errors).length == 0;

        // if no errors call the api
        if (noErrors) {
            const payload = {
                email: email,
                password: password
            }
            axios.post("http://localhost:8081/auth/login", payload).then(resp => {
                setDoctor(resp.data);
                const obj = {
                    doctorId: resp.data.doctorId,
                    doctorName: resp.data.doctorName,
                    email: resp.data.email,
                    specialization: resp.data.specialization
                }
                localStorage.setItem("mytoken", JSON.stringify(obj));
                alert("Login success");
                navigate("/login/doctor/*");
window.location.reload(true);

            }).catch(error => {

                setMsg(error.response.data);
            })

        }
    }
    return (<div>
        <LoginNavBar/>
        <div className="container" align="center" >
            <h1>Doctor Login</h1>
            <div className='register'>

                <div className='col-1' style={{ maxWidth: "30%" }}>
                    {
                        msg
                    }
                    <form id='form' className="flex flex-col">
                        <label htmlFor='email'>Email</label>
                        <input type="text" name="email" value={email} className="form-control" id="email"
                            onChange={(event) => setEmail(event.target.value)} required />

                        {
                            formErrors.emailError && <div style={{ color: "red" }}>{formErrors.emailError
                            }</div>
                        }

                        <label htmlFor='password'>Password</label>
                        <input type="password" name="password" value={password} className="form-control"
                            id="password" onChange={(event) => setPassword(event.target.value)} required />
                        {
                            formErrors.passwordError && <div style={{ color: "red" }}>{formErrors.passwordError
                            }</div>
                        }


                    </form>
                    <button onClick={handleSubmit} style={{ marginTop: "5%" }} className="btn btn-primary">Login</button><br></br>
                    <Link to="/doctor/add"><label>Don't have an account ? Register here</label></Link>



                </div>

            </div>
        </div>
    </div>)


}


export default DoctorLogin;