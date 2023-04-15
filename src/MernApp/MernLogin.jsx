import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import loginpic from "./MernImages/image7.png";
import styles from "../App.css";
import MernHeader from "./MernHeader";


const MernLogin = () => {
	return (
		<>
			<p>{<MernHeader />}</p>
			<section className="signin_page">
				<div className="container ">
					<div className="signin-content">
						<div className="signin-form ">
							<form className="register-form" id="register-form">
								<Row className="row no-gutters">
									<Col className="col-4" />
									<Col className="col-4 mt-5">
										<div className="signin-figure">
											<h2 className="ml-3">Log In</h2>
											<img className="login-pic" src={loginpic} alt="loginpic" />
										</div>
										<br />
										<div>
											<nav class="nav-item-active">
												<Button variant="primary">
													<NavLink to="/Signup" className="nav-link">
														Create Account
													</NavLink>
												</Button>
											</nav>
										</div>
									</Col>
									<Col className="login-col-input col-4 ">
										<div className="form-group">
											<label htmlFor="email">
												<i class="zmdi zmdi-email metrial-icons-name mr-2"></i>
											</label>
											<input
												type="text"
												id="email"
												name="email"
												autoComplete="off"
												placeholder="Enter Your Email "
											/>
										</div>
										<div className="form-group">
											<label htmlFor="password">
												<i class="zmdi zmdi-lock metrial-icons-name mr-2"></i>
											</label>
											<input
												type="password"
												id="password"
												name="password"
												autoComplete="off"
												placeholder="Enter Your Pass Word "
											/>
										</div>
										<div className="submit-button ml-4">
											<Button variant="success">Login</Button>
										</div>
									</Col>
								</Row>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default MernLogin;
