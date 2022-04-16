import React from "react";
import "../../BorderElements/Styles/style.css";

function ConsultantsGallery() {
	return (
		<div>
			<h3 className='subheader-text'>Доступные консультанты</h3>

			<div className='flex-gallery gallery'>
				<figure style={{ width: "fit-content" }}>
					<img
						src={require("../../../resources/Content/Consultants/GalinaSergeeva_TourismManager.jpg")}
						alt='Менеджер-1.'
					/>

					<figcaption>Галина Сергеева.</figcaption>
				</figure>

				<figure style={{ width: "fit-content" }}>
					<img
						src={require("../../../resources/Content/Consultants/IvanAlekseev_TourismManager.jpg")}
						alt='Менеджер-2.'
					/>

					<figcaption>Иван Алексеев.</figcaption>
				</figure>

				<figure style={{ width: "fit-content" }}>
					<img
						src={require("../../../resources/Content/Consultants/SvetlanaAstahova_TourismManager.jpg")}
						alt='Менеджер-3.'
					/>

					<figcaption>Светлана Астахова.</figcaption>
				</figure>
			</div>
		</div>
	);
}

export default ConsultantsGallery;
