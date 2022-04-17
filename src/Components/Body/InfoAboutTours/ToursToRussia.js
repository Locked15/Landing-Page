import React from "react";
import "../../../index.css";

/**
 * Функция, создающая подблок 'Туры по России'.
 * Как и прочие, состоит из 3 изображений туров с указанием цены.
 * 
 * @returns Подблок 'Туры по России'.
 */
function ToursToRussia() {
	return (
		<div>
			<h3 className='subheader-text'>Великая Отчизна, <b>Россия</b></h3>

			<div className='flex-gallery gallery'>
				<figure style={{ width: "fit-content" }}>
					<img
						src={require("../../../resources/Content/Tours/По России/Адлер.jpg")}
						alt='Родина-1.'
					/>

					<figcaption>Адлер — 28.600 Р.</figcaption>
				</figure>

				<figure style={{ width: "fit-content" }}>
					<img
						src={require("../../../resources/Content/Tours/По России/Белокуриха.jpg")}
						alt='Родина-2.'
					/>

					<figcaption>Белокуриха — 58.750 Р.</figcaption>
				</figure>

				<figure style={{ width: "fit-content" }}>
					<img
						src={require("../../../resources/Content/Tours/По России/Домбай.jpg")}
						alt='Родина-3.'
					/>

					<figcaption>Домбай — 36.400 Р.</figcaption>
				</figure>
			</div>
		</div>
	);
}

export default ToursToRussia;
