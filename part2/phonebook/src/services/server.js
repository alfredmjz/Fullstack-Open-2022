/** @format */

import axios from "axios";
const baseUrl = "/api/persons";

const getAll = () => {
	const promise = axios.get(baseUrl);
	console.log("getAll");
	return promise.then((res) => res.data);
};

const create = (newObject) => {
	const promise = axios.post(baseUrl, newObject);
	console.log("create");
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
	console.log("remove");
	return promise.then((res) => res.status);
};

const exported = { getAll, create, remove, update };
export default exported;
