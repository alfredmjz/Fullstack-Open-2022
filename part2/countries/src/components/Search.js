/** @format */

import React from "react";

const Search = ({ countries, newSearch, setSearch, setFilter }) => {
	const filter = (event) => {
		const input = event.target.value;
		if (input === "") {
			return;
		}
		setSearch(input);

		const filtered = countries
			.filter((country) => country.name.toUpperCase().indexOf(input.toUpperCase()) > -1)
			.sort((c1, c2) => c1 > c2);
		setFilter(filtered);
	};

	return (
		<>
			<input onChange={filter} value={newSearch} />
		</>
	);
};
export default Search;
