import React from "react";
import LeftSideBar from "../BorderElements/LeftSideBar";
import AboutCompany from "./AboutCompany";

function ThreeColumns() {
    return (
        <div style={{width: '100%'}}>
            <main className="mainThreeSlidesDesign">
                <LeftSideBar />
                <AboutCompany />
            </main>
        </div>
    )
}

export default ThreeColumns;
