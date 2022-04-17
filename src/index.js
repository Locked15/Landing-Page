import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Components/BorderElements/Header";
import App from "./App";
import Footer from "./Components/BorderElements/Footer";

// Стартовая точка отрисовки React-приложения.
ReactDOM.render(
	<React.StrictMode>
		<Header />

		<App />

		<Footer />
	</React.StrictMode>,

	document.getElementById("root")
);
