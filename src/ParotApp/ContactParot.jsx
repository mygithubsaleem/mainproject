import React from "react";
import styles from "../ParotApp/Parrot.module.css";
import ParotFotter from "./ParotFotter";
import ParotHeader from "./ParotHeader";
// import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import { Form, Col, Row, ListGroup } from "react-bootstrap";

function ContactParot(props) {
	return (
		<div className="home-body">
			<Form className={styles.formbody}>
				<h2>SHFT SOL:Developper: Muhammad Saleem/03434810913</h2>

				<p>{<ParotHeader />}</p>

				<div className={styles.middlebody}>
					<h1>Contact Us</h1>
					<h3>Why do you contact us?</h3>
				</div>
				<div className="parotBody">
					<Row>
						<Col>
							<ListGroup as="ol" numbered>
								<ListGroup.Item className={styles.ListGroup2Items}>Expreinced Team</ListGroup.Item>
								<ListGroup.Item className={styles.ListGroup2Items}>
									Variety of Animals
								</ListGroup.Item>
								<ListGroup.Item className={styles.ListGroup2Items}>
									Economical Prices
								</ListGroup.Item>
								<ListGroup.Item className={styles.ListGroup2Items}>Medical Advices</ListGroup.Item>
								<ListGroup.Item className={styles.ListGroup2Items}>
									Customer Satisfaction
								</ListGroup.Item>
								<ListGroup.Item className={styles.ListGroup2Items}>Birds Cages</ListGroup.Item>
								<ListGroup.Item className={styles.ListGroup2Items}>Birds Feed</ListGroup.Item>
							</ListGroup>
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

export default ContactParot;
