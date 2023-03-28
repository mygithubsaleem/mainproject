import React from "react";
import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./MainPagesFolder/Home";
import Animal from "./Project1/Animal";
import ValueTest from "./Project1/ValueTest";
import MainPageProject1 from "./MainPagesFolder/MainPageProject1";
import { Routes, Route } from "react-router-dom";
import FbFruitObject from "./Project1/FbFruitObject";
import FbFruitsString from "./Project1/FbFruitsString";
import MainPagePr from "./MainPagesFolder/MainPagePr";
import LoginFormPr from "./PrProject/LoginFormPr";
import HomePagePr from "./PrProject/HomePagePr";
import Demo from "./Project1/Demo";
import MainPageParots from "./MainPagesFolder/MainPageParots";
import MainPageCharts from "./MainPagesFolder/MainPageCharts";
import LineChart1 from "./ChartsApp/LineChart1";
import AboutParot from "./ParotApp/AboutParot";
import BlogParot from "./ParotApp/BlogParot";
import ContactParot from "./ParotApp/ContactParot";
import PrivacyParot from "./ParotApp/PrivacyParot";
import ServiceParot from "./ParotApp/ServiceParot";
import HomeParot from "./ParotApp/HomeParot";
import LoginForm from "./Project1/LoginForm";
import BarChart1 from "./ChartsApp/BarChart1";
import PieChart1 from "./ChartsApp/PieChart1";
import PieChart2 from "./ChartsApp/PieChart2";
import ParotHeader from "./ParotApp/ParotHeader";
import ParotFotter from "./ParotApp/ParotFotter";

const App = (props) => {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="Animal" element={<Animal />} />
				<Route path="valueTest" element={<ValueTest />} />
				<Route path="MainPageProject1" element={<MainPageProject1 />} />
				<Route path="FbFruitObject" element={<FbFruitObject />} />
				<Route path="FbFruitString" element={<FbFruitsString />} />
				<Route path="MainPagePr" element={<MainPagePr />} />
				<Route path="HomePagePr" element={<HomePagePr />} />
				<Route path="LoginFormPr" element={<LoginFormPr />} />
				<Route path="Demo" element={<Demo />} />
				<Route path="MainPageParots" element={<MainPageParots />} />
				<Route path="MainPageCharts" element={<MainPageCharts />} />
				<Route path="LineChart1" element={<LineChart1 />} />
				<Route path="BarChart1" element={<BarChart1 />} />
				<Route path="PieChart1" element={<PieChart1 />} />
				<Route path="AboutParot" element={<AboutParot />} />
				<Route path="ContactParot" element={<ContactParot />} />
				<Route path="BlogParot" element={<BlogParot />} />
				<Route path="ServiceParot" element={<ServiceParot />} />
				<Route path="PrivacyParot" element={<PrivacyParot />} />
				<Route path="LoginForm" element={<LoginForm />} />
				<Route path="PieChart1" element={<PieChart2 />} />
				<Route path="ParotHeader" element={<ParotHeader />} />
				<Route path="ParotFotter" element={<ParotFotter />} />
				<Route path="HomeParot" element={<HomeParot />} />
			</Routes>
		</div>
	);
};
export default App;
