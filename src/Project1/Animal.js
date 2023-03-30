import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import request from "axios";
import { setAnimals } from "./animalActions";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Row, Col } from "react-bootstrap";
import animalStyles from "./animal.module.css";
import MainPageProject1 from "../MainPagesFolder/MainPageProject1";
const Animal = (props) => {
	useEffect(() => {
		// did mount
		request
			.get("https://api.publicapis.org/entries")
			.then((response) => {
				props.setAnimals(response.data.entries);
			})
			.catch((err) => {
				console.log(err.response);
			});
	}, []);
	const { animalArray, setAdd_animal_data, set_Del_Animal_Action, setclear_Animals_data } = props;
	const [SellectedIndex, setSellectedIndex] = useState(null);
	const [currentInput, setCurrentInput] = useState("");

	const deleteAnimal = (index) => {
		let animalData = [...animalArray];
		let delCopy = animalData.filter((a, ind) => ind !== index);
		set_Del_Animal_Action(delCopy);
	};
	const edit_Animal = (ind) => {
		let animalData = [...animalArray];
		setCurrentInput(animalData[ind].API);

		setSellectedIndex(ind);
	};

	const update_Current_Input = () => {
		let newAnimalArray = [...animalArray];
		newAnimalArray[SellectedIndex].API = currentInput;
		setAnimals(newAnimalArray);
		setCurrentInput("");
		setSellectedIndex(null);
	};
	const addAnimal = () => {
		const add_Animal = [{ API: currentInput }, ...animalArray];
		console.log("api data..", animalArray);
		setAdd_animal_data(add_Animal);
		setCurrentInput("");
	};
	const clearAnimal = () => {
		setCurrentInput("");
		setclear_Animals_data([]);
	};

	return (
		<div className={animalStyles.headerArea}>
			{/* <Link className={animalStyles.link_animal} to="/">
				<h1>Go to Main Page</h1>
			</Link> */}

			<MainPageProject1 />
			<br />
			<div className={animalStyles.inputArea}>
			<label>Enter The Animal Name</label>
			<input
				className={animalStyles.input_tag}
				type="text"
				value={currentInput}
				onChange={(e) => {
					setCurrentInput(e.target.value);
				}}
			></input>
			<br />
			<br />
			<span />
			<Button variant="success" onClick={addAnimal}>
				Add Animal
			</Button>

			<Button variant="dark" className={animalStyles.clear_button} onClick={clearAnimal}>
				Clear Animals
			</Button>
			</div>
			{SellectedIndex !== null && (
				<Button
					variant="warning"
					onClick={() => {
						update_Current_Input();
					}}
				>
					Up Date Animal
				</Button>
			)}
			<br />
			<div className={animalStyles.list_data}>
				<ul>
					{animalArray.map((a, index) => (
						<div key={index} className={animalStyles.list_tag}>
							<br />
							<table>
								<tr>
									<td className={animalStyles.api_data}>{a.API}</td>
									<td>
										<Button
											className={animalStyles.animal_button}
											onClick={() => {
												edit_Animal(index);
											}}
										>
											Edit
										</Button>
									</td>
									<td>
										<Button
											className={animalStyles.animal_button}
											variant="danger"
											onClick={() => {
												deleteAnimal(index);
											}}
										>
											Delete
										</Button>
									</td>
								</tr>
							</table>
						</div>
					))}
				</ul>
			</div>
		</div>
	);
};
// MSP means map state to props....

const MSP = (store) => ({
	animalArray: store.animalReducer.animals,
});

// MDP means map dispatch to props....
const MDP = (dispatch) => ({
	//setAnimals is to render animals array data only....
	setAnimals: (data) => dispatch(setAnimals(data)),
	setclear_Animals_data: () => dispatch({ type: "CLEAR_ANIMALS" }),

	set_Del_Animal_Action: (data) => dispatch({ type: "DELETE_ANIMAL", payload: data }),

	update_Animal_Action: (data) =>
		dispatch({
			type: "UPDATE_ANIMAL",
			payload: data,
		}),
	setAdd_animal_data: (data) =>
		dispatch({
			type: "ADD_ANIMAL",
			payload: data,
		}),
	setEdit_animal_data: (data) =>
		dispatch({
			type: "EDIT_ANIMAL",
			payload: data,
		}),
});
export default connect(MSP, MDP)(Animal);
