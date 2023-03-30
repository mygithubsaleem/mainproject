import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import {
	Navbar,
	Container,
	Nav,
	NavDropdown,
	Carousel,
	FormControl,
} from "react-bootstrap";

const navbarStyle = {
	backgroundColor: "red",
	color: "white",
	padding: "10px",
	fontFamily: "Sans-Serif",
};

class HomePagePr extends React.Component {
	render() {
		return (
			<div>
				<div>
					<Navbar variant="dark" bg="dark" expand="lg">
						<Container fluid>
							<Navbar.Brand href="#home">PRHSL</Navbar.Brand>
							<Navbar.Toggle aria-controls="navbar-dark-example" />
							<Navbar.Collapse id="navbar-dark-example">
								<Nav>
									<NavDropdown
										id="nav-dropdown-dark-example"
										title="About US"
										menuVariant="dark"
									>
										<NavDropdown.Item href="#action/3.1">
											Welcome
										</NavDropdown.Item>
										<NavDropdown.Item href="#action/3.2">
											History
										</NavDropdown.Item>
										<NavDropdown.Item href="#action/3.3">
											The Board of Diarectors
										</NavDropdown.Item>
										<NavDropdown.Item href="#action/3.4">
											Employement
										</NavDropdown.Item>
										<NavDropdown.Item href="#action/3.1">
											Community
										</NavDropdown.Item>
										<NavDropdown.Item href="#action/3.2">
											Photo Galary
										</NavDropdown.Item>
										<NavDropdown.Item href="#action/3.3">
											Policy
										</NavDropdown.Item>
									</NavDropdown>
								</Nav>
								<Nav>
									<NavDropdown
										id="nav-dropdown-dark-example"
										title="Education"
										menuVariant="dark"
									>
										<NavDropdown.Item href="#action/3.1">
											Middle
										</NavDropdown.Item>
										<NavDropdown.Item href="#action/3.2">
											Matric
										</NavDropdown.Item>
										<NavDropdown.Item href="#action/3.3">
											Inter
										</NavDropdown.Item>
									</NavDropdown>
								</Nav>
								<Nav>
									<NavDropdown
										id="nav-dropdown-dark-example"
										title="Alumni"
										menuVariant="dark"
									>
										<NavDropdown.Item href="#action/3.1">
											Middle
										</NavDropdown.Item>
										<NavDropdown.Item href="#action/3.2">
											Matric
										</NavDropdown.Item>
										<NavDropdown.Item href="#action/3.3">
											Inter
										</NavDropdown.Item>
									</NavDropdown>
								</Nav>
								<Nav>
									<NavDropdown
										id="nav-dropdown-dark-example"
										title="Admissions"
										menuVariant="dark"
									>
										<NavDropdown.Item href="#action/3.1">
											Admission Policies
										</NavDropdown.Item>
										<NavDropdown.Item href="#action/3.2">Fees</NavDropdown.Item>
										<NavDropdown.Item href="#action/3.3">
											Uniform
										</NavDropdown.Item>
										<NavDropdown.Item href="#action/3.4">
											Admission Form
										</NavDropdown.Item>
									</NavDropdown>
								</Nav>
								<Nav>
									<NavDropdown
										id="nav-dropdown-dark-example"
										title="Studens Life"
										menuVariant="dark"
									>
										<NavDropdown.Item href="#action/3.1">
											Extra Curriculum Activities
										</NavDropdown.Item>
										<NavDropdown.Item href="#action/3.2">
											Field Trips
										</NavDropdown.Item>
										<NavDropdown.Item href="#action/3.3">
											Yearly Book
										</NavDropdown.Item>
									</NavDropdown>
								</Nav>
								<Nav>
									<NavDropdown
										id="nav-dropdown-dark-example"
										title="News"
										menuVariant="dark"
									>
										<NavDropdown.Item href="#action/3.1">
											Current News
										</NavDropdown.Item>
										<NavDropdown.Item href="#action/3.2">
											Future Planning
										</NavDropdown.Item>
									</NavDropdown>
								</Nav>
								<Nav>
									<NavDropdown
										id="nav-dropdown-dark-example"
										title="Campuses"
										menuVariant="dark"
									>
										<NavDropdown.Item href="#action/3.1">
											Lahore
										</NavDropdown.Item>
										<NavDropdown.Item href="#action/3.2">
											Sukkar
										</NavDropdown.Item>
										<NavDropdown.Item href="#action/3.3">
											Karachi
										</NavDropdown.Item>
									</NavDropdown>
								</Nav>
								<Nav>
									<NavDropdown
										id="nav-dropdown-dark-example"
										title="Contact Us"
										menuVariant="dark"
									>
										<NavDropdown.Item href="#action/3.1">
											Postal Address
										</NavDropdown.Item>
										<NavDropdown.Item href="#action/3.2">
											Phone & WhatsApp
										</NavDropdown.Item>
									</NavDropdown>
								</Nav>
								<Nav>
									<FormControl
										type="input"
										placeholder="Search"
										className="mr-sm-2"
									/>
									<Button variant="outline-info"> </Button>
								</Nav>
							</Navbar.Collapse>
						</Container>
					</Navbar>
				</div>
				<>
					<Container>
						<Carousel align={"center"} style={{ backgroundColor: "black" }}>
							<Carousel.Item interval={1000}>
								<img
									alt="500x500"
									className="d-block w-25"
									src="./flower1.jpg/"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									alt="500x500"
									className="d-block w-25"
									src="./flower2.jpg"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									alt="500x500"
									className="d-block w-25"
									src="./flower3.jpg"
								/>
							</Carousel.Item>
						</Carousel>
					</Container>
				</>
			</div>
		);
	}
}
export default HomePagePr;
