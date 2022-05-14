/** @format */

import React from "react";

const Display = ({ data, show }) => {
	const currentData = data.find((el) => el.name === show);
	const idx = data.indexOf(currentData);

	if (idx === -1) {
		return;
	}

	const printLanguage = (language) => {
		let i = 0;
		const values = Object.values(language);
		return values.map((lang) => <li key={i++}>{lang}</li>);
	};

	return (
		<div>
			<h1>{data[idx].name}</h1>
			<p>capital {data[idx].capital}</p>
			<p>area {data[idx].area}</p>
			<br />
			<h3>languages:</h3>
			<ul>{printLanguage(data[idx].languages)}</ul>
			<img style={{ width: "200px", height: "100px" }} src={data[idx].flag} alt='flag of country' />
		</div>
	);
};

export default Display;
