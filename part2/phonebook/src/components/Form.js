/** @format */

import React from "react";
import server from "../services/server";

const Form = ({ people, newID, newPerson, newNumber, updateText, updateNumber, updatePerson }) => {
	const handlePersonChange = (event) => updateText(event.target.value);

	const handlenNumberChange = (event) => updateNumber(event.target.value);

	const exist = () => {
		const target = people.find(
			(person) => person.name === newPerson && person.number !== newNumber
		);

		if (target) {
			const msg = `${target.name} is already added to phonebook, replace the old number with a new one?`;
			if (window.confirm(msg)) {
				target.number = newNumber;
			}
		} else
			target = {
				name: newPerson,
				number: newNumber,
				id: newID + 1,
			};

		const idx = people.indexOf(target);
		const ret = people;
		idx === -1 ? ret.append(target) : (ret[idx] = target);
		return people;
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const newArray = people.find(
			(person) => person.name === newPerson && person.number === newNumber
		);
		if (newArray) {
			alert(`${newPerson} is already added to phonebook`);
			event.target.value = "";
			return;
		} else if (newNumber === "") {
			alert("Number is missing!");
			event.target.value = "";
			return;
		}

		const personObj = exist();
		server.create(personObj).then(() => {
			updatePerson(personObj);
			updateText("");
			updateNumber("");
		});
	};

	return (
		<>
			<form>
				<div>
					name: <input onChange={handlePersonChange} value={newPerson} />
				</div>
				<div>
					number: <input onChange={handlenNumberChange} value={newNumber} />
				</div>
				<div>
					<button onClick={handleSubmit} type='submit'>
						add
					</button>
				</div>
			</form>
		</>
	);
};

export default Form;
