/** @format */

import React from "react";
import { useState } from "react";

import Display from "./Display";

const Result = ({ filter }) => {
	const [show, setShow] = useState("");

	const showDetail = (event) => {
		event.preventDefault();
		const value = event.target.value;
		show === value ? setShow("") : setShow(value);
	};

	const listResults = filter.map((country) => (
		<p key={country.id}>
			{country.name}{" "}
			<button value={country.name} onClick={showDetail}>
				show
			</button>
		</p>
	));

	if (filter.length > 10) {
		return <p>Too many matches, specify another filter</p>;
	}

	return (
		<div>
			{listResults}
			<Display data={filter} show={show} />
		</div>
	);
};

export default Result;
