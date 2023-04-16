import React from "react";
import emppic1 from "./MernImages/flower4.jpg";
import { Tabs, Tab, Button, NavLink } from "react-bootstrap";
import MernHeader from "./MernHeader";
import styles from "./Merncss.module.css";

const MernAboutus = () => {
	return (
		<>
			<div className="emp_profile ">
				{<MernHeader />}

				<form method="" className="aboutus-form">
					<div className="row  p-lg-5">
						<div className="col-md-5 pl-lg-5 mt-1 ">
							<img src={emppic1} alt="saleem" width={200} height={200} />
						</div>
						<div className="col-md-2 mt-3 ">
							<h5>Muhammad Saleem</h5>
							<h6>Web Developer</h6>
							<h3>RANKING:1/10</h3>
						</div>
						<div className="col-md-2 pt-lg-5">
							<Button className="emp-edit-btn" variant="danger">
								Edit Profile
							</Button>
						</div>
					</div>
					<div className="row">
						<div className="col-md-2 m-xl-5 ">
							<h3>WORK LINKS</h3>
							<a href="" target="_saleem">
								You Tuber
							</a>
							<br />
							<a href="" target="_slaeem">
								Bloger
							</a>
							<br />
							<a href="" target="_saleem">
								Veloger
							</a>
						</div>
						<div className="col-md-2"></div>
						<div className="col-md-4 ">
							<Tabs defaultActiveKey="profile" id="emp-tab" className="mb-3">
								<Tab eventKey="home" title="About" justify="true">
									<div className="col-md-4 ">
										<div className="row">
											<div className="col-md-6">
												<label>User Id</label>
												<label> Name</label>
												<label> Email</label>
												<label>Phone</label>
												<label> Pfofession</label>
											</div>
											<div className="col-md-6">
												<label>73743483</label>
												<label>Saleem</label>
												<label>saleem65.teacher@gmail.com</label>
												<label>+923434810913</label>
												<label>WebDeveloper</label>
											</div>
										</div>
									</div>
								</Tab>
								<Tab eventKey="profile" title="Time Line">
									<div className="col-md-8 ">
										<div className="row ">
											<div className="col-md-5 ">
												<label>Experinece</label>
												<label> Hourly Rate</label>
												<label> Total Projects</label>
												<label>English Level</label>
												<label> Availability</label>
											</div>
											<div className="col-md-3">
												<label>Expert</label>
												<label>80$/h</label>
												<label>Ten</label>
												<label>Expert</label>
												<label>3Months</label>
											</div>
										</div>
									</div>
								</Tab>
							</Tabs>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default MernAboutus;
