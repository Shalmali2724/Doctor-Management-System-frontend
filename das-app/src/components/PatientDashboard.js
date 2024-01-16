import { Routes, Route } from 'react-router-dom';

// import SideCol from '../Styles/SideCol';
import '../Styles/SideCol.css'
import { Container, Col, Row, Navbar } from 'react-bootstrap';
import React from 'react';
import CNavBar from './Navbar';
import FetchAllDoctors from './FetchAllDoctors';
// import './SideCol.css'
import PatientSideCol from './PatientSideCol';

import UpdateDoctor from './UpdateDoctor';
import SearchFeedbackByDrId from './SearchFeedbackByDrId';
import ByDoctorId from './ByDoctorId';
import SearchBySpl from './SearchBySpl';
import AddPatientReport from './AddPatientReport';
import SearchPatientReport from './SearchPatientReport';
import AddFeedback from './AddFeedback';
import ByPatientId from './ByPatientId';
const user = JSON.parse(localStorage.getItem("mytoken"));
function DoctorDashBoard() {
	

	return (
		
		
		
				<>
				    <CNavBar/>
				{
				user !== null ? 
				<div>
					
					<Container className='container'>
						<Row >
						
							<Col sm={5}>
								<PatientSideCol/>
								
							</Col>
							

							<Col >
								<Routes>
									
									<Route path='login/patient/*/view/doctor' element={<FetchAllDoctors/>} />
									<Route path='login/patient/*/search/spl' element={<SearchBySpl/>}/>
								
									<Route path='login/patient/*/view/report' element={<SearchPatientReport/>}/>
									<Route path='login/patient/*/feedback/add' element={<AddFeedback/>}/>
									<Route path="login/patient/*/patient/viewappointment"   element={<ByPatientId/>}></Route>
                                    {/* <Route path='/feedback/add' element={<ByDoctorId/>}/> */}
                                    {/* <Route path='/view/report' element={<ByDoctorId/>}/> */}
									{/* <Route path='/feedback/add' exact element={<SearchFeedbackByDrId/>}/> */}
									
								</Routes>
								
							</Col>
						</Row>
					</Container>
					
					</div>
					:<h2>Please login</h2>
				}
				</>
			
			
		
	);
}

export default DoctorDashBoard;
