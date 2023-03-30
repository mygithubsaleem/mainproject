import React from "react";
import { Form, Button, Container } from "react-bootstrap";

class LoginFormPr extends React.Component {
	state = {
		emailArray: [],
		passwordArray: [],
		primes: [],
		currentEmail: "",
		currentPassword: "",
	};

	displayUser = () => {
		console.log("user data from method", this.state.user);
		return this.state.user;
	};

	addUser = () => {
		console.log("login button is working...");
		let addedData1 = [this.state.currentEmail, ...this.state.emailArray];
		this.setState({ emailArray: addedData1 });
		console.log("email array data", addedData1);

		let addedData2 = [this.state.CurrentPassword, ...this.state.passwordArray];
		this.setState({ passwordArray: addedData2 });
		console.log("password array data", addedData2);
		let newData = { addedData1, addedData2 };
		console.log("new data....", newData);
		let primes = addedData1.concat(addedData2);
		console.log("new data 3 ...", primes);
		const objArray = Object.assign({}, primes);
		console.log("object array of Users...", objArray);
	};

	render() {
		const {
			user2,
			user,
			useremail,
			userpw,
			currentInput,
			currentemail,
			currentpw,
		} = this.state;
		console.log("RENDER", user);
		return (
			<div>
				<div>
					<h1>displaying user data from first ur lisst....</h1>
					<ul>
						{this.state.user.map((user2, userIndex) => (
							<li key={userIndex}>{user2}</li>
						))}
					</ul>
					<br />
				</div>
				<>
					<></>
					<div>
						{" "}
						<ol>
							{this.state.user.map((subItems, sIndex) => {
								return <li key={sIndex}> {subItems}</li>;
							})}
						</ol>
					</div>
				</>
				<br />
				<br />
				<>    
					<Container>
						<Form className=" w-50" style={{ backgroundColor: "pink" }}>
							<label>Email Address</label>
							<br />
							<input
								type="text"
								value={currentemail}
								onChange={(event) => {
									this.setState({ currentemail: event.target.value });
								}}
							/>
							<br />
							<p>We'll never share your email with anyone else.</p>
							<label>Passwrod</label>
							<br />
							<input
								type="password"
								value={currentpw}
								onChange={(event) => {
									this.setState({ currentpw: event.target.value });
								}}
							/>
							<br />
							<br />
							<Form.Check type="checkbox" label="Check me out" />
							<br />
							<Button
								onClick={() => {
									this.addPw();
								}}
							>
								Submit
							</Button>
							{"    "}
							<Button
								onClick={() => {
									this.addPw();
								}}
							>
								Reister Now
							</Button>
							{"    "}
							<Button
								onClick={() => {
									this.addPw();
								}}
							>
								Forgot Pass Word
							</Button>
						</Form>
					</Container>
				</>
			</div>
		);
	}
}
export default LoginFormPr;
