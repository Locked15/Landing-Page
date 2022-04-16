import React from "react";
import ConsultantsGallery from './ConsultantsGallery';
import "../Styles/general.css";

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

            <p className="clarification-text">
            <ol>
                <li id="firstRemark" value={1}>За использование услуг консультантов может взиматься дополнительная плата;</li>
                <li id="secondRemark" value={2}>Кроме вопросов, определенных в сертификатах №1.9.83 — №1.9.87 и их уточнениях.</li>
            </ol>
            </p>

            <ConsultantsGallery />
		</div>
	);
}

function toFirstRemark() {
    selectContent(document.getElementById('firstRemark'));
}

function toSecondRemark() {
    selectContent(document.getElementById('secondRemark'));
}

function selectContent(toSelect) {
    var selected = window.getSelection();

    selected.selectAllChildren(toSelect);
}

export default Consultants;
