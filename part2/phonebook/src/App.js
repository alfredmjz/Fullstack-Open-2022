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
			<Search filter={newFilter} updateFilter={setFilter} />
			<Form
				people={persons}
				newPerson={newName}
				newNumber={newNumber}
				updatePerson={setPersons}
				updateText={setNewName}
				updateNumber={setNewNumber}
			/>
			<Numbers people={persons} filter={newFilter} />
		</div>
	);
};

export default App;
