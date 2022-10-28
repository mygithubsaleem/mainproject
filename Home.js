import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

const Home = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<div className="home-body" style={{ backgroundColor: "skyblue" }}>
			<h1>Main Home Page</h1>
			<br />
			<br />
			<>
				<Button variant="primary" onClick={handleShow}>
					Show Menu
				</Button>

				<Offcanvas show={show} onHide={handleClose}>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title>Click the option</Offcanvas.Title>
					</Offcanvas.Header>
					{/* <Offcanvas.Body> */}

					<div className="sidebar">
						<Link to="/NewProject1">
							<Button className="block" type="button">
								Project-1{" "}
							</Button>
						</Link>
						<Link to="/NewProject2">
							<Button className="block" type="button">
								Project-2
							</Button>
						</Link>
						<br />
						<Link to="/blogs">
							<Button className="block" type="button">
								Blogs
							</Button>
						</Link>
						<br />
						<Link to="/contact">
							<Button className="block" type="button">
								Contacts
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

						<Link to="/valuetest">
							<Button className="block" type="button">
								Value Page
							</Button>
						</Link>
						<br />

						<Link to="/Parots">
							<Button className="block" type="button">
								Parots
							</Button>
						</Link>
					</div>
					{/* </Offcanvas.Body> */}
				</Offcanvas>
			</>
			;
		</div>
	);
};
export default Home;
