import React from "react";
import { Link } from "react-router-dom";
// import styles from ".FolderCSS/Parots.css";
import { ParotsArray } from "./ParotsArray";
// import p1 from "../p1.jpg";
// import perro from "../perro.jpg";

import fazal from "./Images/Parots/p1.jpg";

import { useState } from "react";
import {
	Navbar,
	Button,
	Container,
	Nav,
	NavDropdown,
	Carousel,
	FormControl,
} from "react-bootstrap";

const Parots = () => {
	// const [currentImg, setCurrentImg] = useState(0);
	const ParotsimgArry = ["image1", "image2"];
	const [ParotsImgArry, setParotsImgArry] = useState([]);

	return (
		<div>
			{/* <Link className="link_home" to="/">
				<h4 align="left" className="home-link">
					Home
				</h4>
			</Link> */}
			<h4>Love Birds.....</h4>
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
				<br />
				<>
					<Container
						width="100%"
						height="100%"
						style={{ backgroundColor: "black" }}
					>
						<Carousel
							width="40%"
							height="100%"
							align="center"
							style={{ backgroundColor: "pink" }}
						>
							<Carousel.Item interval={1000}>
								<img
									width={500}
									height={200}
									// alt="900x500"
									src={fazal}
								/>
							</Carousel.Item>

							<Carousel.Item interval={1000}>
								<img
									width={500}
									height={200}
									// alt="900x500"
									src={fazal}
								/>
							</Carousel.Item>
							{/* <img
									className="p1img"
									// src="p1/800x400?text=First slide&bg=373940"
									src="./Project1/Images/Parots/p1.jpg"
									alt="First slide"
								/>
								<Carousel.Caption>
									<h3>Love Bird...Jojo</h3>
									<p>These are available in single and in pair too.</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item interval={1000}>
								<img
									className="p2img"
									src="./Project1/Images/Parots/p2.jpg"
									alt="Second slide"
								/>
								<Carousel.Caption>
									<h3>Love Bird...Toto</h3>
									<p>These are available in single only.</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item interval={1000}>
								<img
									className="p3img"
									src="./Project1/Images/Parots/p3.jpg"
									alt="Third slide"
								/>
								<Carousel.Caption>
									<h3>Love Bird...momo</h3>
									<p>These are available in pair only.</p>
								</Carousel.Caption>
							</Carousel.Item> */}
						</Carousel>
					</Container>
				</>
			</div>
		</div>
	);
};
export default Parots;
