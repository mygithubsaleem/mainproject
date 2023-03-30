import React from "react";
import mppstyles from "../ParotApp/Parrot.module.css";
import ParotFotter from "../ParotApp/ParotFotter";
import ParotHeader from "../ParotApp/ParotHeader";
import { Col, Row, Form } from "react-bootstrap";

function MainPageParots() {
	return (
		<div className="main-body">
			<Form className={mppstyles.formbody}>
				<h3>SHFT SOLUTION:/Developper: Muhammad Saleem/03434810913</h3>
				<p>{<ParotHeader />}</p>

				<div className={mppstyles.middlebody}>
					<h1>Home</h1>
					<h2>We welcome you to adore your home with gorgeous love birds.</h2>
				</div>
				<div className="parotBody">
					<Row>
						<Col className="col-12">
							<p className={mppstyles.middlebody}>
								<h3>
									We have variety of love birds. You can purchase single or pair of love birds.
									Plese ensure that we have the bird of your demand in advance by visiting our
									website. We will happy to decorate your home with these beautifull animals at
									reasonable price.
								</h3>
							</p>
							<h2 className={mppstyles.middlebody}>Regards.</h2>
							<h2 className={mppstyles.middlebody}>Zahid Hussain</h2>
						</Col>
					</Row>
				</div>
				<Row>
					<p>{<ParotFotter />}</p>
				</Row>
			</Form>
		</div>
	);
}

export default MainPageParots;
