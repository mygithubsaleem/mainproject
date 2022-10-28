import React from "react";
import { useState } from "react";
import styles from "./Fruits.module.css";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FbFruitsString = (props) => {
	const [Fruits, setFruits] = useState(["apple", "mango", "banana"]);

	const [CurrentInput, setCurrentInput] = useState("");
	const [SelectedIndex, setSelectedIndex] = useState(null);

	const AddFruit = () => {
		const addNewFruits = [...Fruits, CurrentInput];
		setFruits(addNewFruits);
		setCurrentInput("");
	};
	const ClearFruit = () => {
		setCurrentInput("");
		setFruits([]);
	};
	const DeleteFruit = (index) => {
		const newDelFruit = Fruits.filter((data, ind) => ind !== index);
		setFruits(newDelFruit);
	};
	const EditFruits = (index) => {
		setCurrentInput(Fruits[index]);
		setSelectedIndex(index);
	};
	const UpdateFruits = () => {
		let UpdateFruit = [...Fruits];
		UpdateFruit[SelectedIndex] = CurrentInput;
		setFruits(UpdateFruit);
		setCurrentInput("");
		setSelectedIndex(null);
	};
	return (
		<div className={styles.body}>
			<br />
			<div>
				<h1>
					{" "}
					<Link to="/">Home</Link>
				</h1>
			</div>

			<br />

			<>
				<div className={styles.inputArea}>
					<h2>Shoping Cart-1</h2>
					<label>Enter Any Fruit</label>
					<input
						style={{ marginLeft: "3%" }}
						type="text"
						value={CurrentInput}
						onChange={(e) => {
							setCurrentInput(e.target.value);
						}}
					/>

					<br />
					<br />
					<Button
						className={styles.btn}
						variant="success"
						onClick={() => {
							AddFruit();
						}}
					>
						Add Fruit
					</Button>
					<Button
						className={styles.btn}
						variant="dark"
						style={{ marginLeft: "2%" }}
						onClick={() => {
							ClearFruit();
						}}
					>
						Clear List
					</Button>

					{SelectedIndex !== null && (
						<Button
							style={{ marginLeft: "20px" }}
							variant="warning"
							onClick={() => {
								UpdateFruits();
							}}
						>
							Up Date Fruit
						</Button>
					)}
				</div>

				<br />
				<br />
				<div className={styles.listArea}>
					{Fruits.map((data, index) => (
						<li key={index}>
							<span> {index + 1}</span>
							<span>{data}</span>
							<Button
								style={{ marginLeft: "20px" }}
								variant="info"
								onClick={() => {
									EditFruits(index);
								}}
							>
								Edit
							</Button>
							<Button
								style={{ marginLeft: "12px" }}
								className={styles.btn}
								variant="danger"
								onClick={() => {
									DeleteFruit(index);
								}}
							>
								Delete
							</Button>
						</li>
					))}
				</div>
				<br />
			</>
		</div>
	);
};
export default FbFruitsString;
