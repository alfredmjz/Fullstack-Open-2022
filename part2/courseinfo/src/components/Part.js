/** @format */

import React from "react";

const Part = ({ part }) =>
	part.map((attr) => (
		<p key={attr.id}>
			{attr.name} {attr.exercises}
		</p>
	));

export default Part;
