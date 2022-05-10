/** @format */

import React from "react";

const Numbers = ({ people, filter }) => {
	const applyFilter = (filter) => {
		if (filter !== "") {
			return people
				.filter((person) => person.name.toUpperCase().indexOf(filter.toUpperCase()) > -1)
				.map((person) => (
					<p key={person.id}>
						{person.name} {person.number}
					</p>
				));
		}

		return people.map((person) => (
			<p key={person.id}>
				{person.name} {person.number}
			</p>
		));
	};

	return <>{applyFilter(filter)}</>;
};

export default Numbers;
