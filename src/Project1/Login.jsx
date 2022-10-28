import React from "react";
import { useState } from "react";
import styles from "./Login.css";

import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
	const [Users, setUsers] = useState([
		{ email: "ali@gmail.com", pw: "ali123" },
		{ email: "aslam@gmail.com", pw: "aslam123" },
	]);
	const [currentInput, setCurrentInput] = useState({ email: "", pw: "" });
	const findUser = () => {
		const userFound = Users.find((element) => {
			return (
				element.email === currentInput.email && element.pw === currentInput.pw
			);
		});

		if (userFound) {
			alert("user found ...");
		} else {
			alert("user not found...");
		}
	};

	return (
		<div className="container">
			<div className={styles.inputArea}>
				<label>Email address</label>
				<input
					type="email"
					value={currentInput.email}
					onChange={(e) => {
						setCurrentInput({ ...currentInput, email: e.target.value });
					}}
				/>
				<div>We'll never share your email with anyone else.</div>
			</div>
			<div>
				<label>Password</label>
				<input
					// type="password"
					value={currentInput.pw}
					onChange={(e) => {
						setCurrentInput({ ...currentInput, pw: e.target.value });
					}}
				/>
			</div>
			<button
				type="button"
				onClick={() => {
					findUser();
				}}
			>
				Submit
			</button>
		</div>
	);
};
export default Login;
