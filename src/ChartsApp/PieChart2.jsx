import React from "react";
//import { Pie } from "react-chartjs-2";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const state = {
	labels: [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	],
	dataset: [
		{
			label: "Rainfall",
			backgroundColor: "rgba(75,192,192,1)",
			borderColor: "rgba(0,0,0,1)",
			borderWidth: 1,
			data: [65, 59, 80, 81, 56, 34, 97, 25, 69, 75, 62, 45],
		},
	],
};

const PieChart2 = () => {
	return (
		<div className="container">
			<h1>hgghghghghghh</h1>
			<Pie
				data={state}
				options={{
					title: {
						display: true,
						text: "Average Rainfall per month",
						fontSize: 16,
					},
					legend: {
						display: true,
						position: "right",
					},
				}}
			/>
		</div>
	);
};
export default PieChart2;
