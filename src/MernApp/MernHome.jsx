import React from "react";
import "../App.css";
import MernHeader from "./MernHeader";

const MernHome = () => {
	return (
		<>
			<p>{<MernHeader />}</p>
			<div className="home-page">
				<div className="home-page-contents">
					<h1>WELCOME HOME</h1>
					<h2>We are MERN developers...</h2>
				</div>
			</div>
		</>
	);
};

export default MernHome;
