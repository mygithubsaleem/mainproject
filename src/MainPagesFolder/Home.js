import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { Navbar, Container, Button } from "react-bootstrap";
// import mpStyles from "./MainPages.css";

const Home = (prosp) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div style={{ backgroundColor: "skyblue" }}>
			<h3>Main Page</h3>
			<>
				<Navbar bg="dark" variant="dark">
					<Container>
						<Button variant="primary" onClick={handleShow}>
							Menu
						</Button>

						<Navbar.Brand href="./MainPageProject1">Project-1</Navbar.Brand>
						<Navbar.Brand href="./MainPagePr">PR-Project</Navbar.Brand>
						<Navbar.Brand href="./MainPageCharts">Charts-App</Navbar.Brand>
						<Navbar.Brand href="./MainPageParots">Parot-App</Navbar.Brand>
						<Navbar.Brand href="./Demo">Demo-App</Navbar.Brand>
						<Navbar.Brand href="./LoginForm">Login</Navbar.Brand>
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
		</div>
	);
};
export default Home;
