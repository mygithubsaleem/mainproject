import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

class EyeTogimage extends React.Component {
	state = {
		tog1: true,
	};

	togImage = () => {
		this.setState({ tog1: !this.state.tog1 });
	};

	render() {
		return (
			<div>
				<p>Tog Immage </p>
				<button
					onClick={() => {
						this.togImage();
					}}
				>
					{this.state.tog1 ? (
						<FontAwesomeIcon icon={faEyeSlash} style={{ fontSize: "50px" }} />
					) : (
						<FontAwesomeIcon icon={faEye} style={{ fontSize: "50px" }} />
					)}
				</button>
			</div>
		);
	}
}
export default EyeTogimage;
