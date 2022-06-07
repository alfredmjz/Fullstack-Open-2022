/** @format */

import React from "react";
import { useState } from "react";
import server from "../services/server";
import Notification from "./Notification";

const Form = ({ people, newID, updatePerson, updateID }) => {
	const [newName, setName] = useState("");
	const [newNumber, setNumber] = useState("");
	const [style, updateStyle] = useState("notification");
	const [text, updateText] = useState("");

	const exist = () => {
		const copy = [...people];
		let target = people.find((person) => person.name === newName && person.number !== newNumber);

		if (target) {
			const msg = `${target.name} is already added to phonebook, replace the old number with a new one?`;
			if (window.confirm(msg)) {
				target.number = newNumber;
			} else target = null;
		} else {
			target = {
				name: newName,
				number: newNumber,
				id: newID,
			};
			console.log("create new ID: ", newID);
		}
		const idx = people.indexOf(target);
		idx === -1 ? copy.push(target) : (copy[idx] = target);
		return [copy, target, idx];
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		updateStyle("notification");

		const newArray = people.find(
			(person) => person.name === newName && person.number === newNumber
		);
		if (newArray) {
			alert(`${newName} is already added to phonebook`);
			event.target.value = "";
			return;
		} else if (newNumber === "") {
			alert("Number is missing!");
			event.target.value = "";
			return;
		}

		const [copy, newEntry, id] = exist();
		if (!newEntry) return;

		if (id !== -1) {
			server
				.update(newEntry, newEntry.id)
				.then(() => {
					updateText(`Updated ${newEntry.name}'s number`);
					updatePerson(copy);
					updateID(newEntry.id);
					updateStyle(style.concat(" green"));
				})
				.catch(() => {
					updateText(`Information of ${newEntry.name} has already been removed from the server`);
					updateStyle(style.concat(" red"));
				});
		} else {
			server
				.create(newEntry)
				.then(() => {
					updateText(`Added ${newEntry.name}`);
					updatePerson(copy);
					updateID(newEntry.id);
					updateStyle(style.concat(" green"));
				})
				.catch(() => {
					updateText(`${newEntry.name} is not added. Name must be longer than 3 characters`);
					updateStyle(style.concat(" red"));
				});
		}

		setName("");
		setNumber("");
	};

	return (
		<>
			<Notification style={style} msg={text} updateText={updateText} />
			<form>
				<div>
					name: <input onChange={(e) => setName(e.target.value)} value={newName} />
				</div>
				<div>
					number: <input onChange={(e) => setNumber(e.target.value)} value={newNumber} />
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
