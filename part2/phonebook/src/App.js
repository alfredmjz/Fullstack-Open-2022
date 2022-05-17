/** @format */

import { useEffect, useState } from "react";
import Form from "./components/Form";
import Numbers from "./components/Numbers";
import Search from "./components/Search";
import server from "./services/server";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [id, setID] = useState(1);
	const [newFilter, setFilter] = useState("");

	useEffect(() => {
		server
			.getAll()
			.then((returned) => {
				const lastIdx = returned.length - 1;
				setPersons(returned);
				setID(returned[lastIdx].id);
			})
			.catch((err) => console.log("No data. Add new data"));
	}, [id]);

	return (
		<div>
			<section>
				<h2>Phonebook</h2>
				<p>filter shown with a </p>
				<Search filter={newFilter} updateFilter={setFilter} />
			</section>
			<section>
				<h2>add a new</h2>

				<Form people={persons} newID={id} updatePerson={setPersons} updateID={setID} />
			</section>
			<section>
				<h2>Numbers</h2>
				<Numbers people={persons} filter={newFilter} updatePerson={setPersons} />
			</section>
		</div>
	);
};

export default App;
