/** @format */

import React from "react";
import { useState, useEffect } from "react";
const axios = require("axios");

const Weather = ({ country }) => {
	const [newWeather, setWeather] = useState([]);
	const [statusRdy, setStatusRdy] = useState(false);
	const api_key = process.env.REACT_APP_API_KEY;

	useEffect(() => {
		axios
			.get(`http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${country}`)
			.then((res) => {
				const weatherData = res.data;
				setWeather(weatherData);
				setStatusRdy(true);
			});
	}, [country]);

	if (statusRdy) {
		return (
			<div>
				<h3>Weather in {country}</h3>
				<p>temperate {newWeather.current.temp_c} Celsius</p>
				<img src={newWeather.current.condition.icon} alt='weather' />
				<p>wind {(newWeather.current.wind_mph * 0.44704).toFixed(2)} m/s</p>
			</div>
		);
	}
};

export default Weather;
