/** @format */

import React from "react";
import Part from "./Part";

const Header = ({ course }) => <h1>{course}</h1>;

const Content = ({ parts }) => {
	return (
		<div>
			<Part part={parts} />
		</div>
	);
};

const Total = ({ parts }) => {
	const exercises = parts.map((part) => part.exercises);
	const sum = exercises.reduce((prev, cur) => {
		prev += cur;
		return prev;
	});

	return (
		<p>
			<strong>total of {sum} exercises</strong>
		</p>
	);
};

const Course = ({ course }) => {
	return (
		<div>
			{course.map((obj) => {
				return (
					<div key={obj.id}>
						<Header course={obj.name} />
						<Content parts={obj.parts} />
						<Total parts={obj.parts} />
					</div>
				);
			})}
		</div>
	);
};

export default Course;
