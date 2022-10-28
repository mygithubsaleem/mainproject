import { useState } from "react";
import React from "react";
//import styles from "./App.css";
import styles from "./Fruits.module.css";

import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FbFruitObject = (props) => {
	const [Fruits, setFruits] = useState([
		{ name: "apple", quantity: "2", price: "200" },
		{ name: "melon", quantity: "3", price: "100" },
	]);
	const [CurrentInput, setCurrentInput] = useState([
		{ name: "", quantity: "", price: "" },
	]);
	const [SellectedIndex, setSellectedIndex] = useState(null);

	const addFruits = () => {
		const addNewFruits = [...Fruits, { ...CurrentInput }];
		setFruits(addNewFruits);
		setCurrentInput({ name: "", quantity: "", price: "" });
	};

	const clearData = () => {
		setFruits([]);
		setCurrentInput({ name: "", quantity: "", price: "" });
	};
	const deleteFruit = (index) => {
		const delcopy = Fruits.filter((data, id) => id !== index);
		setFruits(delcopy);
	};

	const editFruit = (index) => {
		setCurrentInput(Fruits[index]);
		setSellectedIndex(index);
	};

	const updateFruit = () => {
		let newFruit = [...Fruits];
		newFruit[SellectedIndex] = CurrentInput;
		setFruits(newFruit);
		setCurrentInput({ name: "", quantity: "", price: "" });
		setSellectedIndex(null);
	};
	return (
		<div>
			<br />
			<div>
				<h1>
					{" "}
					<Link to="/">Home</Link>
				</h1>
			</div>
			<br />

			<h2 className={styles.heading1}>Shoping Cart-2</h2>
			<br />
			<div className={styles.inputArea}>
				<label>Enter the fruit</label>

				<input
					style={{ marginLeft: "3%" }}
					type="text"
					value={CurrentInput.name}
					onChange={(e) => {
						setCurrentInput({
							...CurrentInput,
							name: e.target.value,
						});
					}}
				></input>
				<br />
				<label>Enter the quantity</label>

				<input
					type="text"
					style={{ marginLeft: "1%" }}
					value={CurrentInput.quantity}
					onChange={(e) => {
						setCurrentInput({
							...CurrentInput,
							quantity: e.target.value,
						});
					}}
				></input>
				<br />
				<label>Enter the price</label>

				<input
					style={{ marginLeft: "2.6%" }}
					type="text"
					value={CurrentInput.price}
					onChange={(e) => {
						setCurrentInput({
							...CurrentInput,
							price: e.target.value,
						});
					}}
				></input>
			</div>
			<br />
			<div className={styles.inputArea}>
				<Button
					variant="success"
					onClick={() => {
						addFruits();
					}}
				>
					Add Fruits
				</Button>
				<Button
					variant="dark"
					style={{ marginLeft: "12px" }}
					onClick={() => {
						clearData();
					}}
				>
					Clear List
				</Button>

				{SellectedIndex !== null && (
					<Button
						style={{ marginLeft: "12px" }}
						className={styles.btn}
						variant="warning"
						onClick={() => {
							updateFruit();
						}}
					>
						Up Date Fruit
					</Button>
				)}
			</div>
			<br />

			<br />

			<div className={styles.listArea}>
				{/* <ul> */}
				{Fruits.map((data, index) => (
					<li key={index}>
						<span> {index + 1}</span>
						<span> {data.name}</span>
						<span>{data.quantity}</span>
						<span> {data.price}</span>
						<Button
							style={{ marginLeft: "20px" }}
							className={styles.btn}
							variant="info"
							onClick={() => {
								editFruit(index);
							}}
						>
							Edit
						</Button>

						<Button
							style={{ marginLeft: "12px" }}
							className={styles.btn}
							variant="danger"
							onClick={() => {
								deleteFruit(index);
							}}
						>
							Delete
						</Button>
					</li>
				))}
				{/* </ul> */}
			</div>
			<br />
		</div>
	);
};
export default FbFruitObject;
