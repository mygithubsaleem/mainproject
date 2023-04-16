import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import MernHeader from "./MernHeader";

const MernMenu = () => {
	return (
		<>
			{<MernHeader />}

			<form className="contact_form" id="contact_form_id">
				<div className="d-flex flex-row mb-3  align-items-center justify-content-between col-lg-10 offset-lg-1 ">
					<div className="contact-form pt-lg-5 mt-3">
						<img
							src="https://i.shgcdn.com/d28da852-3c05-408e-bde3-4aeb881e1a08/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
							alt="Phone"
							width={75}
							height={"50%"}
						/>
						<h4>+92-3434810913</h4>
					</div>
					<div className="p-2 pt-lg-5 mt-3">
						<img
							src="https://helpdeskgeek.com/wp-content/pictures/2019/04/email.png"
							alt="Email"
							width={60}
							height={"65%"}
						/>
						<h4>saleem65.teacher@gmail.com</h4>
					</div>
					<div className="p-2 pt-lg-5 mt-3">
						<img
							src="https://www.melissa.com/images17/single-address-lookup-icon.svg"
							alt="Address"
							width={60}
							height={"65%"}
						/>
						<h4>Lahore, Pakistan</h4>
					</div>
				</div>
				<div className=" d-flex flex-row mb-3  align-items-center justify-content-between col-lg-10 offset-lg-1 ">
					<div className="form-group">
						<label htmlFor="name">
							<i class="zmdi zmdi-account metrial-icons-name mr-2"></i>
						</label>
						<input
							type="text"
							id="name"
							name="name"
							autoComplete="off"
							placeholder="Enter Your Name "
						/>
					</div>
					<div className="form-group">
						<label htmlFor="email">
							<i class="zmdi zmdi-email metrial-icons-name mr-2"></i>
						</label>
						<input
							type="text"
							id="email"
							name="email"
							autoComplete="off"
							placeholder="Enter Your Email "
						/>
					</div>
					<div className="form-group">
						<label htmlFor="phone">
							<i class="zmdi zmdi-phone metrial-icons-name mr-2"></i>
						</label>
						<input
							type="text"
							id="phone"
							name="phone"
							autoComplete="off"
							placeholder="Enter Your Pnone Number "
						/>
					</div>
				</div>
				<div className=" d-flex flex-row mb-3 justify-content-center  mt-lg-5">
					<textarea
						className="contact_textarea"
						placeholder="Message"
						cols="80"
						rows="7"
					></textarea>
					<br />
				</div>
				<div className=" d-flex flex-row mb-3  mt-lg-4 justify-content-center">
					<Button variant="dark" className="contact_msg_button">
						Submit Message
					</Button>
				</div>
			</form>
		</>
	);
};

export default MernMenu;
