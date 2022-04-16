import React from "react";
import "../../../index.css";

function ToursToChina() {
	return (
		<div>
			<h3 className='subheader-text'>Китай</h3>

			<div className='flex-gallery gallery'>
				<figure style={{ width: "fit-content" }}>
					<img
						src={require("../../../resources/Content/Tours/Китай/Санья.jpg")}
						alt='Санья-1.'
					/>

					<figcaption>Санья — 38.600 Р.</figcaption>
				</figure>

				<figure style={{ width: "fit-content" }}>
					<img
						src={require("../../../resources/Content/Tours/Китай/о.Хайнань.jpg")}
						alt='Хайнань-1.'
					/>

					<figcaption>О. Хайнань — 48.750 Р.</figcaption>
				</figure>

				<figure style={{ width: "fit-content" }}>
					<img
						src={require("../../../resources/Content/Tours/Китай/о.Хайнань 2.jpg")}
						alt='Хайнань-2.'
					/>

					<figcaption>О. Хайнань — 56.400 Р.</figcaption>
				</figure>
			</div>
		</div>
	);
}

export default ToursToChina;
