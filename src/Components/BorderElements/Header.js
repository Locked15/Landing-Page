import React from "react";
import "../../index.css";

/**
 * Функция, создающая 'шапку' сайта.
 * Здесь расположено изображение, название компании и кнопка 'Узнать больше'.
 *
 * @returns 'Шапка' сайта.
 */
function Header() {
	/**
	 * Переводит пользователя к элементу 'О компании'.
	 */
	function learnMore() {
		var element = document.getElementById("companyBenefits");
		element.scrollIntoView({ behavior: "smooth" });
	}

	return (
		<header>
			<div className='brand-box'>
				<span id='header-brand' className='brand'>
					Путешествуй просто
				</span>
			</div>

			<div className='main-header'>
				<h1 className='main-header-text'>
					<span className='header-first-text'>Самые лучшие туры</span>
					<span className='header-second-text'>
						А также 'горящие' предложения!
					</span>

					<button
						className='main-header-button header-button'
						onClick={learnMore}
					>
						Узнать больше
					</button>
				</h1>
			</div>
		</header>
	);
}

export default Header;
