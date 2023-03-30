import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import MainPageProject1 from "../MainPagesFolder/MainPageProject1";

const Demo = () => {
	const [num, setNum] = useState(0);

	return (
		<div>
			<MainPageProject1 />
			<div style={{ textAlign: "center" }}>
				<h1>This is test program only.....</h1>
				<br />
				<Button
					onClick={() => {
						setNum(num + 1);
					}}
				>
					Click Me..{num}
				</Button>
			</div>
		</div>
	);
};
export default Demo;
