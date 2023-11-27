import { useState } from "react";

const winnerArray = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

const FbTickTock = (props) => {
	const [currentGameState, setCurrentGameState] = useState([]);
	const [playerTurn, setPlayerTurn] = useState("X");

	const handlePlayer = (index) => {
		const gameState = [...currentGameState];
		gameState[index] = playerTurn;
		setCurrentGameState(gameState);

		winnerArray.find((winMap) => {
			if (
				gameState[winMap[0]] === gameState[winMap[1]] &&
				gameState[winMap[1]] === gameState[winMap[2]] &&
				gameState[winMap[0]] === gameState[winMap[2]] &&
				gameState[winMap[0]] === playerTurn
			) {
				alert("Winner: " + playerTurn);
				return;
			}
		});

		setPlayerTurn(playerTurn === "X" ? "O" : "X");
	};

	console.log(currentGameState);
	return (
		<div className="bodyColor">
			<h1>Function Base Tick Cross Game...</h1>
			<div className="gameBoard">
				<button
					className="buttonSize"
					onClick={() => {
						handlePlayer(0);
					}}
				>
					{currentGameState[0] || " . "}
				</button>
				<button
					className="buttonSize"
					onClick={() => {
						handlePlayer(1);
					}}
				>
					{currentGameState[1] || " . "}
				</button>
				<button
					className="buttonSize"
					onClick={() => {
						handlePlayer(2);
					}}
				>
					{currentGameState[2] || " . "}
				</button>
				<br />
				<button
					className="buttonSize"
					onClick={() => {
						handlePlayer(3);
					}}
				>
					{currentGameState[3] || " . "}
				</button>
				<button
					className="buttonSize"
					onClick={() => {
						handlePlayer(4);
					}}
				>
					{currentGameState[4] || " . "}
				</button>
				<button
					className="buttonSize"
					onClick={() => {
						handlePlayer(5);
					}}
				>
					{currentGameState[5] || " . "}
				</button>
				<br />
				<button
					className="buttonSize"
					onClick={() => {
						handlePlayer(6);
					}}
				>
					{currentGameState[6] || " . "}
				</button>
				<button
					className="buttonSize"
					onClick={() => {
						handlePlayer(7);
					}}
				>
					{currentGameState[7] || " . "}
				</button>
				<button
					className="buttonSize"
					onClick={() => {
						handlePlayer(8);
					}}
				>
					{currentGameState[8] || " . "}
				</button>
				<br />
			</div>
		</div>
	);
};
export default FbTickTock;
