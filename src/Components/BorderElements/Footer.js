import React from "react";
import "../../index.css";

function Footer() {
	return (
		<footer>
			<div className='hover-button'></div>

			<div className='main-container'>
				<div>
					<div className='general-text'>
						<div
							className='text'
							style={{
								textAlign: "center",
								marginTop: "0.25%",
								display: "inline-block",
							}}
						>
							<span>
								<button
									className='go-top-button'
									onClick={scrollToTop}
								>
									&#8593;
								</button>
							</span>
						</div>

						<div
							className='text'
							style={{
								float: "right",
								marginTop: "2.5%",
								marginRight: "5%",
							}}
						>
							<a
								title='Нажмите для получения дополнительной информации.'
								onClick={getInfoAboutCompany}
							>
								&copy; Компания 'Путешествуй просто'.
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

function scrollToTop() {
	window.scrollTo({ top: 0, behavior: "smooth" });
}

function getInfoAboutCompany() {
	alert(
		"Адрес: г. Томск, ул. Фрунце 39;\n" +
			"Телефон: 8-823-122-45-23;\n" +
			"E-Mail: tourTomsk@ya.ru"
	);
}

export default Footer;
