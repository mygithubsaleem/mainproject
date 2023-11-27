import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

import MainPageProject1 from "../MainPagesFolder/MainPageProject1";

const Demo = ({ video }) => {
	const [num, setNum] = useState(0);

	// const [searchText, setSearchText] = useState("");
	// const foundVideos = filterVideos(videos, searchText);

	return (
		<div>
			<MainPageProject1 />
			<div style={{ textAlign: "center" }}>
				<h1>This is test program only.....</h1>
				<br />
				<Button
					onClick={() => {
						setNum(num + 1);
					}}
				>
					Click Me..{num}
				</Button>
				<div>
					<h1>next js demo...</h1>

					{/* <div>
						<Thumbnail video={video} />
						<a href={video.url}>
							<h3>{video.title}</h3>
							<p>{video.description}</p>
						</a>
						<LikeButton video={video} />
					</div>
					<div>
						{" "}
						<>
							<SearchInput value={searchText} onChange={(newText) => setSearchText(newText)} />
							<VideoList videos={foundVideos} emptyHeading={`No matches for “${searchText}”`} />
						</>
					</div> */}
				</div>
			</div>
		</div>
	);
};
export default Demo;
