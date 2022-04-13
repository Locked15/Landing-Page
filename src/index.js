import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./BorderElements/Header";
import App from "./App";
import Footer from "./BorderElements/Footer";

ReactDOM.render(
    <React.StrictMode>
        <Header />

        <App />

        <Footer />
    </React.StrictMode>,

    document.getElementById("root"),
);
