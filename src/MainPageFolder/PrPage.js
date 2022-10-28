import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

function PrPage() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<div className="home-body" style={{ backgroundColor: "skyblue" }}>
			<h1>PR Project</h1>
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
						</Nav>
					</Container>
				</Navbar>
			</>
			<br />
			<br />
			<>
				<Offcanvas show={show} onHide={handleClose}>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title>Click the option</Offcanvas.Title>
					</Offcanvas.Header>

					<div className="sidebar">
						<Link to="/">
							<Button className="block" type="button">
								Home
							</Button>
						</Link>
						<br />
						<Link to="/NewProject1">
							<Button className="block" type="button">
								Project-1
							</Button>
						</Link>
						<br />
						<Link to="/HomePagePr">
							<Button className="block" type="button">
								PR Home
							</Button>
						</Link>
						<br />
					</div>
				</Offcanvas>
			</>
			;
		</div>
	);
}
export default PrPage;
