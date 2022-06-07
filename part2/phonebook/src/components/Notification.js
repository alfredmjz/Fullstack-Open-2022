/** @format */

import "../index.css";

const Notification = ({ style, msg, updateText }) => {
	if (msg === "") return;

	setTimeout(() => {
		clearTimeout();
		updateText("");
		return;
	}, 8000);

	return (
		<div className={style}>
			<p className='notification-text'>{msg}</p>
		</div>
	);
};

export default Notification;
