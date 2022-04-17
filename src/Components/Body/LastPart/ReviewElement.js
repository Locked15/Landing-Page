import React from "react";
import "../Styles/general.css";

/**
 * Функция, создающая один элемент 'Отзыв'.
 * Вызывается блоком 'Отзывы' для динамического заполнения по данным массива.
 *
 * @param {Array} props Список с данными обзоров.
 * @param {String} props.review.name Имя человека, оставившего отзыв.
 * @param {String} props.review.date Строковое представление даты оставления отзыва.
 * @param {String} props.review.content Содержимое отзыва.
 *
 * @returns Элемент 'Отзыв', заполненный по указанным параметрам.
 */
function ReviewElement({ props }) {
	return (
		<div>
			<table className='review-table'>
				<tr>
					<td>{props.name}</td>

					<td>{props.date}</td>
				</tr>

				<tr>
					<td colSpan={2}>{props.content}</td>
				</tr>
			</table>
		</div>
	);
}

export default ReviewElement;
