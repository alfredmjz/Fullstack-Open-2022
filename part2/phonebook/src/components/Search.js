/** @format */

import React from "react";

const Search = ({ filter, updateFilter }) => {
	const search = (event) => {
		const input = event.target.value;
		updateFilter(input);
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<p>filter shown with a </p>
			<form>
				<input onChange={search} value={filter} />
			</form>
		</div>
	);
};

export default Search;
