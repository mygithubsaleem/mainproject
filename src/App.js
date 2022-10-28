import React from "react";
import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./MainPageFolder/Home";
import Blogs from "./MainPageFolder/Blogs";
import Contact from "./MainPageFolder/Contact";
import NoPage from "./MainPageFolder/NoPage";
import LineChartTest from "./LineChartTest";
import Animal from "./Project1/Animal";
import ValueTest from "./Project1/ValueTest";
import NewProject1 from "./MainPageFolder/NewProject1";
import { Routes, Route } from "react-router-dom";
import FbFruitObject from "./Project1/FbFruitObject";
import FbFruitsString from "./Project1/FbFruitsString";
import Services from "./MainPageFolder/Services";
import Aboutus from "./MainPageFolder/Aboutus";
import PrPage from "./MainPageFolder/PrPage";
import LoginFormPr from "./PrProject/LoginFormPr";
import HomePagePr from "./PrProject/HomePagePr";
import Demo from "./Project1/Demo";
import Parots from "./Project1/Parots";

const App = (props) => {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="Home" element={<Home />} />
				<Route path="blogs" element={<Blogs />} />
				<Route path="nopage" element={<NoPage />} />
				<Route path="linecharttest" element={<LineChartTest />} />
				<Route path="animal" element={<Animal />} />
				<Route path="valuetest" element={<ValueTest />} />
				<Route path="NewProject1" element={<NewProject1 />} />
				<Route path="FbFruitObject" element={<FbFruitObject />} />
				<Route path="FbFruitString" element={<FbFruitsString />} />
				<Route path="Contact" element={<Contact />} />
				<Route path="Aboutus" element={<Aboutus />} />
				<Route path="PrPage" element={<PrPage />} />
				<Route path="Services" element={<Services />} />
				<Route path="HomePagePr" element={<HomePagePr />} />
				<Route path="LoginFormPr" element={<LoginFormPr />} />
				<Route path="Demo" element={<Demo />} />
				<Route path="Parots" element={<Parots />} />
			</Routes>
		</div>
	);
};
export default App;
