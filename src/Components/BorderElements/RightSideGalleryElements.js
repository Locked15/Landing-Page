import React from 'react';

function RightSideGalleryElements() {
    return (
		<aside id='rightPanel' className="aside-block gallery border-left">
			<figure>
				<img src={require('../../resources/Images/1379633194_orel.jpg')} alt='Орёл.'/>

				<figcaption>Орёл.</figcaption>
			</figure>

			<figure>
                <img src={require('../../resources/Images/4995833-plyazh-shezlongi-okean-rayskoe-mesto-letniy-otdyh-ekzotika-otpusk-uspokaivayuschie-iyul.jpg')} 
                     alt='Пляжный курорт.'/>

                <figcaption>Пляжный курорт.</figcaption>
			</figure>

			<figure>
				<img src={require('../../resources/Images/c7d29a0cd984599082b8fa93cb0097ca.jpg')} alt='Новый год на курорте.'/>

				<figcaption>Новый год — На курорт.</figcaption>
			</figure>

			<figure>
				<img src={require('../../resources/Images/summer-beach-photo-2560x1600-1003096.jpg')} alt='Летний курорт.'/>

				<figcaption>Лето — лучшее время для отдыха на курорте.</figcaption>
			</figure>

			<figure>
				<img src={require('../../resources/Images/111-1-1.jpg')} alt='Лодочный курорт.'/>

				<figcaption>Здесь много лодок!</figcaption>
			</figure>                        
		</aside>
	);
}

export default RightSideGalleryElements;