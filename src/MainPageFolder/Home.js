import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

const Home = (prosp) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<div className="home-body" style={{ backgroundColor: "skyblue" }}>
			<>
				<Navbar bg="dark" variant="dark">
					<Container>
						<Button variant="primary" onClick={handleShow}>
							Show Menu
						</Button>

						{/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
						<Nav className="me-auto">
							{/* <Nav.Link href="#home">Home</Nav.Link> */}
							<Nav.Link href="./Aboutus">About Us</Nav.Link>
							<Nav.Link href="./Services">Services</Nav.Link>
							<Nav.Link href="./Contact">Contact us</Nav.Link>
							<Nav.Link href="./Blog">Blog</Nav.Link>
							<Nav.Link href="./newProject1">Project-1</Nav.Link>
							<Nav.Link href="./PrPage">PR Project</Nav.Link>
						</Nav>
					</Container>
				</Navbar>
			</>
			<br />
			<>
				<Container>
					<Offcanvas show={show} onHide={handleClose}>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title></Offcanvas.Title>
						</Offcanvas.Header>

						<div className="sidebar">
							<Link to="/Aboutus">
								<Button className="block" type="button">
									About Us
								</Button>
							</Link>
							<br />

							<Link to="/Services">
								<Button className="block" type="button">
									Services
								</Button>
							</Link>
							<br />

							<Link to="/Contact">
								<Button className="block" type="button">
									Contact Us
								</Button>
							</Link>
							<br />

							<Link to="/Blogs">
								<Button className="block" type="button">
									Blog
								</Button>
							</Link>
							<Link to="NewProject1/">
								<Button className="block" type="button">
									Project-1
								</Button>
							</Link>
							<br />
							<Link to="/PrPage">
								<Button className="block" type="button">
									PR Project
								</Button>
							</Link>
							<br />
						</div>
					</Offcanvas>
				</Container>
			</>
		</div>
	);
};
export default Home;
