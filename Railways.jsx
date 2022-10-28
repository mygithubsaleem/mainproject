import { DatePicker, TimePicker } from "antd";
import React from "react";
import { getItem, setItem } from "./src/project1/helpers/dataHelpers";

class Railways extends React.Component {
	state = {
		Inward: [
			{
				Train: "dps",
				Wagon: 223344,
				Type: "c",
				From: "lhr",
				To: "dvm",
				LE: "e",
				Guard: "baqir",
				TC: "ejaz",
				Cans: "alsam",
				Seal: "n",
				LineNo: "b1",
				Load1: 1,
				Load2: 1,
				ArrivalDate: 2 / 3 / 22022,
				ArrivalTime: 12,
			},
		],
		currentTrain: "",
		currentWagon: 0,
		currentType: "",
		currentFrom: "",
		currentTo: "",
		currentLE: "",
		currentGuard: "",
		currentTC: "",
		currentCans: "",
		currentSeal: "",
		currentLineNo: "",
		currentLoad1: null,
		currentLoad2: null,
		currentArrivalDate: new Date().toLocaleString(),
		currentArrivalTime: new Date().toTimeString(),
	};
	addInward = () => {
		console.log("add inward is working.....");

		const {
			Inward,
			currentArrivalDate,
			currentArrivalTime,
			currentWagon,
			currentType,
			currentGuard,
			currentTC,
			currentSeal,
			currentCans,
			currentLoad1,
			currentLoad2,
			currentLineNo,
			currentTrain,
			currentLE,
			currentFrom,
			currentTo,
		} = this.state;
		if (getItem("Inward")) {
			let inwardsAddArray = getItem("Inward");
			const obj = {
				id: inwardsAddArray.length + 1,
				Type: currentType,
				Wagon: currentWagon,
				LE: currentLE,
				From: currentFrom,
				To: currentTo,
				ArrivalDate: currentArrivalDate,
				ArrivalTime: currentArrivalTime,
				LineNo: currentLineNo,
				Train: currentTrain,
				TC: currentTC,
				Seal: currentSeal,
				Cans: currentCans,
			};
			inwardsAddArray.push(obj);
			setItem("Inward", inwardsAddArray);
			this.setState({});
		} else {
			console.log("ok");
		}
	};
	render() {
		const {
			Inward,
			currentArrivalDate,
			currentArrivalTime,
			currentWagon,
			currentType,
			currentGuard,
			currentTC,
			currentSeal,
			currentCans,
			currentLoad1,
			currentLoad2,
			currentLineNo,
			currentTrain,
			currentLE,
			currentFrom,
			currentTo,
		} = this.state;
		return (
			<div>
				<h1>Railways App MGPR Station Pakistan Railways</h1>
				<br />
				<label>Wagon Type: </label>
				<select
					type="text"
					value={currentType}
					onChange={(inputType) => {
						this.setState({ currentType: inputType.target.value });
					}}
				>
					<option value="BFR"> BFR</option>
					<option value="BFR">MBFU</option>
					<option value="BFR">TL</option>
					<option value="BFR">BTL</option>
					<option value="BFR">V</option>
				</select>
				<br />
				<label>Wagon Number:</label>
				{"  "}
				<input
					type="number"
					value={currentWagon}
					onChange={(inputWagon) => {
						this.setState({ currentWagon: inputWagon.target.value });
					}}
				></input>
				<br />
				<label>Check L/E:</label>
				<select
					type="text"
					value={currentLE}
					onChange={(inputLe) => {
						this.setState({ currentLE: inputLe.target.value });
					}}
				>
					<option value="lD">Ld</option>
					<option value="E">E</option>
				</select>
				{"   "}
				<br />
				<label>FROM</label>
				<input
					type="text"
					value={currentFrom}
					onChange={(inputFrom) => {
						this.setState({ currentFrom: inputFrom.target.value });
					}}
				></input>
				<br />
				<label>TO</label>
				<input
					type="text"
					value={currentTo}
					onChange={(inputTo) => {
						this.setState({ currentTo: inputTo.target.value });
					}}
				></input>
				<br />
				<label>Enter the train:</label>
				<input
					type="text"
					value={currentTrain}
					onChange={(inputTrain) => {
						this.setState({ currentTrain: inputTrain.target.value });
					}}
				></input>

				<label>Enter the Arrival Date:</label>
				{"   "}
				<input
					type="date"
					value={currentArrivalDate}
					onChange={(inputArrivalDate) => {
						this.setState({
							currentArrivalDate: inputArrivalDate.target.value,
						});
					}}
				></input>

				{"  "}
				<label>Enter the ArrivalTime:</label>
				{"   "}
				<input
					type="time"
					value={currentArrivalTime}
					onChange={(inputArrivalTime) => {
						this.setState({
							currentArrivalTime: inputArrivalTime.target.value,
						});
					}}
				></input>
				<label>Select the Line No:</label>
				<select
					id="lno"
					value={currentLineNo}
					onChange={(inputLineNo) => {
						this.setState({ currentLineNo: inputLineNo.target.value });
					}}
				>
					<option value="C1">C1</option>
					<option value="C2">C2</option>
					<option value="RS10">RS10</option>
					<option value="B11">B11</option>
				</select>

				<br />
				<label> Gurard:</label>
				<input
					type="text"
					value={currentGuard}
					onChange={(inputGuard) => {
						this.setState({ currentGuard: inputGuard.target.value });
					}}
				></input>
				{"  "}
				<label>Canstable:</label>
				<input
					type="text"
					value={currentCans}
					onChange={(inputCans) => {
						this.setState({ currentCans: inputCans.target.value });
					}}
				></input>
				<label>Train Clerck</label>
				<input
					type="text"
					value={currentTC}
					onChange={(inputTC) => {
						this.setState({ currentTC: inputTC.target.value });
					}}
				></input>
				<br />
				<button
					onClick={() => {
						this.addInward();
					}}
				>
					Add Rec
				</button>
				{"   "}
				{"   "}
				<button>Find Rec</button>
				<br />

				<table>
					<tbody>
						<tr>
							<td style={{ backgroundColor: "blue" }}>TYPE</td>
							<td style={{ backgroundColor: "yellow" }}>WAGON</td>
							<td style={{ backgroundColor: "red" }}>L/E</td>
							<td style={{ backgroundColor: "green" }}> TRAIN</td>
							<td style={{ backgroundColor: "pink" }}> FROM</td>
							<td style={{ backgroundColor: "orange" }}> TO</td>
						</tr>
					</tbody>
				</table>

				<p>
					{Inward.map((wagonrec, index) => {
						return (
							<li key={index}>
								<span>{wagonrec.Type}</span>
								<span> {wagonrec.Wagon}</span>
								<span> {wagonrec.LE}</span>
								<span> {wagonrec.From}</span>
								<span> {wagonrec.To}</span>
								<button>Edit</button>
								{"         "}
								<button>Delete</button>
								<br />
								<br />
							</li>
						);
					})}
				</p>
				<label>LOAD</label>
				<p>
					{this.state.Load1}
					{"=="}
					{this.state.Load2}
				</p>
				<label>Seals Status</label>
				<input type="text"></input>
				<br />

				<button variant={"primary"}>Submit</button>
			</div>
		);
	}
}
export default Railways;
