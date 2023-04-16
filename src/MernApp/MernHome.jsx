import React from "react";
//import "../App.css";
import MernHeader from "./MernHeader";
import { Row, Col, Button, Form } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Merncss.module.css";

const MernHome = () => {
	return (
		<>
			<Form>
				{<MernHeader />}
				<div className={styles.hp_contents}>
					<h1>WELCOME HOME</h1>
					<h2>We are MERN developers...</h2>
				</div>
			</Form>
		</>
	);
};

export default MernHome;
