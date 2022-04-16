import React from "react";

import AboutCompany from "./Company/AboutCompany";
import Benefits from "./Company/Benefits";
import HotToursFeatures from "./InfoAboutTours/HotToursFeatures";

import ToursInfo from "./InfoAboutTours/ToursInfo";
import ToursToVietnam from "./InfoAboutTours/ToursToVietnam";
import ToursToIndonesia from "./InfoAboutTours/ToursToIndonesia";
import ToursToChina from "./InfoAboutTours/ToursToChina";
import ToursToRussia from "./InfoAboutTours/ToursToRussia";

import Consultants from "./LastPart/Consultants";

function MainContent() {
	return (
		<main className='main-content'>
			<AboutCompany />
			<Benefits />
			<HotToursFeatures />

			<ToursInfo />
			<ToursToVietnam />
			<ToursToIndonesia />
			<ToursToChina />
			<ToursToRussia />

            <Consultants />
		</main>
	);
}

export default MainContent;
