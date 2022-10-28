import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";
import styles from "./School.module.css";
import a from "./SchoolImages/image1.jpg";
import b from "./SchoolImages/image2.jpg";

const AboutUs = (props) => {
	return (
		<div className={styles.body}>
			<div className={styles.HeaderBar}>
				<ul className={styles.headerItems}>
					<li>
						<img className={styles.immage1} src={a} />
					</li>
					<li>
						<p className={styles.para1}>
							Pakistan Railways Heigh School Engine Shed Lahore
						</p>
					</li>
					<li>
						<button className={styles.coursesbut}> Paid Courses</button>

						<button className={styles.loginbut}>Login</button>
					</li>
				</ul>
			</div>
			<div className={styles.navbar}>
				<div className={styles.dropdown}>
					<button className={styles.dropbtn}>
						ABOUT US
						<i class="fa fa-caret-down"></i>
					</button>
					<div className={styles.dropdownContent}>
						<a href="#">Our Brand </a>
						<a href="#">Vission & Mission </a>
						<a href="#">Values</a>
					</div>
				</div>
				<div className={styles.dropdown}>
					<button className={styles.dropbtn}>ACADEMICS</button>
					<div className={styles.dropdownContent}>
						<a href="#">Curriculum</a>
						<a href="#">Spritual Education</a>
						<a href="#">Extra curriculum activities</a>
					</div>
				</div>
				<div className={styles.dropdown}>
					<button className={styles.dropbtn}>ADMISSIONS</button>
					<div className={styles.dropdownContent}>
						<a href="#">Registration & Admissions</a>
						<a href="#">School Fees</a>
					</div>
				</div>
				<div className={styles.dropdown}>
					<button className={styles.dropbtn}>STUDENT LIFE</button>
					<div className={styles.dropdownContent}>
						<a href="#">Social Integration</a>
						<a href="#">Food & Health </a>
						<a href="#">Sports </a>
						<a href="#">Trasportation</a>
					</div>
				</div>
				<div className={styles.dropdown}>
					<button className={styles.dropbtn}>PR SCHOOL KIDS</button>
				</div>
				<div className={styles.dropdown}>
					<button className={styles.dropbtn}>JOIN OUR TEAM</button>
					<div className={styles.dropdownContent}>
						<a href="#">Contact Us</a>
						<a href="#">Our Faculty</a>
						<a href="#">Meet Us</a>
					</div>
				</div>

				<div>
					<label>
						<input
							type="text"
							className={styles.shoeme}
							style={{ marginTop: "15px", width: "150px" }}
						></input>
					</label>

					<a
						href="https://www.instagram.com"
						className={styles.instagramSocial}
					></a>
				</div>
			</div>
			<div>
				<Container>
					<Carousel style={{ align: "center", backgroundColor: "black" }}>
						<Carousel.Item>
							<img style={{ width: "50%", height: "20%" }} src={a} />
						</Carousel.Item>
						<Carousel.Item>
							<img style={{ width: "50%", height: "20%" }} src={a} />
						</Carousel.Item>
						<Carousel.Item>
							<img style={{ width: "50%", height: "20%" }} src={a} />
						</Carousel.Item>
					</Carousel>
				</Container>
			</div>
			<div className="row">
				<div className={styles.col1}>
					<div className={styles.imageb}>
						<img src={b} />
					</div>
				</div>
				<div className={styles.col2}>
					<h2 className={styles.heading2}>About Us</h2>
					<p>
						Pakistan Railways High School Engine Shend Lahore is following the
						Punjab Board Education and fully accredited by all Punjab Boards of
						Education.
					</p>
					<p>
						Pakistan Railways Heigh School a well know education institution
						based in Lahore, offering core educational programs in English as
						well as promoting Urdu and Arabic languages to learn.
					</p>
					<p>
						On the linguistic side of our curriculum, Pakistan Railways Heigh
						School focuses its subject matter on linguistic progress, through
						systematic grammar and lexis learning balanced with the four skills;
						speaking, listening, reading and writing.
					</p>
				</div>
			</div>
			<div>
				<ul className={styles.socialContainer}>
					{" "}
					<li>
						<p clssName={styles.footerPara} style={{ marginTop: "1px" }}>
							Follow Us On....
						</p>
					</li>
					<li>
						<a
							href="https://www.youtube.com"
							className={styles.youtubeSocial}
						></a>
					</li>
					<li>
						<a
							href="https://www.facebook.com"
							className={styles.facebookSocial}
						></a>
					</li>
					<li>
						<a
							href="https://www.twitter.com"
							className={styles.twitterSocial}
						></a>
					</li>
					<li>
						<a
							href="https://www.instagram.com"
							className={styles.instagramSocial}
						></a>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default AboutUs;
