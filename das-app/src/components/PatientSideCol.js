import React from "react";
import { Nav, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function PatientSideCol() {
  return (
    <Nav
      defaultActiveKey="/home"
      className="flex-column border-left-0 "
      style={{ width: "15rem" }}
    >
      <h1>DashBoard</h1>
      <hr></hr>

      <Card
        className="border-right-0 border-left-0 border-top-1 links"
        style={{
          margin: "10px",
          marginLeft: "6px",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          height: "45px",
          float: "left",
          backgroundColor: "#e9ecef",
        }}
      >
        <Link
          to="login/patient/*/view/doctor"
          style={{ textDecoration: "none" }}
        >
          <h5 style={{ color: " #219EB2" }}>
            <img
              src="https://img.icons8.com/plasticine/2x/doctor-male.png"
              class="rounded-circle"
              style={{ height: "2rem", width: "2rem" }}
            />{" "}
            View All Doctors
          </h5>
        </Link>
      </Card>
      <Card
        className="border-right-0 border-left-0 border-top-0 links"
        style={{
          margin: "10px",
          marginLeft: "6px",
          textAlign: "center",
          alignItems: "center",
          backgroundColor: "#e9ecef",

          justifyContent: "center",
          height: "45px",
        }}
      >
        <Link
          to="login/patient/*/search/spl"
          style={{ textDecoration: "none" }}
        >
          <h5 style={{ color: " #219EB2" }}>
            <img
              src="https://img.icons8.com/external-smashingstocks-thin-outline-color-smashing-stocks/2x/external-Appointment-healthcare-smashingstocks-thin-outline-color-smashing-stocks.png"
              class="rounded-circle"
              style={{ height: "2rem", width: "2rem" }}
            />{" "}
            Book Appointment
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
				<Link to='login/patient/*/feedback/add' style={{ textDecoration: 'none' }}>
					<h5 style={{ color: ' #219EB2' }}>
						<img
							src='https://img.icons8.com/color/2x/satisfied.png'
							class='rounded-circle'
							style={{ height: '2.2rem', width: '3rem' }}
						/>{' '}
						Add Feedback
					</h5>
				</Link>
			</Card>
			
      <Card
        className="border-right-0 border-left-0 border-top-0 links"
        style={{
          margin: "10px",
          marginLeft: "6px",
          textAlign: "center",
          alignItems: "center",

          justifyContent: "center",
          height: "45px",
          backgroundColor: "#e9ecef",
        }}
      >
        <Link
          to="login/patient/*/view/report"
          style={{ textDecoration: "none" }}
        >
          <h5 style={{ color: " #219EB2" }}>
            <img
              src="https://image.shutterstock.com/image-vector/diagnostic-report-icon-260nw-796709692.jpg"
              class="rounded-circle"
              style={{ height: "2.2rem", width: "4rem" }}
            />{" "}
            View Report
          </h5>
        </Link>
      </Card>
      <Card
        className="border-right-0 border-left-0 border-top-1 links"
        style={{
          margin: "10px",
          marginLeft: "6px",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          height: "45px",
          float: "left",
          backgroundColor: "#e9ecef",
        }}
      >
        <Link
          to="login/patient/*/patient/viewappointment"
          style={{ textDecoration: "none" }}
        >
          <h5 style={{ color: " #219EB2" }}>
            <img
              src="https://img.icons8.com/plasticine/2x/doctor-male.png"
              class="rounded-circle"
              style={{ height: "2rem", width: "2rem" }}
            />{" "}
            View Appointment
          </h5>
        </Link>
      </Card>
      {/* <Card
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
				<Link to='/feedback/all' style={{ textDecoration: 'none' }}>
					<h5 style={{ color: ' #219EB2' }}>
						<img
							src='https://img.icons8.com/color-glass/2x/health-graph.png'
							class='rounded-circle'
							style={{ height: '2.2rem', width: '2.2rem', paddingLeft:'0px' }}
						/>{' '}
						Add patientReport
					</h5>
				</Link>
			</Card> */}
    </Nav>
  );
}
export default PatientSideCol;
