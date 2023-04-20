import React, { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import signpic from "./MernImages/image6.png";
import style from "./Merncss.module.css";
import axios from "axios";
import MernHeader from "./MernHeader";

const MernSignup = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState({
		name: "",
		email: "",
		phone: "",
		work: "",
		passwd: "",
		cpasswd: "",
	});
	const [currentInput, setCurrentInput] = useState({
		name: "",
		email: "",
		phone: "",
		work: "",
		passwd: "",
		cpasswd: "",
	});

	const addNewUser = async (e) => {
		//e.preventDefault();
		const newuser = { ...user, ...currentInput };
		setUser(newuser);
		setCurrentInput({
			name: "",
			email: "",
			phone: "",
			work: "",
			passwd: "",
			cpasswd: "",
		});

		const { name, email, phone, work, passwd, cpasswd } = newuser;
		console.log("new user...", newuser);

		if (!name || !email || !phone || !work || !passwd || !cpasswd) {
			return window.alert("Please fill the empty field!");
		} else {
			if (currentInput.email === email) {
				window.alert("Your are already registerd");
				return navigate("/MernLogin");
			}

			axios
				.post("/MernSignup", { name, email, phone, work, passwd, cpasswd })
				.then((a) => {
					window.alert("Registration  successfull.");
					console.log("Registration  successfull.", a);
				})
				.catch((err) => {
					window.alert("Registration  failed.");
				});
		}
	};

	return (
		<div>
			<>
				<div className="signup-form">
					<form method="POST" className="mern-form" id="register-form">
						{<MernHeader />}

						<Row className="row no-gutters">
							<Col className="col-4" />
							<Col className="col-4 mt-5">
								<h2 className="ml-3">Sign up</h2>
								<img className="signup-pic" src={signpic} alt="signupimage" />
								<div className={style.signup_login_link}>
									<Button>
										Login <NavLink to="/MernLogin" />
									</Button>
								</div>
							</Col>
							<Col className="col-4">
								<div className={style.signup_inputare}>
									<label htmlFor="name">
										<i className="zmdi zmdi-account metrial-icons-name mr-2"></i>
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={currentInput.name}
										onChange={(e) => {
											setCurrentInput({ ...currentInput, name: e.target.value });
										}}
										placeholder="Enter Your Name "
									/>
								</div>
								<div className="form-group mt-3">
									<label htmlFor="email">
										<i className="zmdi zmdi-email metrial-icons-name mr-2"></i>
									</label>
									<input
										type="text"
										id="email"
										name="email"
										value={currentInput.email}
										onChange={(e) => {
											setCurrentInput({ ...currentInput, email: e.target.value });
										}}
										placeholder="Enter Your Email "
									/>
								</div>
								<div className="form-group mt-3">
									<label htmlFor="phone mt-3">
										<i class="zmdi zmdi-phone metrial-icons-name mr-2"></i>
									</label>

									<input
										type="text"
										id="phone"
										name="phone"
										value={currentInput.phone}
										onChange={(e) => {
											setCurrentInput({ ...currentInput, phone: e.target.value });
										}}
										placeholder="Enter Your Phone Number "
									/>
								</div>
								<div className="form-group mt-3">
									<label htmlFor="work">
										<i className="zmdi zmdi-slideshow metrial-icons-name mr-2"></i>
									</label>
									<input
										type="text"
										id="work"
										name="work"
										value={currentInput.work}
										onChange={(e) => {
											setCurrentInput({ ...currentInput, work: e.target.value });
										}}
										placeholder="Enter Your Profession "
									/>
								</div>
								<div className="form-group mt-3">
									<label htmlFor="passwd">
										<i className="zmdi zmdi-lock metrial-icons-name mr-2"></i>
									</label>
									<input
										type="password"
										id="passwd"
										name="passwd"
										value={currentInput.passwd}
										onChange={(e) => {
											setCurrentInput({ ...currentInput, passwd: e.target.value });
										}}
										placeholder="Enter Your Pass Word "
									/>
								</div>
								<div className="form-group mt-3">
									<label htmlFor="cpasswd">
										<i className="zmdi zmdi-lock metrial-icons-name mr-2"></i>
									</label>
									<input
										type="password"
										id="cpasswd"
										name="cpasswd"
										value={currentInput.cpasswd}
										onChange={(e) => {
											setCurrentInput({ ...currentInput, cpasswd: e.target.value });
										}}
										placeholder="Confirm Pass Word "
									/>
								</div>
								<div className="submit-button  mt-3 ml-3">
									<Button
										variant="success "
										onClick={() => {
											addNewUser();
										}}
									>
										Register
									</Button>
								</div>
							</Col>
						</Row>
					</form>
				</div>
			</>
		</div>
	);
};

export default MernSignup;
