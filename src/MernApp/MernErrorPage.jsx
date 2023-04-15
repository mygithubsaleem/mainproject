import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import MernHeader from "./MernHeader";


const MernErrorPage = () => {
	return (

		<div className="error-page" id="errorpage">
			<p>{<MernHeader />}</p>

			<h1>404</h1>
			<h3>We are sorry page not found!</h3>
			<p className="mb-5">
				The page you are looking for might have been removed or its name has been changed or it is
				unavailable
			</p>{" "}
			<div>
				<NavLink to="/">Back to Home Page</NavLink>
			</div>
		</div>
	);
};

export default MernErrorPage;
