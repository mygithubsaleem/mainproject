import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import loginpic from "./MernImages/image7.png";
import style from "./Merncss.module.css";
import MernHeader from "./MernHeader";

const MernLogin = () => {
	return (
		<>
			{<MernHeader />}
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
									<NavLink to="/MernSignup" className="nav-link">
										Create Account
									</NavLink>
								</Button>
							</nav>
						</div>
					</Col>
					<Col className="login-col-input col-4 ">
						<div className={style.login_inputArea}>
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
						<div className="form-group mt-3">
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
						<div className="submit-button mt-3 ml-4">
							<Button variant="success">Login</Button>
						</div>
					</Col>
				</Row>
			</form>
		</>
	);
};

export default MernLogin;
