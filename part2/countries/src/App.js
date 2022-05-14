/** @format */

import { useEffect, useState } from "react";
import Search from "./components/Search";
import Result from "./components/Result";
import Display from "./components/Display";
const axios = require("axios").default;

function App() {
	const [countries, setCountries] = useState([]);
	const [newSearch, setSearch] = useState("");
	const [newFilter, setFilter] = useState([]);
	const [show, setShow] = useState("");

	const dict = countries.map((country, index) => ({
		name: country.name.common,
		id: index,
		capital: country.capital,
		area: country.area,
		languages: country.languages,
		flag: country.flags.svg,
	}));

	useEffect(() => {
		axios.get("https://restcountries.com/v3.1/all").then((res) => {
			const allCountries = res.data;
			setCountries(allCountries);
		});
	}, []);

	return (
		<div>
			<section>
				<span style={{ marginRight: "1em" }}>find countries</span>
				<Search
					countries={dict}
					newSearch={newSearch}
					setSearch={setSearch}
					setFilter={setFilter}
				/>
			</section>
			<section>
				<Result filter={newFilter} show={show} setShow={setShow} />
				<Display data={newFilter} show={show} />
			</section>
		</div>
	);
}

export default App;
