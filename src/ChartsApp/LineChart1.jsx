import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPageCharts from "../MainPagesFolder/MainPageCharts";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Legend, Tooltip } from "recharts";
const LineChart1 = () => {
	const [studentArray2, setStudentArray2] = useState([
		{ Course: "html", Students: 15, Fee: 100 },
		{ Course: "css", Students: 20, Fee: 10 },
		{ Course: "js", Students: 30, Fee: 30 },
		{ Course: "C++", Students: 45, Fee: 40 },
		{ Course: "React", Students: 20, Fee: 50 },
		{ Course: "Python", Students: 40, Fee: 70 },
	]);

	return (
		<div>
			<MainPageCharts />
			<>
				<h1>Line-Chart</h1>

				<ResponsiveContainer className="respons_cont">
					<LineChart className="line_chart" data={studentArray2}>
						<XAxis
							padding={{ top: 2, right: 50, left: 10, bottom: 2 }}
							dataKey="Course"
							interval={"preserveStartEnd"}
							tickFormatter={(a) => a + "  Programming"}
							tick={{ stroke: "black", strokeWidth: 0.8 }}
						/>
						<YAxis tick={{ stroke: "black", strokeWidth: 1 }} padding={{ top: 40 }} />
						<Tooltip contentStyle={{ backgroundColor: "yellow" }} />
						<Legend iconType="star" iconSize={25} />
						<Line dataKey="Students" stroke="red" activeDot={{ r: 18 }} />
						<Line dataKey="Fee" stroke="blue" activeDot={{ r: 18 }} />
					</LineChart>
				</ResponsiveContainer>
			</>
		</div>
	);
};

export default LineChart1;
