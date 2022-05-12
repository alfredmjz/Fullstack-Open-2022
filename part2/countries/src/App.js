/** @format */

import { useEffect, useState } from "react";
import Search from "./components/Search";
const axios = require("axios").default;

function App() {
	const [countries, setCountries] = useState([]);
	const [newSearch, setSearch] = useState("");

	const dict = countries.map((country) => ({
		name: country.name.common,
		id: country.cca2,
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
				<Search countries={dict} newSearch={newSearch} setSearch={setSearch} />
			</section>
		</div>
	);
}

export default App;
