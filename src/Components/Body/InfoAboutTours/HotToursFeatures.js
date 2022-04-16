import React from "react";
import "../../Body/Styles/general.css";

function HotToursFeatures() {
	return (
		<div id="features">
			<h3 className='header-text'>
				Особенности <i>горящих</i> путевок
			</h3>

			<p>
				Наша компания предлагает особый вариант путевок для туристов.
				'Горящие' путевки имеют свои особенности.
				<br />
				Сперва разберем плюсы:
			</p>
			<ul className='features-list' style={{ color: "green" }}>
				<li>
					Низкая цена
					<br />
					Не все туристы имеют возможность заранее спланировать
					поездку. Иногда решение об отпуске принимается спонтанно, и
					времени на подготовку путешествия попросту не остается. К
					тому же, в последний момент практически невозможно подыскать
					авиабилеты в нужном направлении по скидке и выгодные условия
					проживания в отелях. В этом случае единственным разумным
					вариантом остается горящий тур, который позволяет не просто
					отдохнуть по адекватной цене, но и сэкономить до половины от
					первоначальной стоимости путевки.
				</li>

				<li>
					Возможность отправиться в поездку немедленно
					<br />
					Между покупкой туристического пакета и непосредственным
					путешествием проходит совсем мало времени. Таким образом,
					туристу не приходится томиться в ожидании поездки, а можно
					наслаждаться отдыхом и новыми впечатлениями практически
					сразу.
				</li>
			</ul>

			<p>А теперь рассмотрим минусы подобных путевок:</p>
			<ul className='features-list' style={{ color: "red" }}>
				<li>
					Необходимость подготовиться к путешествию очень быстро
					<br />В некоторых случаях на сборы остается всего несколько
					часов.
				</li>

				<li>
					Невозможность вернуть приобретенные туры обратно
					<br />В отличие от раннего бронирования, при отказе от
					горящей путевки деньги туристу не возвращаются.
				</li>

				<li>
					Отсутствие возможности выбора
					<br />
					Определенного типа отеля, даты и времени вылета самолета, а
					также количества дней, которые можно будет провести на
					отдыхе в другой стране. Это связано с тем, что предлагаемый
					горящий тур уже предварительно скомплектован туроператором и
					не подлежит изменению.
				</li>

				<li>
					Сезонный фактор
					<br />
					Поскольку в пик сезона спрос на подобные туры значительно
					возрастает, подобрать подходящий вариант бывает очень
					сложно. Лучше всего приобретать горящие путевки, когда на
					туристическом рынке наблюдается снижение спроса.
				</li>
			</ul>
		</div>
	);
}

export default HotToursFeatures;