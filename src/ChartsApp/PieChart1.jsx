import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const PieChart1 = () => {
	const renderCustomizedLabel = ({
		cx,
		cy,
		midAngle,
		innerRadius,
		outerRadius,
		percent,
		index,
	}) => {
		innerRadius = 60;
		outerRadius = 80;
		midAngle = 60;
		cx = 60;
		cy = 90;
		const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
		const x = cx + radius * Math.cos(-midAngle * RADIAN);
		const y = cy + radius * Math.sin(-midAngle * RADIAN);

		return (
			<text
				x={x}
				y={y}
				fill="white"
				textAnchor={x > cx ? "start" : "end"}
				dominantBaseline="central"
			>
				{`${(percent * 100).toFixed(0)}%`}
			</text>
		);
	};
	const data = [
		{ name: "Group A", value: 400 },
		{ name: "Group B", value: 300 },
		{ name: "Group C", value: 300 },
		{ name: "Group D", value: 200 },
	];

	const data2 = [
		{
			name: "Group A",
			value: 400,
		},
		{
			name: "Group B",
			value: 300,
		},
		{
			name: "Group C",
			value: 500,
		},
		{
			name: "Group D",
			value: 200,
		},
		{
			name: "Group E",
			value: 278,
		},
		{
			name: "Group F",
			value: 189,
		},
	];

	const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

	const RADIAN = Math.PI / 180;

	return (
		<div>
			<div>
				<h1>Pie-Chart</h1>
			</div>
			<div>
				<Link to="/">Main-Page</Link>
			</div>

			<div>
				<ResponsiveContainer width="100%" height="100%">
					{/* <PieChart width={400} height={400}>
						<Pie
							data={data}
							// cx={x}
							// cy={y}
							labelLine={false}
							label={renderCustomizedLabel}
							outerRadius={80}
							fill="#8884d8"
							dataKey="value"
						>
							{data.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Pie>
					</PieChart> */}
					<h1>Pie-Chart-2</h1>
					<PieChart width={730} height={250}>
						<Pie data={data2} cx="50%" cy="50%" outerRadius={80} label={renderCustomizedLabel}>
							{data.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index]} />
							))}
						</Pie>
					</PieChart>
				</ResponsiveContainer>{" "}
			</div>
		</div>
	);
};
export default PieChart1;
