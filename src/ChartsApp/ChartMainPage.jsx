import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

const ChartMainPage = (prosp) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<div className="home-body" style={{ backgroundColor: "skyblue" }}>
			<h1>Main Page</h1>
			<>
				<Navbar bg="dark" variant="dark">
					<Container>
						<Button variant="primary" onClick={handleShow}>
							Show Menu
						</Button>

						{/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
						<Nav className="me-auto">
							{/* <Nav.Link href="#home">Home</Nav.Link> */}
							<Nav.Link href="./">Main-Page</Nav.Link>
							<Nav.Link href="./LineChart">Line-Chart</Nav.Link>
							<Nav.Link href="./BarChart>Bar-Chart</Nav.Link>
							<Nav.Link href="./MainPageParots">Parot-App</Nav.Link>
							<Nav.Link href="./Demo">Demo-App</Nav.Link>
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
export default ChartMainPage;
