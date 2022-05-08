/** @format */

import { useState } from "react";

const Statistics = ({ good, neutral, bad }) => {
	const score = {
		good: good * 1,
		neutral: 0,
		bad: bad * -1,
	};
	const totalCount = good + neutral + bad;
	const totalScore = score.good + score.bad;
	const avgScore = Math.abs(totalScore / totalCount);
	const posFeedback = (score.good / totalCount) * 100;

	if (totalCount === 0) {
		return <p>No feedback given</p>;
	}
	return (
		<div>
			<StatisticLine text='good' value={good} />
			<StatisticLine text='neutral' value={neutral} />
			<StatisticLine text='bad' value={bad} />
			<StatisticLine text='all' value={totalCount} />
			<StatisticLine text='average' value={avgScore.toFixed(12)} />
			<StatisticLine text='positive' value={posFeedback.toFixed(12) + "%"} />
		</div>
	);
};

const StatisticLine = ({ text, value }) => (
	<p>
		{text} {value}
	</p>
);

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	return (
		<div>
			<h1>give feedback</h1>
			<button onClick={() => setGood(good + 1)}>good</button>
			<button onClick={() => setNeutral(neutral + 1)}>neutral</button>
			<button onClick={() => setBad(bad + 1)}>bad</button>

			<h1>statistics</h1>
			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
	);
};

export default App;
