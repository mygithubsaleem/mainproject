import React from "react";
import { setItem, getItem } from "../helpers/dataHelpers";

class Customer extends React.Component {
	state = {
		users: [],
		currentInput: "",
		selectedUser: "",
		selectedIndex: null,
	};

	componentDidMount() {
		const data = getItem("users");
		if (data) {
			this.setState({ users: data });
		}
	}

	addCustomer = () => {
		const { currentInput } = this.state;

		if (getItem("users")) {
			let data = getItem("users");
			const obj = {
				id: data.length + 1,
				name: currentInput,
			};
			data.push(obj);
			setItem("users", data);
			this.setState({ users: data, currentInput: "" });
		} else {
			const obj = {
				id: 1,
				name: currentInput,
			};
			setItem("users", [obj]);
			this.setState({ users: [obj], currentInput: "" });
		}
	};

	edditCustomer = (userId) => {
		const { users } = this.state;

		if (getItem("users")) {
			let data = getItem("users");
			const obj = data.find((userObj) => {
				return userObj.id === userId;
			});

			this.setState({
				selectedIndex: userId,
				currentInput: obj.name,
			});
		}
	};
	updateUser = () => {
		const { users, currentInput, selectedIndex, selectedUser } = this.state;

		let updateArr = getItem("users");
		let updateObj;

		updateArr.find((userObj, index) => {
			updateObj = index;
			return userObj.id === selectedIndex;
		});

		updateArr[updateObj].name = currentInput;

		setItem("users", updateArr);
		this.setState({ users: updateArr });
		console.log("updated user  result....", updateArr, this.state);
	};

	deleteCustomer = (userId) => {
		let delArr = getItem("users");
		const delData = delArr.filter((item, index) => {
			return item.id != userId;
		});
		setItem("users", delData);
		this.setState({ users: delData });
	};

	clearStorage = () => {
		localStorage.clear();
		this.setState({ users: [] });
	};

	render() {
		const { currentInput, users } = this.state;
		console.log("RENDER", users);
		return (
			<div>
				<p>Customer Customer Page....</p>
				<input
					type="text"
					value={currentInput}
					onChange={(event) => {
						this.setState({ currentInput: event.target.value });
					}}
				/>
				<br />
				<br />
				<button
					className="m-2"
					variant="primary"
					onClick={() => {
						this.addCustomer();
					}}
				>
					Add Customer
				</button>
				<br />
				<br />
				<button
					className="m-2"
					variant="warning"
					onClick={() => {
						this.clearStorage();
					}}
				>
					Clear Local Storage
				</button>

				{this.state.selectedIndex && (
					<button
						className="m-2"
						variant="dark"
						onClick={() => {
							this.updateUser();
						}}
					>
						Update Customer
					</button>
				)}

				<br />
				<br />
				<br />
				<ul>
					{users.map((a, index) => (
						<li key={index}>
							<>
								<span>{a.id}</span> <span>{a.name}</span>
							</>
							<button
								onClick={() => this.deleteCustomer(a.id)}
								variant="danger"
								className="m-2"
							>
								Delete Item
							</button>
							<button
								onClick={() => this.edditCustomer(a.id)}
								variant="warning"
								className="m-2"
							>
								Edit Item
							</button>
						</li>
					))}
				</ul>
			</div>
		);
	}
}
export default Customer;
