import React from "react";
import AboutParot from "./ParotApp/AboutParot";
import BlogParot from "./ParotApp/BlogParot";
import ContactParot from "./ParotApp/ContactParot";
import PrivacyParot from "./ParotApp/PrivacyParot";
import ServiceParot from "./ParotApp/ServiceParot";
import HomeParot from "./ParotApp/HomeParot";
import MainPageParots from "./MainPagesFolder/MainPageParots";
import ParotHeader from "./ParotApp/ParotHeader";
import ParotFotter from "./ParotApp/ParotFotter";
import { Routes, Route } from "react-router-dom";

const ParotRouter = () => {
	return (
		<div>
			<Routes>
				<Route path="MainPageParots" element={<MainPageParots />} />
				<Route path="AboutParot" element={<AboutParot />} />
				<Route path="ContactParot" element={<ContactParot />} />
				<Route path="BlogParot" element={<BlogParot />} />
				<Route path="ServiceParot" element={<ServiceParot />} />
				<Route path="PrivacyParot" element={<PrivacyParot />} />
				<Route path="ParotHeader" element={<ParotHeader />} />
				<Route path="ParotFotter" element={<ParotFotter />} />
				<Route path="HomeParot" element={<HomeParot />} />
			</Routes>
		</div>
	);
};
export default ParotRouter();
