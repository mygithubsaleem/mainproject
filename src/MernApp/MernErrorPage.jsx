import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import MernHeader from "./MernHeader";
import styles from "./Merncss.module.css";

const MernErrorPage = () => {
	return (
		<div>
			{<MernHeader />}
			<h1>404</h1>
			<h3>We are sorry page not found!</h3>
			<h3 className={styles.err_hd}>
				The page you are looking for might have been removed or its name
				 has been changed or it is 	unavailable
				</h3>
			</div>
	);
};

export default MernErrorPage;
