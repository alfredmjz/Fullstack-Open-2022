/** @format */

import React from "react";

const Form = ({ people, newPerson, newNumber, updateText, updateNumber, updatePerson }) => {
	const handlePersonChange = (event) => updateText(event.target.value);
	const handlenNumberChange = (event) => updateNumber(event.target.value);

	const handleSubmit = (event) => {
		event.preventDefault();

		const newArray = people.filter((person) => person.name === newPerson);
		if (newArray.length > 0) {
			alert(`${newPerson} is already added to phonebook`);
			event.target.value = "";
			return;
		} else if (newNumber === "") {
			alert("Number is missing!");
			event.target.value = "";
			return;
		}

		const personObj = {
			name: newPerson,
			number: newNumber,
			id: people.length + 1,
		};

		updatePerson(people.concat(personObj));
		updateText("");
		updateNumber("");
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
