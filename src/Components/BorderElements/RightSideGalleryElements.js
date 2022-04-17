import React from "react";

/**
 * Функция, создающая блок 'Правая галерея'.
 * Здесь содержатся всякие изображения с подписями к ним.
 * 
 * К сожалению элемент галереи вынести в отдельный компонент не удалось.
 * При попытке загрузить изображение по отправленному в качестве параметра, адресу React возвращает исключение.
 * И это при том, что адреса изображений абсолютно одинаковые.
 * 
 * @returns Блок 'Правая галерея'.
 */
function RightSideGalleryElements() {
	return (
		<aside id='rightPanel' className='aside-block gallery border-left'>
			<figure>
				<img
					src={require("../../resources/Images/1379633194_orel.jpg")}
					alt='Орёл.'
				/>

				<figcaption>Орёл.</figcaption>
			</figure>

			<figure>
				<img
					src={require("../../resources/Images/4995833-plyazh-shezlongi-okean-rayskoe-mesto-letniy-otdyh-ekzotika-otpusk-uspokaivayuschie-iyul.jpg")}
					alt='Пляжный курорт.'
				/>

				<figcaption>Пляжный курорт.</figcaption>
			</figure>

			<figure>
				<img
					src={require("../../resources/Images/c7d29a0cd984599082b8fa93cb0097ca.jpg")}
					alt='Новый год на курорте.'
				/>

				<figcaption>Новый год — На курорт.</figcaption>
			</figure>

			<figure>
				<img
					src={require("../../resources/Images/summer-beach-photo-2560x1600-1003096.jpg")}
					alt='Летний курорт.'
				/>

				<figcaption>
					Лето — лучшее время для отдыха на курорте.
				</figcaption>
			</figure>

			<figure>
				<img
					src={require("../../resources/Images/111-1-1.jpg")}
					alt='Лодочный курорт.'
				/>

				<figcaption>Здесь много лодок!</figcaption>
			</figure>

			<figure>
				<img
					src={require("../../resources/Images/23d68b79113b6e348ab17e95500a16cf.jpg")}
					alt='Замки.'
				/>

				<figcaption>Каждая страна столь индивидуальна.</figcaption>
			</figure>

			<figure>
				<img
					src={require("../../resources/Images/11-1024x768.jpg")}
					alt='Медитация.'
				/>

				<figcaption>Так зачем ограничиваться одной страной?</figcaption>
			</figure>

			<figure>
				<img
					src={require("../../resources/Images/ca3d6bb1c4766837f06ca398632df0b1.jpg")}
					alt='Одинокий остров.'
				/>

				<figcaption>
					В других странах можно найти что угодно.
				</figcaption>
			</figure>

			<figure>
				<img
					src={require("../../resources/Images/1.jpg")}
					alt='Качели на острове.'
				/>

				<figcaption>
					В некоторых параметрах другие страны похожи на нас.
				</figcaption>
			</figure>

			<figure>
				<img
					src={require("../../resources/Images/ForestUnderRed.png")}
					alt='Лес под красным.'
				/>

				<figcaption>Красиво, не правда ли?</figcaption>
			</figure>

			<figure>
				<img
					src={require("../../resources/Images/UnderUniverse.png")}
					alt='Под вселенной.'
				/>

				<figcaption>
					"Мы все ещё на том же куске Земли, летящем в пространстве
					бесконечного космоса".
				</figcaption>
			</figure>
		</aside>
	);
}

export default RightSideGalleryElements;
