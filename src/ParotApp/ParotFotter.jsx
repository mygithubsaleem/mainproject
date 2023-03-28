import React from "react";
import tweet from "./ParotsImages/tweet.png";
import utube from "./ParotsImages/utube.png";
import whatsapp from "./ParotsImages/whatsapp.png";
import insta from "./ParotsImages/insta.png";
import facebook from "./ParotsImages/facebook.png";
import styles from "../ParotApp/Parrot.module.css";
import { Form, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

const ParotFotter = () => {
	return (
		<div>
			<Form>
				<Row className="fotter-row mt-3">
					<Col className={styles.footerCol1}>
						<p>
							<ul>
								<li>10/25 Swami Nagar Lahore 54900.</li>
								<li>Cell#: 03434810913</li>
								<li>What's App#: 03434810913</li>
							</ul>
						</p>
					</Col>
					<Col className={styles.footerCol2}>
						<p>
							<div>
								<h6 className={styles.fottertext}>You can also follow us on...</h6>
								<div>
									<img className={styles.fotterimage} src={utube} />
									<img className={styles.fotterimage} src={tweet} />
									<img className={styles.fotterimage} src={insta} />
									<img className={styles.fotterimage} src={whatsapp} />
									<img className={styles.fotterimage} src={facebook} />
								</div>
							</div>
						</p>
					</Col>
				</Row>
			</Form>
		</div>
	);
};
export default ParotFotter;
