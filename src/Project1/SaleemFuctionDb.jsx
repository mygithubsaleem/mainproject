import React from "react";
import { db } from "./config/db/index.js";
import { collection, addDoc, Timestamp } from "firebase/firestore";

class SaleemFuctionDb extends React.Component {
	state = {
		users: [{ email: "a", password: "123" }],
		email: "",
		password: "",
	};
	addUser = () => {
		const { users, email, password } = this.state;
		let newUserObj = {
			email: email,
			password: password,
			createdAt: Timestamp.now(),
		};
		addDoc(collection(db, "users"), newUserObj)
			.then((response) => {
				this.setState({ users: [...users, newUserObj] });
			})
			.catch((error) => {
				console.error("ERROR:", error);
			});

		// console.log("new user..", this.state.users);
		// console.log("new email..", this.state.email);
		// console.log("new password..", this.state.password);
		// this.setState({ users: [...users, newUserObj] });
		// console.log("new entry...", newUserObj);
	};
	render() {
		const { users, email, password } = this.state;

		return (
			<div>
				<h1>my new dtabase test at firestore ..</h1>

				<h2>Login Form</h2>
				<label>Enter your email</label>
				{"   "}
				<input
					type="email"
					value={email}
					onChange={(e) => {
						this.setState({ email: e.target.value });
					}}
				></input>
				<br />
				<label>Enter your password</label>
				{"    "}
				<input
					type="password"
					value={password}
					name="password"
					id="password"
					onChange={(e) => {
						this.setState({ password: e.target.value });
					}}
				></input>

				<br />
				<button type="submit" onClick={this.addUser}>
					Login
				</button>

				<br />
				<>
					{users.map((item, index) => {
						return (
							<p key={index}>
								{item.email}-{item.password}
							</p>
						);
					})}
				</>
			</div>
		);
	}
}
export default SaleemFuctionDb;
