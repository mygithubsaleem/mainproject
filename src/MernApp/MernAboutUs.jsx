import React from "react";
import emppic1 from "./MernImages/flower4.jpg";
import { Tabs, Tab, Button, NavLink, Row, Col } from "react-bootstrap";
import MernHeader from "./MernHeader";
import style from "./Merncss.module.css";

const MernAboutus = () => {
	return (
		<>
			<div className="emp_profile ">
				{<MernHeader />}

				<form method="" className={style.about_form}>
					<Row>
						<Col className={style.about_col1}>
							<div>
								<img src={emppic1} alt="saleem" width={200} height={200} />
							</div>
							<h3>WORK LINKS</h3>
							<div className={style.work_links}>
								<a href="">You Tuber</a>
								<br />
								<a href="">Bloger</a>
								<br />
								<a href="">Veloger</a>
							</div>
						</Col>
						<Col className={style.about_col2}>
							<h5>Muhammad Saleem</h5>
							<h6>Web Developer</h6>
							<h3>RANKING:1/10</h3>
							<Tabs className={style.about_tabs} defaultActiveKey="profile" id="emp-tab" justify>
								<Tab className={style.about_tab} eventKey="home" title="About" justify="true">
									<div>
										<label>User Id:</label>
										<label className={style.about_label}>73743483</label>
										<br />
										<label> Name:</label>
										<label className={style.about_label}>Saleem</label>
										<br />
										<label> Email:</label>{" "}
										<label className={style.about_label}>saleem65.teacher@gmail.com</label>
										<br />
										<label>Phone:</label> <label className={style.about_label}>+923434810913</label>
										<br />
										<label> Pfofession:</label>{" "}
										<label className={style.about_label}>WebDeveloper</label>
									</div>
								</Tab>
								<Tab className={style.about_tab} eventKey="profile" title="Time Line">
									<div>
										<div>
											<label>Experinece:</label> <label className={style.about_label}>Expert</label>
											<br />
											<label> Hourly Rate:</label>{" "}
											<label className={style.about_label}>80$/h</label>
											<br />
											<label> Total Projects:</label>{" "}
											<label className={style.about_label}>Ten</label>
											<br />
											<label>English Level:</label>{" "}
											<label className={style.about_label}>Expert</label>
											<br />
											<label> Availability:</label>{" "}
											<label className={style.about_label}>3Months</label>
										</div>
										<div></div>
									</div>
								</Tab>
							</Tabs>
						</Col>
						<Col className={style.about_col3}>
							{" "}
							<Button className="emp-edit-btn" variant="danger">
								Edit Profile
							</Button>
						</Col>{" "}
					</Row>
				</form>
			</div>
		</>
	);
};

export default MernAboutus;
