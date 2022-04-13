import React from "react";
import './Styles/style.css';

function LeftSidesGalleryElement() {
	return (
		<aside className="aside-block gallery">
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
		</aside>
	);
}

export default LeftSidesGalleryElement;
