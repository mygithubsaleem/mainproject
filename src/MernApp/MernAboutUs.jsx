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
									<p className={style.tab_para}>
										Name: &nbsp;&nbsp;&nbsp;Muhammad Saleem
										<br />
										Email: &nbsp;&nbsp;&nbsp;saleem65.teacher@gmail.com
										<br />
										Phone: &nbsp;&nbsp;&nbsp; +923434810913
										<br />
										Pfofession: &nbsp;&nbsp;&nbsp;WebDeveloper
									</p>
								</Tab>
								<Tab className={style.about_tab} eventKey="profile" title="Time Line">
									<p className={style.tab_para}>
										Level: &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;Expert
										<br />
										Hourly: &nbsp;&nbsp;&nbsp; &nbsp;80$/h
										<br />
										Projects: &#160;&#160;&#160;10
										<br />
										English: &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;Expert
										<br />
										Availability: &nbsp;&nbsp;&nbsp;Open
									</p>
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
