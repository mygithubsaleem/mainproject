import React from "react";
import ParotFotter from "./ParotFotter";
import ParotHeader from "./ParotHeader";

import { Form, Col, Row, ListGroup } from "react-bootstrap";

const Parots = () => {
	return (
		<div>
			<Form >
				<h4>SHFT SOL:Developper: Muhammad Saleem/03434810913.....</h4>
				<div style={{ backgroundColor: "lightgreen", borderRadius: "104px", marginLeft: "40px" }}>
					<p>{<ParotHeader />}</p>

					<h1>Home</h1>
					<h3>We welcome you to adore your home with gorgeous love birds.</h3>
				</div>
				<div className="parotBody">
					<Row>
						<Col>
							<ListGroup
								as="ol"
								numbered
								style={{
									border: "2",
									borderBlockColor: "red",
									borderRadius: "114px",
									marginRight: "40px",
								}}
							>
								<ListGroup.Item variant="primary">Expreinced Team</ListGroup.Item>
								<ListGroup.Item variant="secondary">Variety of Animals</ListGroup.Item>
								<ListGroup.Item variant="success">Economical Prices</ListGroup.Item>
								<ListGroup.Item variant="danger">Medical Advices</ListGroup.Item>
								<ListGroup.Item variant="warning">Customer Satisfaction</ListGroup.Item>
								<ListGroup.Item variant="info">Birds Cages</ListGroup.Item>
								<ListGroup.Item variant="dark">Birds Feed</ListGroup.Item>
							</ListGroup>
						</Col>
					</Row>
				</div>
				<Row>
					{" "}
					<p>{<ParotFotter />}</p>
				</Row>
			</Form>
		</div>
	);
};
export default Parots;
