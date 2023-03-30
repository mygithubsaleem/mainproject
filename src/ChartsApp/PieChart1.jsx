import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPageCharts from "../MainPagesFolder/MainPageCharts";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend, Tooltip,Line } from "recharts";

const PieChart1 = () => {
	const data = [
		{ name: "Group A", value: 800 },
		{ name: "Group B", value: 300 },
		{ name: "Group C", value: 300 },
		{ name: "Group D", value: 500 },
	];
	const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

	const RADIAN = Math.PI / 180;
	// const renderCustomizedLabel = ({
	// 	midAngle,
	// 	innerRadius = 0,
	// 	outerRadius = 360,
	// 	percent,
	// 	x,
	// 	index,
	// }) => {
	// 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
	// 	const cx = cx + radius * Math.cos(-midAngle * RADIAN);
	// 	const cy = cy + radius * Math.sin(-midAngle * RADIAN);

	// 	return (
	// 		<text fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">
	// 			{`${(percent * 100).toFixed(0)}%`}
	// 		</text>
	// 	);
	// };

	return (
		<div style={{ backgroundColor: "black" }}>
			<MainPageCharts />
			<h1>Pie Chart</h1>
			<div style={{ width: "99%", height: 900 }}>
				<ResponsiveContainer width="100%" height="50%">
					<PieChart width={400} height={500}>
						<Pie
							data={data}
							// cx={50}
							// cy={50}
							labelLine={true}
							label
							outerRadius={80}
							fill="#8884d8"
							dataKey="value"
							nameKey="name"
						>
							{data.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Pie>
						<Tooltip contentStyle={{ backgroundColor: "yellow" }} />
						<Legend iconType="star" iconSize={75} />
						<Line dataKey="Students" stroke="red" activeDot={{ r: 18 }} />
						<Line dataKey="Fee" stroke="blue" activeDot={{ r: 18 }} />
					</PieChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};
export default PieChart1;
