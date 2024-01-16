import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faYoutube,
	faFacebook,
	faTwitter,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; 
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
function Footer() {
    return (
        <footer id="footer"  class=" .text-dark d-flex-column text-center">
            <div class="container p-4" >
                <section class="">
                    <div class="row">
                        <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                            <div class="bg-image hover-overlay ripple shadow-1-strong rounded" data-ripple-color="light">
                                <img src="https://img.freepik.com/free-vector/medical-background-design_1212-116.jpg?w=2000" width="100px" length="50px" />
                                <a href="#!">
                                    {/* <div class="mask"></div> */}
                                </a>
                            </div>
                        </div>
                        <div class="col-md-3 mx-auto shfooter ">
                            <h6 class="my-2 font-weight-bold d-none d-md-block">About us</h6>
                            <p>We are Commited to Your Health!</p>
                            
                        </div>
                        <div class="col-md-3 mx-auto shfooter ">
                            <h6 class="my-2 font-weight-bold d-none d-md-block">Contact us</h6>
                            <a class="text-light" href="#">Email: das@123gmail.com</a>
                            
                        </div>
                        <div class="col-md-3 mx-auto shfooter">
                            <h6 class="my-2 font-weight-bold d-none d-md-block ">Social Media</h6>
                            <ul>
							<li>
								<a
									href='https://www.youtube.com/c/jamesqquick'
									className='youtube social'
									style={{ marginLeft: '-60px' }}>
									<FontAwesomeIcon icon={faYoutube} size='lg' />
								</a>
							</li>
							<li>
								<a
									href='https://www.facebook.com/learnbuildteach/'
									className='facebook social'
									style={{ marginLeft: '10px' }}>
									<FontAwesomeIcon icon={faFacebook} size='lg' />
								</a>
							</li>
							<li>
								{' '}
								<a
									href='https://www.twitter.com/jamesqquick'
									className='twitter social'
									style={{ marginLeft: '30px' }}>
									<FontAwesomeIcon icon={faTwitter} size='lg' />
								</a>
							</li>
							<li>
								{' '}
								<a
									href='https://www.instagram.com/learnbuildteach'
									className='instagram social'
									style={{ marginLeft: '30px' }}>
									<FontAwesomeIcon icon={faInstagram} size='lg' />
								</a>
							</li>
						</ul>    
                        </div >
						{/* <div style={{ marginLeft: '30px' }} >
						Copyright © 2022 Doctor Appointment System. All Rights Reserved
						</div> */}
						
                    </div>

				
                </section>
            </div>
          
        </footer>
    )
}
export default Footer;