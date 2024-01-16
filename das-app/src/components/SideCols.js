import React from 'react';
import { Nav, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SideCol() {
    return(
<Nav 
			defaultActiveKey='/home'
			className='flex-column border-left-0 '
			style={{ width: '15rem'  }}>
			<h1>DashBoard</h1>
			<hr></hr>
		
			<Card
				className='border-right-0 border-left-0 border-top-1 links'
				style={{
					margin: '10px',
					marginLeft: '6px',
					textAlign: 'center',
					alignItems: 'center',
					justifyContent: 'center',
					height: '45px',
					float: 'left',
					backgroundColor: '#e9ecef',
				}}>
				<Link to='login/doctor/*/profile/update' style={{ textDecoration: 'none' }}>
					<h5 style={{ color: ' #219EB2' }}>
						<img
							src='https://img.icons8.com/color/512/doctor-male.png'
							class='rounded-circle'
							style={{ height: '2rem', width: '2rem' }}
						/>{' '} 
						
						update Profile
					</h5>
				</Link>
			</Card>
			<Card
				className='border-right-0 border-left-0 border-top-0 links'
				style={{
					margin: '10px',
					marginLeft: '6px',
					textAlign: 'center',
					alignItems: 'center',
                    backgroundColor: '#e9ecef',
					
					justifyContent: 'center',
					height: '45px',
				}}>
				<Link to='login/doctor/*/feedback/id' style={{ textDecoration: 'none' }}>
					<h5 style={{ color: ' #219EB2' }}>
						<img
							src='https://img.icons8.com/ios-glyphs/512/thumbs-up-down.png'
							class='rounded-circle'
							style={{ height: '2rem', width: '2rem' }}
						/>{' '}
						ViewFeedback
					</h5>
				</Link>
			</Card>
			<Card
				className='border-right-0 border-left-0 border-top-0 links'
				style={{
					margin: '10px',
					marginLeft: '6px',
					textAlign: 'center',
					alignItems: 'center',

					justifyContent: 'center',
					height: '45px',
					backgroundColor: '#e9ecef',
				}}>
				<Link to='login/doctor/*/availability/add' style={{ textDecoration: 'none' }}>
					<h5 style={{ color: ' #219EB2' }}>
						<img
							src='https://img.icons8.com/external-flaticons-lineal-color-flat-icons/512/external-availability-hotel-management-flaticons-lineal-color-flat-icons-2.png'
							class='rounded-circle'
							style={{ height: '2.2rem', width: '3rem' }}
						/>{' '}
						Add Availability
					</h5>
				</Link>
			</Card>
			
			
			
			
			<Card
				className='border-right-0 border-left-0 border-top-0 links'
				style={{
					margin: '10px',
					marginLeft: '6px',
					textAlign: 'center',
					alignItems: 'center',

					justifyContent: 'center',
					height: '45px',
					backgroundColor: '#e9ecef',
				}}>
				<Link to='login/doctor/*/availability/delete' style={{ textDecoration: 'none' }}>
					<h5 style={{ color: ' #219EB2' }}>
						<img
							src='https://img.icons8.com/external-flaticons-lineal-color-flat-icons/512/external-availability-hotel-management-flaticons-lineal-color-flat-icons-2.png'
							class='rounded-circle'
							style={{ height: '2.2rem', width: '3rem' }}
						/>{' '}
						delete Availability
					</h5>
				</Link>
			</Card>
			

			<Card
				className='border-right-0 border-left-0 border-top-0 links'
				style={{
					margin: '10px',
					marginLeft: '6px',
					textAlign: 'center',
					alignItems: 'center',

					justifyContent: 'center',
					height: '45px',
					backgroundColor: '#e9ecef',
				}}>
				<Link to='login/doctor/*/view/appointments' style={{ textDecoration: 'none' }}>
					<h5 style={{ color: ' #219EB2' }}>
						<img
							src='https://img.icons8.com/external-isometric-vectorslab/512/external-Doctor-Appointment-medical-and-healthcare-isometric-vectorslab.png'
							class='rounded-circle'
							style={{ height: '2.2rem', width: '4rem' }}
						/>{' '}
						Appointments
					</h5>
				</Link>
			</Card>
			<Card
				className='border-right-0 border-left-0 border-top-0 links'
				style={{
					margin: '10px',
					marginLeft: '6px',
					textAlign: 'center',
					alignItems: 'center',

					justifyContent: 'center',
					height: '45px',
					backgroundColor: '#e9ecef',
				}}>
				<Link to='login/doctor/*/patientreport/add' style={{ textDecoration: 'none' }}>
					<h5 style={{ color: ' #219EB2' }}>
						<img
							src='https://img.icons8.com/color-glass/2x/health-graph.png'
							class='rounded-circle'
							style={{ height: '2.2rem', width: '2.2rem', paddingLeft:'0px' }}
						/>{' '}
						Add patientReport
					</h5>
				</Link>
			</Card>
			
			
		</Nav>
	);
}
export default SideCol;