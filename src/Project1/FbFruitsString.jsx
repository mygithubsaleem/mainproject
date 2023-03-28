import React from "react";
import { useState } from "react";
import fruuitstyles from "./Fruits.module.css";
import { Button, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

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
		<div className={fruuitstyles.body}>
			<Form>
				<h1>
					<Link className={fruuitstyles.fruit_link} to="/">
						Home
					</Link>
				</h1>

				<div className={fruuitstyles.inputArea}>
					<h2>Shoping Cart-1</h2>
					<label>Enter Any Fruit</label>
					<input
						className={fruuitstyles.input_box}
						type="text"
						value={CurrentInput}
						onChange={(e) => {
							setCurrentInput(e.target.value);
						}}
					/>

					<br />
					<br />
					<Button
						className={fruuitstyles.input_btn}
						variant="success"
						onClick={() => {
							AddFruit();
						}}
					>
						Add Fruit
					</Button>
					<Button
						className="ml-3"
						variant="dark"
						onClick={() => {
							ClearFruit();
						}}
					>
						Clear List
					</Button>

					{SelectedIndex !== null && (
						<Button
							className={fruuitstyles.input_btn}
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
				<div>
					{Fruits.map((data, index) => (
						<div key={index}>
							<Row>
								<Col className="col-5 mt-5"></Col>
								<Col className="col-1">
									<span>{data}</span>
								</Col>
								<Col className="col-1 ">
									<Button
										variant="info"
										onClick={() => {
											EditFruits(index);
										}}
									>
										Edit
									</Button>
								</Col>
								<Col className="col-1 ">
									<Button
										variant="danger"
										onClick={() => {
											DeleteFruit(index);
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
export default FbFruitsString;
