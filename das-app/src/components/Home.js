import React from 'react';
import Footer from './Footer'
import Header from './Header';
import './Home.css';
import './Button.css';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import FooterForAll from './FooterForAll';


function Home() {
   
    return (
        <div>
            <div className="img-bg">
                <Header>

                </Header>


                <div class="constraint" style={{ justifyContent: 'center' }}>
                    <div class="button">

                        <a href="/doctor/login" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-primary"><span>Doctor Login</span></button></a>


                        <a href="/patient/login" target="_blank" rel="noopener noreferrer">
                        <button type="button" class="btn btn-primary" ><span>Patient Login</span></button>
                        </a>
                </div>
                <div className="font" align="right">
                  
                </div>

            </div>
         
         <FooterForAll/>

        </div>
        </div >

    )

}
export default Home;

