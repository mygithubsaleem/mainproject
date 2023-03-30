import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import valueStyles from "../ValueTest.css";
import MainPageProject1 from "../MainPagesFolder/MainPageProject1";

const ValueTest = (props) => {
	const { value, inc, dec } = props;

	return (
		<div className={valueStyles.value_body}>
			<MainPageProject1 />
			<h1>Value-Test</h1>

			<p> {value}</p>
			<Button
				style={{ "min-height": "80px", width: "5%", marginLeft: "45%", marginTop: "2%" }}
				variant="success"
				onClick={inc}
			>
				+
			</Button>
			<Button
				style={{ "min-height": "80px", width: "5%", marginLeft: "20px", marginTop: "2%" }}
				variant="danger"
				onClick={dec}
			>
				-
			</Button>
		</div>
	);
};
// MSP means map state to props....

const MSP = (store) => ({
	value: store.valueReducer.value,
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
