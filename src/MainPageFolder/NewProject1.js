import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

function NewProject1() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<div className="home-body" style={{ backgroundColor: "skyblue" }}>
			<h1>Projec-1</h1>
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
							<Nav.Link href="./Parots">Parots</Nav.Link>
							<Nav.Link href="./Demo">Demo</Nav.Link>
						</Nav>
					</Container>
				</Navbar>
			</>
			<br />
			<br />
			<>
				<Offcanvas show={show} onHide={handleClose}>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title></Offcanvas.Title>
					</Offcanvas.Header>
					{/* <Offcanvas.Body> */}

					<div className="sidebar">
						<Link to="/">
							<Button className="block" type="button">
								Home
							</Button>
						</Link>
						<br />

						<Link to="/PrPage">
							<Button className="block" type="button">
								PR Project
							</Button>
						</Link>
						<br />
						<Link to="/FbFruitString">
							<Button className="block" type="button">
								Shop Cart-1
							</Button>
						</Link>
						<br />
						<Link to="/FbFruitObject">
							<Button className="block" type="button">
								Shop Cart-2
							</Button>
						</Link>
						<br />

						<Link to="/linecharttest">
							<Button className="block" type="button">
								Line Chart
							</Button>
						</Link>
						<br />

						<Link to="/animal">
							<Button className="block" type="button">
								Animals
							</Button>
						</Link>
						<br />

						<Link to="/ValueTest">
							<Button className="block" type="button">
								Value Test
							</Button>
						</Link>                            
						<br />
						<Link to="/Parots">
							<Button className="block" type="button">
								Parots
							</Button>
						</Link>
						<Link to="/Demo">
							<Button className="block" type="button">
								Demo
							</Button>
						</Link>
					</div>
					{/* </Offcanvas.Body> */}
				</Offcanvas>
			</>
			;
		</div>
	);
}
export default NewProject1;
