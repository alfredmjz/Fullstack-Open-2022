/** @format */

import React from "react";
import server from "../services/server";

const Numbers = ({ people, filter, updatePerson }) => {
	const removeRow = (event, name) => {
		event.preventDefault();
		if (window.confirm(`Delete ${name}?`)) {
			const removedList = people.find((el) => el.name === name);
			const id = removedList.id;

			server.remove(removedList, id).then((status) => {
				if (status) {
					const newData = people.filter((el) => el.name !== name);
					updatePerson(newData);
				}
			});
		}
	};
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
				{person.name} {person.number}{" "}
				<button onClick={(event) => removeRow(event, person.name)}> delete </button>
			</p>
		));
	};

	return <>{applyFilter(filter)}</>;
};

export default Numbers;
