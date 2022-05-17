/** @format */

import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
	const promise = axios.get(baseUrl);
	return promise.then((res) => res.data);
};

const create = (newObject) => {
	const promise = axios.post(baseUrl, newObject);
	return promise.then((res) => res.data);
};

const update = (newObject, id) => {
	const promise = axios.put(`${baseUrl}/${id}`, newObject);
	return promise.then((res) => res.data);
};

const remove = (targetObject, id) => {
	const promise = axios.delete(`${baseUrl}/${id}`, JSON.stringify(targetObject), {
		headers: {
			"Content-Type": "application/json",
		},
	});
	return promise.then((res) => res.status);
};

export default { getAll, create, remove, update };
