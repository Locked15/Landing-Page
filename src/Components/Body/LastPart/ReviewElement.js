import React from "react";
import '../Styles/general.css';

function ReviewElement({ props }) {
	return (
		<div>
			<table className="review-table">
                <tr>
                    <td>
                        {props.name}
                    </td>

                    <td>{props.date}</td>
                </tr>

                <tr>
                    <td colSpan={2}>
                        {props.content}
                    </td>
                </tr>
            </table>
		</div>
	)
}

export default ReviewElement;
