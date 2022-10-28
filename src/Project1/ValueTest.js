import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ValueTest = (props) => {
	const { value, inc, dec } = props;

	return (
		<div className="value-body">
			<h1>Value Test</h1>
			<Link className="link_home" to="/">
				<h1 align="left" className="home-link">
					Home
				</h1>
			</Link>

			<p style={{ fontSize: "100px" }}>{value}</p>
			<div>
				<Button
					className="value-btn"
					variant="success"
					style={{ fontSize: "100px" }}
					onClick={inc}
				>
					+
				</Button>
				<Button
					className="value-btn"
					variant="danger"
					style={{ fontSize: "100px" }}
					onClick={dec}
				>
					-
				</Button>
			</div>
			<span>{}</span>
			<br />
		</div>
	);
};
// MSP means map state to props....

const MSP = (store) => ({
	value: store.newvalueReducer.value,
});

// MDP means map dispatch to props....
const MDP = (dispatch) => ({
	inc: () =>
		dispatch({
			type: "INC",
			payload: 5,
		}),
	dec: () =>
		dispatch({
			type: "DEC",
			payload: 5,
		}),
});
export default connect(MSP, MDP)(ValueTest);
