import React from "react";
import './Styles/style.css';

function LeftSidesGalleryElement() {
	return (
		<aside id="leftPanel" className="aside-block gallery border-right">
			<figure>
				<img src={require('../../resources/Images/CrimeaTours.jpg')} alt='Крым.'/>

				<figcaption>Крым.</figcaption>
			</figure>

			<figure>
                <img src={require('../../resources/Images/SochiPhoto.jpg')} alt='Сочи.'/>

                <figcaption>Сочи.</figcaption>
			</figure>

			<figure>
				<img src={require('../../resources/Images/Spain-1024x768.jpeg')} alt='Испания.'/>

				<figcaption>Испания.</figcaption>
			</figure>

			<figure>
				<img src={require('../../resources/Images/HotTous.jpg')} alt='Курорт.'/>

				<figcaption>Курорт.</figcaption>
			</figure>

			<figure>
				<img src={require('../../resources/Images/Rossiya-1.jpg')} alt='Москва.'/>

				<figcaption>Москва.</figcaption>
			</figure>

			<figure>
				<img src={require('../../resources/Images/goryashchiye-tury-na-Kubu.jpg')} alt='Куба.'/>

				<figcaption>Куба.</figcaption>
			</figure>

			<figure>
				<img src={require('../../resources/Images/e644b78ea1be3d6b00d6a109f5621f8b.jpg')} alt='Неожиданность.'/>

				<figcaption>Путешествия могут принести множество неожиданностей.</figcaption>
			</figure>               
		</aside>
	);
}

export default LeftSidesGalleryElement;
