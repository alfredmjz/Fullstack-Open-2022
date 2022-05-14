/** @format */

import React from "react";

const Result = ({ filter, show, setShow }) => {
	const showDetail = (event) => {
		event.preventDefault();
		const value = event.target.value;
		show === value ? setShow("") : setShow(value);
	};

	if (filter.length > 10) {
		return <p>Too many matches, specify another filter</p>;
	}
	return filter.map((country) => (
		<p key={country.id}>
			{country.name}{" "}
			<button value={country.name} onClick={showDetail}>
				show
			</button>
		</p>
	));
};

export default Result;
