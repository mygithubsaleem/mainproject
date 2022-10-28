import React from "react";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "./Project1/reducerConfig";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<React.StrictMode>
			<Provider store={configureStore()}>
				<App />
			</Provider>
		</React.StrictMode>
	</BrowserRouter>
);
