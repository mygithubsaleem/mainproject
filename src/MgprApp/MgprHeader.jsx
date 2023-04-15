import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

import { Navbar, Button, Container, Nav, Carousel, Form } from "react-bootstrap";

function MgprHeader() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<div className="home-body">
			<Form>
				{/* <Nav bar .Body> */}
				<div>
					<Navbar variant="dark" bg="dark" expand="sm">
						<Container>
							<Button variant="primary" onClick={handleShow}>
								Show Menu
							</Button>
							<Navbar.Brand href="/" style={{ color: "red" }}>
								Main Page
							</Navbar.Brand>
							<Navbar.Brand href="./WagonMgpr" style={{ color: "red" }}>
								Wagon
							</Navbar.Brand>
							<Navbar.Brand href="./WagonMgpr" style={{ color: "red" }}>
								Train
							</Navbar.Brand>
							<Navbar.Brand href="./Sr6Hr" style={{ color: "red" }}>
								6 Hr SR
							</Navbar.Brand>
							<Navbar.Brand href="./Sr8Hr" style={{ color: "red" }}>
								8 Hr SR
							</Navbar.Brand>
							<Navbar.Brand href="./Sr16Hr" style={{ color: "red" }}>
								16 Hr SR
							</Navbar.Brand>
							<Navbar.Brand href="./Yp" style={{ color: "red" }}>
								Yard Postion
							</Navbar.Brand>
							<Navbar.Brand href="./YpLine" style={{ color: "red" }}>
								Yard Position/Line
							</Navbar.Brand>
						</Container>
					</Navbar>
				</div>
				{/* <occanvas Body> */}

				<>
					<Container>
						<Offcanvas show={show} onHide={handleClose}>
							<Offcanvas.Header closeButton>
								<Offcanvas.Title></Offcanvas.Title>
							</Offcanvas.Header>

							<div className="sidebar">
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
								<Link to="/MernHeader">
									<Button className="block" type="button">
										Mern App{" "}
									</Button>
								</Link>
								<br />

								<Link to="/MgprHeader/">
									<Button className="block" type="button">
										MGPR App
									</Button>
								</Link>

								<br />
								<Link to="Demo/">
									<Button className="block" type="button">
										Demo-App
									</Button>
								</Link>
							</div>
						</Offcanvas>
					</Container>
				</>
			</Form>
		</div>
	);
}

export default MgprHeader;
