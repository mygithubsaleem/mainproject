import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPageCharts from "../MainPagesFolder/MainPageCharts";

import { ResponsiveContainer,CartesianGrid,Label,LabelList,Bar, BarChart, XAxis, YAxis, Legend, Tooltip,Line } from "recharts";

const BarChart1 = () => {
	const data = [
		{
			name: "Page A",
			uv: 4000,
			pv: 2400,
		},
		{
			name: "Page B",
			uv: 3000,
			pv: 1398,
		},
		{
			name: "Page C",
			uv: 2000,
			pv: 9800,
		},
		{
			name: "Page D",
			uv: 2780,
			pv: 3908,
		},
		{
			name: "Page E",
			uv: 1890,
			pv: 4800,
		},
		{
			name: "Page F",
			uv: 2390,
			pv: 3800,
		},
		{
			name: "Page G",
			uv: 3490,
			pv: 4300,
		},
	];

	return (
		<div style={{backgroundColor:"lightblue"}}>
			<MainPageCharts />
			<>
				<h1>Bar-Chart</h1>

				<ResponsiveContainer className="respons_cont">
					<BarChart
						width={730}
						height={250}
						data={data}
						margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name">
							{/* <Label value="Pages of my website" offset={0} position="insideBottom" /> */}
						</XAxis>
						{/* <YAxis label={{ value: "pv of page", angle: -90, position: "insideLeft" }} /> */}
						<Bar dataKey="pv" fill="#8884d8">
							<LabelList dataKey="name" position="top" />

						</Bar>
						<Bar dataKey="uv" fill="#FF8042">
							<LabelList dataKey="name" position="top" />

						</Bar>


						<Tooltip contentStyle={{ backgroundColor: "yellow" }} />
						<Legend iconType="star" iconSize={125} />
						<Line dataKey="pv" stroke="red" activeDot={{ r: 18 }} />
						<Line dataKey="uv" stroke="blue" activeDot={{ r: 18 }} />

					</BarChart>
				</ResponsiveContainer>
			</>
		</div>
	);
};

export default BarChart1;
