import React from "react";
import "../Styles/general.css";

function Benefits() {
	return (
		<div id="companyBenefits">
			<h2 className='header-text'>Преимущества компании</h2>
			<p style={{ textAlign: "left" }}>
				Наша компания — не очередной туроператор на рынке.
				<br />
				Пользуясь нашими услугами, вы получаете список существенных
				преимуществ:
			</p>

			<ol>
				<li value={1}>Огромный выбор туров</li>
				<li value={2}>Лучший онлайн поиск туров с вылетом из Томска</li>
				<li value={3}>Максимальные скидки по всем операторам</li>
				<li value={4}>Покупка авиабилетов в любую точку мира</li>
				<li value={5}>
					Надёжность, гарантированная честным договором с туристами
				</li>
				<li value={6}>Вся информация о клиенте конфиденциальна</li>
			</ol>

			<p style={{ textAlign: "left" }}>И это не все!</p>
		</div>
	);
}

export default Benefits;
