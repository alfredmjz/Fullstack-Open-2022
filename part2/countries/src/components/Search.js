/** @format */

import React from "react";
//https://restcountries.com/v3.1/all

const Search = ({ countries, newSearch, setSearch }) => {
	const printLanguage = (language) => {
		let i = 0;
		const values = Object.values(language);
		return values.map((lang) => <li key={i++}>{lang}</li>);
	};
	const filter = (event) => {
		const input = event.target.value;
		setSearch(input);
	};
	const result = (input) => {
		if (input === "") {
			return;
		}

		const filtered = countries
			.filter((country) => country.name.toUpperCase().indexOf(input.toUpperCase()) > -1)
			.sort((c1, c2) => c1 > c2);

		if (filtered.length > 10) return <p>Too many matches, specify another filter</p>;
		else if (filtered.length === 1) {
			return (
				<div>
					<h1>{filtered[0].name}</h1>
					<p>capital {filtered[0].capital}</p>
					<p>area {filtered[0].area}</p>
					<br />
					<h3>languages:</h3>
					<ul>{printLanguage(filtered[0].languages)}</ul>
					<img style={{ width: "200px", height: "100px" }} src={filtered[0].flag} />
				</div>
			);
		}

		return filtered.map((country) => <p key={country.id}>{country.name}</p>);
	};

	return (
		<>
			<input onChange={filter} value={newSearch} />
			{result(newSearch)}
		</>
	);
};
export default Search;
