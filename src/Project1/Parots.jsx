import React from "react";
// import { Link } from "react-router-dom";

import p1 from "./Images/ParotsImg/p1.jpg";
import p2 from "./Images/ParotsImg/p2.jpg";
import p3 from "./Images/ParotsImg/p3.jpg";
import p4 from "./Images/ParotsImg/p4.jpg";
import p5 from "./Images/ParotsImg/p5.jpg";
import p6 from "./Images/ParotsImg/p6.jpg";
import p7 from "./Images/ParotsImg/p7.jpg";
import p8 from "./Images/ParotsImg/p8.jpg";
import p9 from "./Images/ParotsImg/p9.jpg";
import p10 from "./Images/ParotsImg/p10.jpg";
import tweet from "./Images/ParotsImg/tweet.png";
import utube from "./Images/ParotsImg/utube.png";
import whatsapp from "./Images/ParotsImg/whatsapp.png";
import insta from "./Images/ParotsImg/insta.png";
import facebook from "./Images/ParotsImg/facebook.png";

import { useState } from "react";
import {
	Navbar,
	Button,
	Container,
	Nav,
	NavDropdown,
	Carousel,
	FormControl,
	Form,
	Col,
	Row,
	ListGroup,
	ListGroupItem,
} from "react-bootstrap";

const Parots = () => {
	return (
		<div>
			<Form style={{ backgroundColor: "lightgreen" }}>
				<h4>Developper: Muhammad Saleem/03434810913.....</h4>
				<div>
					<Navbar variant="dark" bg="dark" expand="sm">
						<Container fluid>
							<Navbar.Brand href="./Home">Main Page</Navbar.Brand>
							<Navbar.Brand href="./ParotHome">Home</Navbar.Brand>
							<Navbar.Brand href="./ParotAboutus">About Us</Navbar.Brand>
							<Navbar.Brand href="./ParotSevices">Services</Navbar.Brand>
							<Navbar.Brand href="./ParotContactus">Contact Us</Navbar.Brand>
							<Navbar.Brand href="./ParotBlog">Blog</Navbar.Brand>
							<Navbar.Brand href="./ParotPrivacy">Privacy Policy</Navbar.Brand>
						</Container>
					</Navbar>
					<>
						<Container
							align="center"
							width="100%"
							height="100%"
							style={{ backgroundColor: "lightblue" }}
						>
							<Carousel>
								<Carousel.Item interval={1000}>
									<img width={500} height={300} alt="900x500" src={p1} />
								</Carousel.Item>

								<Carousel.Item interval={1000}>
									<img width={500} height={300} alt="900x500" src={p2} />
								</Carousel.Item>
								<Carousel.Item interval={1000}>
									<img width={500} height={300} alt="900x500" src={p3} />
								</Carousel.Item>

								<Carousel.Item interval={1000}>
									<img width={500} height={300} alt="900x500" src={p4} />
								</Carousel.Item>

								<Carousel.Item interval={1000}>
									<img width={500} height={300} alt="900x500" src={p5} />
								</Carousel.Item>
								<Carousel.Item interval={1000}>
									<img width={500} height={300} alt="900x500" src={p6} />
								</Carousel.Item>

								<Carousel.Item interval={1000}>
									<img width={500} height={300} alt="900x500" src={p7} />
								</Carousel.Item>
								<Carousel.Item interval={1000}>
									<img width={500} height={300} alt="900x500" src={p8} />
								</Carousel.Item>

								<Carousel.Item interval={1000}>
									<img width={500} height={300} alt="900x500" src={p9} />
								</Carousel.Item>

								<Carousel.Item interval={1000}>
									<img width={500} height={300} alt="900x500" src={p10} />
								</Carousel.Item>
							</Carousel>
						</Container>
					</>
				</div>
				<div style={{ backgroundColor: "lightgreen", borderRadius: "104px", marginLeft: "40px" }}>
					<h1>Home</h1>
					<h3>We welcome you to adore your home with gorgeous love birds.</h3>
				</div>
				<div className="parotBody">
					<Row>
						<Col>
							<img
								width={500}
								height={295}
								alt="900x500"
								src={p9}
								style={{
									borderRadius: "110px",
									marginLeft: "40px",
								}}
							/>
						</Col>
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
					<Col>
						<p
							style={{
								marginLeft: "40px",
								marginTop: "20px",
								backgroundColor: "lightblue",
								border: "solidRed",
								borderRadius: "44px",
								height: "90px",
							}}
						>
							<ul style={{ marginLeft: "40px" }}>
								<li>10/25 Swami Nagar Lahore 54900.</li>
								<li>Cell#: 03434810913</li>
								<li>What's App#: 03434810913</li>
							</ul>
						</p>
					</Col>
					<Col>
						<p
							style={{
								marginRight: "40px",
								marginTop: "20px",
								backgroundColor: "lightblue",
								border: "solidRed",
								borderRadius: "44px",
								height: "91px",
							}}
						>
							<h6 style={{ marginLeft: "40px" }}>Your can follow us on...</h6>
							<img width={50} height={50} src={utube} style={{ marginLeft: "40px" }} />
							<img width={50} height={50} src={tweet} style={{ marginLeft: "40px" }} />
							<img width={50} height={50} src={insta} style={{ marginLeft: "40px" }} />
							<img width={50} height={50} src={whatsapp} style={{ marginLeft: "40px" }} />
							<img width={50} height={50} src={facebook} style={{ marginLeft: "40px" }} />
						</p>
					</Col>
				</Row>
			</Form>
		</div>
	);
};
export default Parots;
