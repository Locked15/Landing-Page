import React from "react";
import ConsultantsGallery from './ConsultantsGallery';
import "../Styles/general.css";

/**
 * Функция, создающая блок 'Консультанты'.
 * В данном функции создается только описание консультантов и примечания.
 * Все прочее (галерея) создается функцией "ConsultantsGallery".
 * 
 * @returns Блок 'Консультанты'.
 */
function Consultants() {
	return (
		<div>
			<h3 className='header-text'>Консультанты</h3>
			<p>
				Чтобы разобраться с возможно возникшими у Вас вопросами, Вы
				можете обратиться<sup className="remark-text" onClick={toFirstRemark}>1</sup> к одному из консультантов компании.
				<br />
				Все они — высококвалифицированные и разбирающиеся в данной теме
				специалисты. Мы уверены, они смогут решить любой<sup className="remark-text" onClick={toSecondRemark}>2</sup> Ваш вопрос,
				связанный с нашей компанией и предоставляемыми нами услугами.
			</p>

			<ol className="clarification-text">
                <li id="firstRemark" value={1}>За использование услуг консультантов может взиматься дополнительная плата;</li>
                <li id="secondRemark" value={2}>Кроме вопросов, определенных в сертификатах №1.9.83 — №1.9.87 и их уточнениях.</li>
            </ol>

            <ConsultantsGallery />
		</div>
	);
}

/**
 * Получает элемент с текстом первого примечания по его ID и отправляет его в функцию 'selectContent'.
 */
function toFirstRemark() {
    selectContent(document.getElementById('firstRemark'));
}

/**
 * Получает элемент с текстом второго примечания по его ID и отправляет его в функцию 'selectContent'.
 */
function toSecondRemark() {
    selectContent(document.getElementById('secondRemark'));
}

/**
 * 'Общая' функция выделения примечания.
 * Не только выделяет текст самого примечания, но ещё и прокручивает экран до его позиции.
 * 
 * @param {HTMLObjectElement} toSelect Примечание, текст которого нужно выбрать и прокрутить до его позиции. 
 */
function selectContent(toSelect) {
	toSelect.scrollIntoView({ behavior: 'smooth' });

    var selected = window.getSelection();
    selected.selectAllChildren(toSelect);
}

export default Consultants;
