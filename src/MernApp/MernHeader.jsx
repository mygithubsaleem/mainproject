import React from "react";
import "bootstrap/dist/css/bootstrap.css";
//import { NavLink } from "react-router-dom";
import logo from "./MernImages/logo1.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Merncss.module.css";

const MernHeader = () => {
	return (
		<>
			<Navbar className={styles.navbar} collapseOnSelect expand="sm">
				<Container>
					<img className="header-logo ml-3 " src={logo} alt="logo" />
					<Navbar.Brand href="./">SHFT-SOLUTION</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="./">Main-Page</Nav.Link>
							<Nav.Link></Nav.Link>
						</Nav>
						<Nav>
							<Nav.Link href="./MernHome">Home</Nav.Link>
							<Nav.Link href="./MernAboutus">About Us</Nav.Link>
							<Nav.Link href="./MernContactus">Contact Us</Nav.Link>
							<Nav.Link href="./MernLogin">Login</Nav.Link>
							<Nav.Link href="./MernSignup">Sign UP</Nav.Link>
							<Nav.Link href="./MernErrorPage">Error Page</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default MernHeader;
