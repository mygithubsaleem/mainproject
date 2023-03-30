import MainPageCharts from "../MainPagesFolder/MainPageCharts";
/* eslint-disable no-shadow */
import React, { PureComponent } from "react";
import { PieChart, Pie, Cell, Sector, ResponsiveContainer, Tooltip, Line, Legend } from "recharts";

const DonutChart = () => {
	const RADIAN = Math.PI / 180;
	const data = [
		{ name: "A", value: 80, color: "#ff0000" },
		{ name: "B", value: 45, color: "#00ff00" },
		{ name: "C", value: 25, color: "#0000ff" },
	];
	const cx = 150;
	const cy = 200;
	const iR = 50;
	const oR = 100;
	const value = 50;

	return (
		<div >
			<MainPageCharts />
			<h1>Donut Chart</h1>

			<div style={{ width: "99%", height: 900 }}>
				<ResponsiveContainer width="100%" height="50%">
					<PieChart width={400} height={500}>
						<Pie
							dataKey="value"
							startAngle={360}
							endAngle={0}
							data={data}
							// cx={cx}
							// cy={cy}
							innerRadius={iR}
							outerRadius={oR}
							fill="#8884d8"
							stroke="none"
						>
							{data.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={entry.color} />
							))}
						</Pie>
						<Tooltip contentStyle={{ backgroundColor: "yellow" }} />
						<Legend iconType="star" iconSize={100} />
						<Line dataKey="A" stroke="red" activeDot={{ r: 18 }} />
						<Line dataKey="B" stroke="blue" activeDot={{ r: 18 }} />
						<Line dataKey="C" stroke="green" activeDot={{ r: 18 }} />
					</PieChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default DonutChart;
