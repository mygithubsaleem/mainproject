import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import logo from "../Images/logo1.png";
import "../App.css";

const MernHeader = () => {
	return (
		<>
			<div className="header-menu">
				<nav className="navbar navbar-expand-lg ">
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarTogglerDemo01"
						aria-controls="navbarTogglerDemo01"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
						<img className="header-logo ml-3 " src={logo} alt="logo" />
						<NavLink className="navbar-brand ml-1  " to="#">
							SHFT Solution
						</NavLink>
						<ul className="navbar-nav ml-auto mt-2 mt-lg-0">
							<li className="nav-item active">
								<NavLink className="nav-link" to="/">
									Home <span className="sr-only">(current)</span>
								</NavLink>
							</li>
							<li className="nav-item active">
								<NavLink className="nav-link" to="Aboutus">
									About Us <span className="sr-only">(current)</span>
								</NavLink>
							</li>
							<li className="nav-item active">
								<NavLink className="nav-link" to="Contact">
									Contact Us <span className="sr-only">(current)</span>
								</NavLink>
							</li>
							<li className="nav-item active">
								<NavLink className="nav-link" to="Login">
									Login <span className="sr-only">(current)</span>
								</NavLink>
							</li>
							<li className="nav-item active">
								<NavLink className="nav-link" to="Signup">
									Register <span className="sr-only">(current)</span>
								</NavLink>
							</li>
							<li className="nav-item active mr-5">
								<NavLink className="nav-link" to="ErrorPage">
									Error Page <span className="sr-only">(current)</span>
								</NavLink>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</>
	);
};

export default MernHeader;
