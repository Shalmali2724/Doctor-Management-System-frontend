
import { Routes, Route } from 'react-router-dom';


import '../Styles/SideCol.css'
import { Container, Col, Row } from 'react-bootstrap';
import React from 'react';


import SideCol from './SideCols';
import UpdateDoctor from './UpdateDoctor';
import SearchFeedbackByDrId from './SearchFeedbackByDrId';
import ByDoctorId from './ByDoctorId';
import AddPatientReport from './AddPatientReport';
import AddAvailability from './AddAvailability';
import DeleteById from './DeleteById';
import GetByDoctorIdApp from './GetByDoctorIdApp';
import Navbar from './Navbar';
const user = JSON.parse(localStorage.getItem("mytoken"));
function DoctorDashBoard() {
	

	return (
		<div className='App'>
		
				<>
				<Navbar/>
				{
				
				user !== null ? 
				<div>
					
					<Container className='container'>
						<Row >
							<Col sm={5}>
								<SideCol/>
								
							</Col>
							

							<Col >
								<Routes>
									
									<Route path='login/doctor/*/profile/update' element={<UpdateDoctor/>} />
									<Route path='login/doctor/*/view/appointments' element={<ByDoctorId/>}/>
									<Route path='login/doctor/*/feedback/id' exact element={<SearchFeedbackByDrId/>}/>
									<Route path='login/doctor/*/patientreport/add' exact element={<AddPatientReport/>}/>
									<Route path='login/doctor/*/availability/add' element={<AddAvailability/>}/>
									<Route path='login/doctor/*/availability/delete' element={<DeleteById/>}/>
									<Route path='login/doctor/*/availability/update' element={<GetByDoctorIdApp/>}/>
								
								</Routes>
								
							</Col>
						</Row>
					</Container>
					
					</div>
					:<h2>Please login</h2>
				}
				</>
			
			
		</div>
	);
}

export default DoctorDashBoard;
