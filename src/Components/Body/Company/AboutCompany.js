import React from "react";
import "../Styles/general.css";

/**
 * Функция, создающая блок 'О компании'.
 * Кроме того размещает изображение слева и устанавливает разрыв для перемещения содержимого следующего блока после изображения.
 *
 * @returns Блок 'О компании'.
 */
function AboutCompany() {
	return (
		<div>
			<hr />

			<article>
				<h2 className='header-text'>О компании</h2>
				<p>
					Наша компания создана для Вашего комфорта.
					<br />
					Мы сделали выбор и покупку тура максимально удобным для Вас.
				</p>

				<img
					src={require("../../../resources/Images/Beauty-Photo.jpg")}
					className='half right'
					alt='AboutCompany'
				/>
				<p>
					В нашем поиске можно найти путешествия от 80-ти
					туроператоров. Оплата туров происходит через защищенные
					порталы Сбербанка. Если Вам понадобится помощь специалиста в
					подборе тура, наши менеджеры всегда, с радостью, подберут
					путешествие по Вашим запросам и будут с Вами на связи на
					протяжении всего отдыха. Покупая тур в нашей компании, Вы не
					платите никаких дополнительных комиссий и сборов, Вы
					бронируете тур по цене туроператора.
				</p>

				{/* Так как изображение слишком большое, текст займет только половину его высоты. Поэтому нужен разрыв. */}
				<br clear='all' />
			</article>
		</div>
	);
}

export default AboutCompany;
