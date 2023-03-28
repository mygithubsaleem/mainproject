import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "../ParotApp/Parrot.module.css";
import { images } from "./ParotImages";

import { Navbar, Button, Container, Nav, Carousel, Form } from "react-bootstrap";

function ParotHeader() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<div className="home-body" style={{ backgroundColor: "skyblue" }}>
			<Form style={{ backgroundColor: "yellow" }}>
				<div>
					<Offcanvas show={show} onHide={handleClose}>
						<Offcanvas.Header closeButton></Offcanvas.Header>
						{/* <Offcanvas.Body> */}

						<div className="sidebar">
							<Link to="/">
								<Button className="block" type="button">
									Main-Page
								</Button>
							</Link>
							<br />

							<Link to="/HomeParot">
								<Button className="block" type="button">
									Home{" "}
								</Button>
							</Link>
							<br />
							<Link to="/AboutParot">
								<Button className="block" type="button">
									About Us
								</Button>
							</Link>

							<br />
							<Link to="/ContactParot">
								<Button className="block" type="button">
									Contact Us
								</Button>
							</Link>

							<Link to="/serviceParot">
								<Button className="block" type="button">
									Services{" "}
								</Button>
							</Link>
							<br />

							<Link to="/BlogParot">
								<Button className="block" type="button">
									Blog{" "}
								</Button>
							</Link>
							<br />

							<Link to="/PrivacyParot">
								<Button className="block" type="button">
									Privacy Policy{" "}
								</Button>
							</Link>
						</div>
					</Offcanvas>
				</div>
				{/* <Nav bar .Body> */}
				<div>
					<Navbar variant="dark" bg="dark" expand="sm">
						<Container>
							<Button variant="primary" onClick={handleShow}>
								Show Menu
							</Button>
							<Navbar.Brand href="/">Main-Page</Navbar.Brand>
							<Navbar.Brand href="./MainPageParots">Home</Navbar.Brand>
							<Navbar.Brand href="./AboutParot">About Us</Navbar.Brand>
							<Navbar.Brand href="./ContactParot">Contact Us</Navbar.Brand>
							<Navbar.Brand href="./ServiceParot">Services</Navbar.Brand>
							<Navbar.Brand href="./BlogParot">Blog</Navbar.Brand>
							<Navbar.Brand href="./PrivacyParot">Privacy Policy</Navbar.Brand>
						</Container>
					</Navbar>
				</div>
				{/* <crosal.Body> */}

				<div>
					<Container className={styles.carosalitem}>
						<Carousel>
							{images.map((data, ind) => (
								<Carousel.Item interval={1000} key={ind}>
									<img className={styles.carosalimages} src={data} />
								</Carousel.Item>
							))}

							{/* <Carousel.Item interval={1000}>
								<img className={styles.carosalimages} src={images.p1} />
							</Carousel.Item>{" "}
							<Carousel.Item interval={1000}>
								<img className={styles.carosalimages} src={images.p2} />
							</Carousel.Item>
							<Carousel.Item interval={1000}>
								<img className={styles.carosalimages} src={images.p3} />
							</Carousel.Item>
							<Carousel.Item interval={1000}>
								<img className={styles.carosalimages} src={images.p4} />
							</Carousel.Item>
							<Carousel.Item interval={1000}>
								<img className={styles.carosalimages} src={images.p5} />
							</Carousel.Item>
							<Carousel.Item interval={1000}>
								<img className={styles.carosalimages} src={images.p6} />
							</Carousel.Item>
							<Carousel.Item interval={1000}>
								<img className={styles.carosalimages} src={images.p7} />
							</Carousel.Item>
							<Carousel.Item interval={1000}>
								<img className={styles.carosalimages} src={images.p8} />
							</Carousel.Item>
							<Carousel.Item interval={1000}>
								<img className={styles.carosalimages} src={images.p9} />
							</Carousel.Item>
							<Carousel.Item interval={1000}>
								<img className={styles.carosalimages} src={images.p10} />
							</Carousel.Item> */}
						</Carousel>
					</Container>
				</div>
			</Form>
		</div>
	);
}

export default ParotHeader;
