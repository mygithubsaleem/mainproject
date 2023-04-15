import React from "react";
import emppic1 from "./MernImages/flower4.jpg";
import { Tabs, Tab, Button, NavLink } from "react-bootstrap";
import MernHeader from "./MernHeader";

const MernAboutus = () => {
	return (
		<>
			<div className="emp_profile ">
				<p>{<MernHeader />}</p>

				<form method="" className="aboutus-form">
					<div className="row ">
						<div className="col-md-5 pl-lg-5 mt-3 ">
							<img src={emppic1} alt="saleem" width={200} height={200} />
						</div>
						<div className="col-md-5 p-lg-5">
							<div className="profile">
								<h5>Muhammad Saleem</h5>
								<h6>Web Developer</h6>
								<p className="profile-rating mt-3 mb-5">
									RANKING:<span>1/10</span>
								</p>
							</div>
						</div>
						<div className="col-md-2 pt-lg-5">
							<Button className="emp-edit-btn" variant="danger">
								Edit Profile
							</Button>
						</div>
					</div>
					<div className="row mt-3 ">
						<div className="col-md-4 p-lg-5">
							<p>WORK LINKS</p>
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
												<label>Web Developer</label>
											</div>
										</div>
									</div>
								</Tab>
								<Tab eventKey="profile" title="Time Line">
									<div className="col-md-4 ">
										<div className="row">
											<div className="col-md-6">
												<label>Experinece</label>
												<label> Hourly Rate</label>
												<label> Total Projects</label>
												<label>English Level</label>
												<label> Availability</label>
											</div>
											<div className=" col-md-6 ">
												<label>Expert</label>
												<label>80$/h</label>
												<label>Ten</label>
												<label>Expert</label>
												<label> 3 Months</label>
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
