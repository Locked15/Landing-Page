import React from "react";
import LeftSidesGalleryElement from "../BorderElements/LeftSideGalleryElements";
import MainContent from "./MainContent";
import RightSideGalleryElements from "../BorderElements/RightSideGalleryElements";

/**
 * Функция, разграничивающая все содержимое страницы на 3 части:
 * 1. Левая и правая — вертикальные flex-галереи.
 * 2. Центральная — основное содержимое страницы.
 * 
 * @returns Базовая разметка страницы.
 */
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
