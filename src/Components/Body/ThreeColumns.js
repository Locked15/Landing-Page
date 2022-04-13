import React from "react";
import LeftSidesGalleryElement from "../BorderElements/LeftSideGalleryElements";
import MainContent from "./MainContent";
import RightSideGalleryElements from "../BorderElements/RightSideGalleryElements";

function ThreeColumns() {
	return (
		<div style={{ width: "100%" }} className='mainThreeSlidesDesign'>
			<LeftSidesGalleryElement />

			<MainContent />

			<RightSideGalleryElements />
		</div>
	);
}

export default ThreeColumns;
