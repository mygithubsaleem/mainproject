import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { NavLink, json, navigate, useNavigate } from "react-router-dom";

import axios from "axios";

import loginpic from "./MernImages/image7.png";
import style from "./Merncss.module.css";
import MernHeader from "./MernHeader";

const MernLogin = (props) => {
	const navigate = useNavigate();

	const [currentInput, setCurrentInput] = useState({
		name: "",
		email: "",
		phone: "",
		work: "",
		passwd: "",
		cpasswd: "",
	});
	const [user, setUser] = useState({
		name: "anwar",
		email: "anwar@gmail.com",
		phone: "123",
		work: "pilot",
		passwd: "anwar123",
		cpasswd: "anwar123",
	});

	const userLogin = async (e) => {
		e.preventDefault();
		const loginuser = { ...user, ...currentInput };
		setUser(loginuser);
		setCurrentInput({
			name: "",
			email: "",
			phone: "",
			work: "",
			passwd: "",
			cpasswd: "",
		});

		const { name, email, phone, work, passwd, cpasswd } = loginuser;
		console.log("this  user..is trying to log in...", loginuser);

		if (!email || !passwd) {
			return window.alert("Please fill the empty field!");
		}
		axios
			.post("/MernLogin", { email, passwd })
			.then((a) => {
				navigate("/MernHome");
			})

			.catch((err) => {
				alert(err.response.data.message);
			});
	};

	return (
		<>
			{<MernHeader />}
			<form method="POST" className="mern-form" id="register-form">
				<Row className="row no-gutters">
					<Col className="col-4" />
					<Col className="col-4 mt-5">
						<div className="signin-figure">
							<h2 className="ml-3">Log In</h2>
							<img className="login-pic" src={loginpic} alt="loginpic" />
						</div>
						<br />
						<nav class="nav-item-active">
							<Button variant="primary">
								<NavLink to="/MernSignup" className="nav-link">
									Create Account
								</NavLink>
							</Button>
						</nav>
					</Col>
					<Col className="login-col-input col-4 ">
						<div className={style.login_inputArea}>
							<label htmlFor="email">
								<i class="zmdi zmdi-email metrial-icons-name mr-2"></i>
							</label>
							<input
								type="text"
								value={currentInput.email}
								onChange={(e) => {
									setCurrentInput({ ...currentInput, email: e.target.value });
								}}
								id="email"
								name="email"
								placeholder="Enter Your Email "
							/>
						</div>
						<div className="form-group mt-3">
							<label htmlFor="password">
								<i class="zmdi zmdi-lock metrial-icons-name mr-2"></i>
							</label>
							<input
								type="password"
								value={currentInput.passwd}
								onChange={(e) => {
									setCurrentInput({ ...currentInput, passwd: e.target.value });
								}}
								id="password"
								name="password"
								placeholder="Enter Your Pass Word "
							/>
						</div>
						<div className="submit-button mt-3 ml-4">
							<Button variant="success" onClick={userLogin}>
								Login
							</Button>
						</div>
					</Col>
				</Row>
			</form>
		</>
	);
};

export default MernLogin;
