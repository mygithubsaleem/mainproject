import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import request from "axios";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const Demo = () => {
	const [User, setUsers] = useState([
		{ email: "Akbar", pw: "akbar@gmail.com" },
		{ email: "ajmal", pw: "ajmal@gmail.com" },
	]);
	const [currentUser, setCurrentUser] = useState([{ email: "", pw: "" }]);
	const [togAction, setTogAction] = useState(true);
	const [num, setNum] = useState(0);
	useEffect(() => {
		// alert("i am clicked......");

		request
			.get("http://localhost:3000/")

			.then((response) => {
				// props.setAnimals(response.data.entries);
				console.log("here is response..", response);
			})
			.catch((err) => {
				console.log(err.response);
			});
	}, []);
	const findUser = () => {
		// 	const user = Users.find((userData) => {
		// 		return userData.email === currentUser.email && userData.pw === currentUser.pw;
		// 	});
		const user = [];
		console.log(user);
		if (user) {
			alert("user found...");
		} else {
			alert("user not found...");
		}
	};
	const clearUserData = () => {
		setCurrentUser({ email: "", pw: "" });
		setUsers([]);
	};
	const tog1 = () => {
		console.log("tog1 is working...demo..demo..");
		setTogAction(!togAction);
	};

	return (
		<div style={{ textAlign: "center" }}>
			<h3>
				<Link to="/">Home</Link>
			</h3>
			<h1>This is test program only.....</h1>
			<br />
			<label>Enter the Email:</label>
			<input
				type="text"
				value={currentUser.email}
				onChange={(e) => {
					setCurrentUser({ ...currentUser, email: e.target.value });
				}}
			></input>
			<br />
			<label>Enter the password:</label>
			<input
				type={togAction ? "password" : "text"}
				value={currentUser.pw}
				onChange={(e) => {
					setCurrentUser({ ...currentUser, pw: e.target.value });
				}}
			></input>
			<Button
				onClick={() => {
					tog1();
				}}
			>
				{togAction === true ? (
					<FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
				) : (
					<FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon>
				)}
			</Button>
			<br />

			<br />

			<Button
				onClick={() => {
					findUser();
				}}
			>
				Submit
			</Button>
			<Button
				onClick={() => {
					clearUserData();
				}}
			>
				Clear
			</Button>
			<br />
			<h1>Using json method.....</h1>
			{/* {JSON.stringify(Users)} */}
			<br />
			<div>
				{/* {Users.map((data, index) => (
					<li key={index}>
						{data.email}
						{data.pw}
						<Button>Edit</Button>
						<Button>Delete</Button>
					</li>
				))} */}
			</div>
			<div>
				<Button
					onClick={() => {
						setNum(num + 1);
					}}
				>
					Click Me..{num}
				</Button>
			</div>
		</div>
	);
};
export default Demo;
