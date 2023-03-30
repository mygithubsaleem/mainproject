import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

function MainPagePr() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<div style={{ backgroundColor: "skyblue" }}>
			<h3>PR Project</h3>
			<>
				<Navbar expand="sm" bg="dark" variant="dark">
					<Container>
						<Button variant="primary" onClick={handleShow}>
							Menu
						</Button>

						<Navbar.Brand href="./">Main-Page</Navbar.Brand>
						<Navbar.Brand href="./HomePr">Home </Navbar.Brand>
						<Navbar.Brand href="./AboutUsPr">About Us</Navbar.Brand>
						<Navbar.Brand href="./ServicesPr">Services</Navbar.Brand>
						<Navbar.Brand href="./LoginPr">Login</Navbar.Brand>
						<Navbar.Brand href="./ContacUstPr">Contact Us</Navbar.Brand>
						<Navbar.Brand href="./SignUpPr">Sign Up</Navbar.Brand>

						<Navbar.Brand href="./BlogPr">Blog</Navbar.Brand>
					</Container>
				</Navbar>
			</>
			<>
				<Offcanvas show={show} onHide={handleClose}>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title>Click the option</Offcanvas.Title>
					</Offcanvas.Header>

					<div className="sidebar">
						<Link to="/">
							<Button className="block" type="button">
								Main-Page{" "}
							</Button>
						</Link>
						<br />

						<Link to="/MainPageProject1">
							<Button className="block" type="button">
								Project-1{" "}
							</Button>
						</Link>
						<br />

						<Link to="/MainPagePr">
							<Button className="block" type="button">
								PR-Project
							</Button>
						</Link>
						<br />

						<Link to="/MainPageCharts">
							<Button className="block" type="button">
								Charts-App{" "}
							</Button>
						</Link>
						<br />

						<Link to="/MainPageParots/">
							<Button className="block" type="button">
								Parot-App
							</Button>
						</Link>
						<Link to="/LoginForm">
							<Button className="block" type="button">
								Login
							</Button>
						</Link>

						<Link to="Demo/">
							<Button className="block" type="button">
								Demo-App
							</Button>
						</Link>
					</div>
				</Offcanvas>
			</>
			;
		</div>
	);
}
export default MainPagePr;
