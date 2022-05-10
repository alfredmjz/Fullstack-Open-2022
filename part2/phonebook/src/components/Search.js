/** @format */

import React from "react";

const Search = ({ filter, updateFilter }) => {
	const search = (event) => {
		const input = event.target.value;
		updateFilter(input);
	};

	return (
		<>
			<form>
				<input onChange={search} value={filter} />
			</form>
		</>
	);
};

export default Search;
