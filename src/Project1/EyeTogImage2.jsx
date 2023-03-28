import React from "react";
import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Json, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const EyeTogImage2 = () => {
	const [togAction, setTogAction] = useState(true);
	console.log("tog action vlaue..... using use state method....", togAction);
	const togImage = () => {
		console.log("tog image is working.....");
		setTogAction({ tog1: false });
		console.log("tog action vlaue.. after elicking button....", togAction);
	};
	return (
		<div style={{ textAlign: "center" }}>
			<h1>Eye Tog Image demo....</h1>
			<div>
				<Button
					onClick={() => {
						togImage();
					}}
				>
					{togAction === true ? (
						<FontAwesomeIcon icon={faEyeSlash} style={{ fontSize: "150px" }} />
					) : (
						<FontAwesomeIcon icon={faEye} style={{ fontSize: "150px" }} />
					)}
				</Button>
				<br />
				<br />
			</div>
		</div>
	);
};
export default EyeTogImage2;
