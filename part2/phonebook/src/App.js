/** @format */

import { useState } from "react";
import Form from "./components/Form";
import Numbers from "./components/Numbers";
import Search from "./components/Search";

const App = () => {
	const [persons, setPersons] = useState([{ id: 1, name: "Arto Hellas", number: "040-123456" }]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [newFilter, setFilter] = useState("");

	return (
		<div>
			<section>
				<h2>Phonebook</h2>
				<p>filter shown with a </p>
				<Search filter={newFilter} updateFilter={setFilter} />
			</section>
			<section>
				<h2>add a new</h2>
				<Form
					people={persons}
					newPerson={newName}
					newNumber={newNumber}
					updatePerson={setPersons}
					updateText={setNewName}
					updateNumber={setNewNumber}
				/>
			</section>
			<section>
				<h2>Numbers</h2>
				<Numbers people={persons} filter={newFilter} />
			</section>
		</div>
	);
};

export default App;
