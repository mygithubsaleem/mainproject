import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { Link } from "react-router-dom";

const Demo = (props) => {
	const { incr, decr } = props;

	return (
		<div>
			<h1>Test Page</h1>
			<Link to="/">Home</Link>
		</div>
	);
};

export default Demo;
