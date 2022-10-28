import React from "react";
import { getItem, setItem } from "./helpers/dataHelpers";

class ShopingItemsCb extends React.Component {
	state = {
		items: [],
		currentInput: "",
		selectedId: null,
	};

	componentDidMount() {
		const data = getItem("items");
		if (data) {
			this.setState({ items: data });
		}
	}

	addItem = () => {
		const { currentInput } = this.state;
		if (getItem("items")) {
			let addArry = getItem("items");
			const obj = {
				id: addArry.length + 1,
				name: currentInput,
			};
			addArry.push(obj);
			setItem("items", addArry);
			this.setState({ items: addArry, currentInput: "" });
		} else {
			const obj = { id: 1, name: currentInput };
			setItem("items", [obj]);
			this.setState({ items: [obj], currentInput: "" });
		}
	};

	deleteItem = (delId) => {
		let delArry = getItem("items");
		const delArryData = delArry.filter((data) => {
			return data.id !== delId;
		});
		setItem("items", delArryData);
		this.setState({ items: delArryData });
	};

	edditItem = (id) => {
		const { items, currentInput, selectedId } = this.state;

		let edditArry = getItem("items");
		const obj = edditArry.find((itemObj, itemId, objIndex) => {
			return itemObj.id === id;
		});
		console.log("edit item result....", edditArry, this.state);
		this.setState({
			selectedId: id,
			currentInput: obj.name,
		});
	};

	updateItem = () => {
		const { items, currentInput, selectedId } = this.state;
		let edditArry = getItem("items");
		let objIndex;
		edditArry.find((itemObj, index) => {
			objIndex = index;
			return itemObj.id === selectedId;
		});
		edditArry[objIndex].name = currentInput;

		setItem("items", edditArry);
		this.setState({ items: edditArry });
		console.log("updated item result....", edditArry, this.state);
	};

	clearItem = () => {
		this.setState({ items: [] });
		localStorage.clear();
	};

	render() {
		const { items, currentInput } = this.state;
		console.log("RENDER", items);
		return (
			<div>
				<p> ADD ITEMS PAGE.....</p>
				<ul>
					{items.map((data, index) => (
						<li key={index}>
							<>
								<span>{data.name}</span>
							</>
							<button
								className="m-2"
								onClick={() => {
									this.deleteItem(data.id);
								}}
							>
								Delete
							</button>
							<button
								className="m-2"
								onClick={() => {
									this.edditItem(data.id);
								}}
							>
								Eddit
							</button>
						</li>
					))}
				</ul>
				<input
					type="text"
					value={currentInput}
					onChange={(inputdata) => {
						this.setState({ currentInput: inputdata.target.value });
					}}
				/>
				<br />
				<button
					className="m-2"
					variant="primary"
					onClick={() => {
						this.addItem();
					}}
				>
					Add Items
				</button>
				<button
					className="m-2"
					variant="secodary"
					onClick={() => {
						this.clearItem();
					}}
				>
					Clear Items
				</button>
				{this.state.selectedId && (
					<button className="m-2" variant="dark" onClick={this.updateItem}>
						Up Date Item
					</button>
				)}
			</div>
		);
	}
}
export default ShopingItemsCb;
