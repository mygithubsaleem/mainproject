import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { Navbar, Container, Button } from "react-bootstrap";
// import mpStyles from "./MainPages.css";

function MainPageProject1() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<div style={{ backgroundColor: "skyblue" }}>
			<h1>Projec-1</h1>
			<>
				<Navbar expand="sm" bg="dark" variant="dark">
					<Container>
						<Button variant="primary" onClick={handleShow}>
							Menu
						</Button>

						<Navbar.Brand href="./">Main-Page</Navbar.Brand>
						<Navbar.Brand href="./FbFruitString">Shop-Cart-1</Navbar.Brand>
						<Navbar.Brand href="./FbFruitObject">Shop-Cart-2</Navbar.Brand>
						<Navbar.Brand href="./Animal">Animal</Navbar.Brand>
						<Navbar.Brand href="./ValueTest">Value-Test</Navbar.Brand>
						<Navbar.Brand href="./Demo">Demo-App</Navbar.Brand>
						<Navbar.Brand href="./LoginForm">Login</Navbar.Brand>
					</Container>
				</Navbar>
			</>

			<br />
			<br />
			<>
				{/* <Offcanvas.Body> */}

				<Offcanvas show={show} onHide={handleClose}>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title></Offcanvas.Title>
					</Offcanvas.Header>

					<div className="sidebar">
						<Link to="/">
							<Button className="block" type="button">
								Main-Page
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

						<Link to="/Animal">
							<Button className="block" type="button">
								Animals
							</Button>
						</Link>
						<br />

						<Link to="/ValueTest">
							<Button className="block" type="button">
								Value-Test
							</Button>
						</Link>
						<br />
						<Link to="/LoginForm">
							<Button className="block" type="button">
								Login
							</Button>
						</Link>
						<br />
						<Link to="/Demo">
							<Button className="block" type="button">
								Demo
							</Button>
						</Link>
					</div>
				</Offcanvas>
			</>
		</div>
	);
}
export default MainPageProject1;
