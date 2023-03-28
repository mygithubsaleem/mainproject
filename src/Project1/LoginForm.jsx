import React from "react";
import { useState } from "react";
//import styles from "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert, Button } from "react-bootstrap";
import { Json, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const LoginForm = () => {
	const [userArray, setUserArray] = useState([
		{ email: "amjad@gmail.com", pw: "amjad123" },
		{ email: "anwar@gmail.com", pw: "anwar123" },
	]);
	const [currentInput, setCurrentInpput] = useState({ email: "", pw: "" });
	const [togAction, setTogAction] = useState(true);
	const tog1 = () => {
		setTogAction(!togAction);
	};
	const fruit = true;
	const [changeFruit, setChangeFruit] = useState(true);
	const handleFruit = () => {
		setChangeFruit(!changeFruit);
	};
	const checkUser = () => {
		const findUser = userArray.find((element) => {
			return element.email === currentInput.email && element.pw === currentInput.pw;
		});
		// const findUser = userArray.filter(
		// 	(userData, index) => userData.email === currentInput.email && userData.pw === currentInput.pw
		// );
		if (findUser) {
			//<Alert type="error" message="user found...." />;
			alert("YES........");
		} else {
			alert("NO......");
			//<Alert type="success" message="User does not exist..." />;
		}
	};
	return (
		<div style={{ textAlign: "center" }}>
			<h1>Login Form.....</h1>
			<h1 style={{ textAlign: "left" }}>
				{" "}
				<Link to="/">Home</Link>
			</h1>
			<div>
				<label>Enter email:</label>
				<input
					type="text"
					value={currentInput.email}
					onChange={(e) => {
						setCurrentInpput({ ...currentInput, email: e.target.value });
					}}
				/>
				<label>Enter password:</label>
				<input
					type={togAction ? "password" : "text"}
					value={currentInput.pw}
					onChange={(e) => {
						setCurrentInpput({ ...currentInput, pw: e.target.value });
					}}
				/>

				<Button
					onClick={() => {
						tog1();
					}}
				>
					{togAction === true ? (
						<FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon>
					) : (
						<FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
					)}
				</Button>

				<br />
				<br />

				<Button
					onClick={() => {
						checkUser();
					}}
				>
					Submit
				</Button>
				<br />
				<br />
			</div>
			<br />

			{userArray.map((data, index) => (
				<li key={index}>
					<h1>
						<p style={{ background: "blue", color: "white" }}>
							Email:...{data.email}PassWord:...{data.pw}
						</p>
					</h1>
				</li>
			))}
			{/* <div>
				<h1>{!fruit && <h3>apple</h3>}</h1>
			</div> */}
			<br />
			<Button
				onClick={() => {
					handleFruit();
				}}
			>
				click me to change fruit
			</Button>
			<br />
			{/* <div>
				<h1>{fruit && <h3>apple</h3>}</h1>
			</div> */}

			<div>
				<h1>
					{changeFruit ? (
						<h3 style={{ color: "darkGreen" }}>apple</h3>
					) : (
						<h3 style={{ color: "darkOrange" }}>orange</h3>
					)}
				</h1>
			</div>
		</div>
	);
};
export default LoginForm;
