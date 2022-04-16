import React from "react";
import "../../../index.css";

function ToursToIndonesia() {
	return (
		<div>
			<h3 className='subheader-text'>Индонезия</h3>

			<div className='flex-gallery gallery'>
				<figure style={{ width: "fit-content" }}>
					<img
						src={require("../../../resources/Content/Tours/Индонезия/Бали.jpg")}
						alt='Бали-1.'
					/>

					<figcaption>Бали — 88.600 Р.</figcaption>
				</figure>

				<figure style={{ width: "fit-content" }}>
					<img
						src={require("../../../resources/Content/Tours/Индонезия/Кута.jpg")}
						alt='Кута-1.'
					/>

					<figcaption>Кута — 81.666 Р.</figcaption>
				</figure>

				<figure style={{ width: "fit-content" }}>
					<img
						src={require("../../../resources/Content/Tours/Индонезия/Кута 2.jpg")}
						alt='Кута-2.'
					/>

					<figcaption>Кута — 82.100 Р.</figcaption>
				</figure>
			</div>
		</div>
	);
}

export default ToursToIndonesia;
