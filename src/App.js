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
import DonutChart from "./ChartsApp/DonutChart";
import ParotHeader from "./ParotApp/ParotHeader";
import ParotFotter from "./ParotApp/ParotFotter";
import AboutUsPr from "./PrProject/AboutUsPr";
import BlogPr from "./PrProject/BlogPr";
import ContactUsPr from "./PrProject/ContactUsPr";
import Homepr from "./PrProject/HomePr";
import LoginPr from "./PrProject/LoginPr";
import ServicesPr from "./PrProject/ServicesPr";
import SignUpPr from "./PrProject/SignUpPr";
import AreaChart1 from "./ChartsApp/AreaChart1";
import MernHeader from "./MernApp/MernHeader";
import MgprHeader from "./MgprApp/MgprHeader";
import MernHome from "./MernApp/MernHome";
import MernAboutus from "./MernApp/MernAboutus";
import MernLogin from "./MernApp/MernLogin";
import MernErrorPage from "./MernApp/MernErrorPage";
import MernSignup from "./MernApp/MernSignup";
import MernContactus from "./MernApp/MernContacus";

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
				<Route path="DonutChart" element={<DonutChart />} />
				<Route path="ParotHeader" element={<ParotHeader />} />
				<Route path="ParotFotter" element={<ParotFotter />} />
				<Route path="HomeParot" element={<HomeParot />} />
				<Route path="SignUpPr" element={<SignUpPr />} />
				<Route path="AboutUsPr" element={<AboutUsPr />} />
				<Route path="BlogPr" element={<BlogPr />} />
				<Route path="ContactUsPr" element={<ContactUsPr />} />
				<Route path="HomePr" element={<Homepr />} />
				<Route path="LoginPr" element={<LoginPr />} />
				<Route path="ServicesPr" element={<ServicesPr />} />
				<Route path="AreaChart1" element={<AreaChart1 />} />
				<Route path="MernHeader" element={<MernHeader />} />
				<Route path="MernHome" element={<MernHome />} />
				<Route path="MernAboutus" element={<MernAboutus />} />
				<Route path="MernContactus" element={<MernContactus />} />
				<Route path="MernLogin" element={<MernLogin />} />
				<Route path="MernSignup" element={<MernSignup />} />
				<Route path="MernErrorpage" element={<MernErrorPage />} />
			</Routes>
		</div>
	);
};
export default App;
