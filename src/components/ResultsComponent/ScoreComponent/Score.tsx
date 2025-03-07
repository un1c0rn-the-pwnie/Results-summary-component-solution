
import './Score.style.css';

export default function Score() {
	return (
		<section className="score-section">
			<h3 className="score-result-heading">Your Result</h3>
			<div className="score-circle-out-of">
				<span className="score-value">76</span>
				<span className="score-max">of 100</span>
			</div>
			<h2 className="score-word">Great</h2>
			<p className="score-percentage-description">
				You scored higher than 65% of the people who have taken these tests.
			</p>
		</section>
	);
};