import React from "react";
import "./Styles/style.css";

/**
 * Функция, создающая блок 'Левая галерея'.
 * Здесь содержатся всякие изображения с подписями к ним.
 * 
 * К сожалению элемент галереи вынести в отдельный компонент не удалось.
 * При попытке загрузить изображение по отправленному в качестве параметра, адресу React возвращает исключение.
 * И это при том, что адреса изображений абсолютно одинаковые.
 * 
 * @returns Блок 'Левая галерея'.
 */
function LeftSidesGalleryElement() {
	return (
		<aside id='leftPanel' className='aside-block gallery border-right'>
			<figure>
				<img
					src={require("../../resources/Images/CrimeaTours.jpg")}
					alt='Крым.'
				/>

				<figcaption>Крым.</figcaption>
			</figure>

			<figure>
				<img
					src={require("../../resources/Images/SochiPhoto.jpg")}
					alt='Сочи.'
				/>

				<figcaption>Сочи.</figcaption>
			</figure>

			<figure>
				<img
					src={require("../../resources/Images/Spain-1024x768.jpeg")}
					alt='Испания.'
				/>

				<figcaption>Испания.</figcaption>
			</figure>

			<figure>
				<img
					src={require("../../resources/Images/HotTous.jpg")}
					alt='Курорт.'
				/>

				<figcaption>Курорт.</figcaption>
			</figure>

			<figure>
				<img
					src={require("../../resources/Images/Rossiya-1.jpg")}
					alt='Москва.'
				/>

				<figcaption>Москва.</figcaption>
			</figure>

			<figure>
				<img
					src={require("../../resources/Images/goryashchiye-tury-na-Kubu.jpg")}
					alt='Куба.'
				/>

				<figcaption>Куба.</figcaption>
			</figure>

			<figure>
				<img
					src={require("../../resources/Images/e644b78ea1be3d6b00d6a109f5621f8b.jpg")}
					alt='Неожиданность.'
				/>

				<figcaption>
					Путешествия могут принести множество неожиданностей.
				</figcaption>
			</figure>

			<figure>
				<img
					src={require("../../resources/Images/gorjashhie-tury.jpg")}
					alt='Совместный тур.'
				/>

				<figcaption>
					Совместные туры здорово укрепляют отношения.
				</figcaption>
			</figure>

			<figure>
				<img
					src={require("../../resources/Images/2019-09-16-10.27.28.jpg")}
					alt='Морское путешествие.'
				/>

				<figcaption>Путешествия по морю оздоравливают.</figcaption>
			</figure>

			<figure>
				<img
					src={require("../../resources/Images/Palms.png")}
					alt='Вечерние пальмы.'
				/>

				<figcaption>Вечерние пальмы.</figcaption>
			</figure>

			<figure>
				<img
					src={require("../../resources/Images/BeneathTheCity.png")}
					alt='Над городом.'
				/>

				<figcaption>
					"А над городом плывут облака; Закрывая небесный свет..."
				</figcaption>
			</figure>
		</aside>
	);
}

export default LeftSidesGalleryElement;
