import React from "react";
import { useState } from "react";
import fruuitstyles from "./Fruits.module.css";
import { Button, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainPageProject1 from "../MainPagesFolder/MainPageProject1";

const FbFruitObject = (props) => {
	const [Fruits, setFruits] = useState([
		{ name: "apple", quantity: "2", price: "200" },
		{ name: "melon", quantity: "3", price: "100" },
	]);
	const [CurrentInput, setCurrentInput] = useState([{ name: "", quantity: "", price: "" }]);
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
		<div className={fruuitstyles.body}>
			<MainPageProject1 />
			<Form>
				<div className={fruuitstyles.inputArea}>
					<h2>Shoping Cart-2</h2>

					<input
						className={fruuitstyles.input_box}
						type="text"
						placeholder="Enter the Fruit"
						value={CurrentInput.name}
						onChange={(e) => {
							setCurrentInput({
								...CurrentInput,
								name: e.target.value,
							});
						}}
					></input>
					<br />

					<input
						className={fruuitstyles.input_box}
						type="text"
						placeholder="Enter the quantity"
						value={CurrentInput.quantity}
						onChange={(e) => {
							setCurrentInput({
								...CurrentInput,
								quantity: e.target.value,
							});
						}}
					></input>
					<br />

					<input
						className={fruuitstyles.input_box}
						type="text"
						placeholder="Enter the total price"
						value={CurrentInput.price}
						onChange={(e) => {
							setCurrentInput({
								...CurrentInput,
								price: e.target.value,
							});
						}}
					></input>
					<br />
					<br />

					<Button
						variant="success"
						onClick={() => {
							addFruits();
						}}
					>
						Add Fruits
					</Button>
					<Button
						className={fruuitstyles.input_btn}
						variant="dark"
						onClick={() => {
							clearData();
						}}
					>
						Clear List
					</Button>

					{SellectedIndex !== null && (
						<Button
							className={fruuitstyles.input_btn}
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

				<div>
					{Fruits.map((data, index) => (
						<div key={index}>
							<Row>
								<Col className="Col-5 mt-5 "></Col>

								<Col className="Col-1 ">
									<span> {index + 1}</span>
								</Col>
								<Col>
									<span> {data.name}</span>
								</Col>
								<Col>
									<span> {data.price}</span>
								</Col>
								<Col>
									{" "}
									<span>{data.quantity}</span>
								</Col>
								<Col>
									{" "}
									<span> {data.price}</span>
								</Col>

								<Col className="Col-1 ">
									<Button
										variant="info"
										onClick={() => {
											editFruit(index);
										}}
									>
										Edit
									</Button>
								</Col>
								<Col className="Col-1 ">
									<Button
										variant="danger"
										onClick={() => {
											deleteFruit(index);
										}}
									>
										Delete
									</Button>
								</Col>
							</Row>
						</div>
					))}
				</div>
			</Form>
		</div>
	);
};
export default FbFruitObject;
