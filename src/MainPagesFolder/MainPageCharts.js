import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

const MainPageCharts = (prosp) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<div className="home-body" style={{ backgroundColor: "skyblue" }}>
			<h3>Charts-App</h3>
			<>
				<Navbar bg="dark" variant="dark">
					<Container>
						<Button variant="primary" onClick={handleShow}>
							Menu
						</Button>

						{/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
						<Navbar.Brand href="./">Main-Page</Navbar.Brand>
						<Navbar.Brand href="../LineChart1">Line Chart</Navbar.Brand>
						<Navbar.Brand href="../BarChart1">Bar Chart</Navbar.Brand>
						<Navbar.Brand href="../PieChart1">Pie Chart</Navbar.Brand>
						<Navbar.Brand href="../DonutChart">Donut Chart</Navbar.Brand>
						<Navbar.Brand href="../AreaChart1">Area Chart</Navbar.Brand>

					</Container>
				</Navbar>
			</>
			<>
				<Container>
					<Offcanvas show={show} onHide={handleClose}>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title></Offcanvas.Title>
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
				</Container>
			</>
		</div>
	);
};
export default MainPageCharts;
