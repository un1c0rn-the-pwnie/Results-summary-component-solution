import LayoutResultsCard from '@layouts/ResultsCard/layout';

import Score from './ScoreComponent/Score';
import Summary from './SummaryComponent/Summary';

export default function Results() {
	return (
		<LayoutResultsCard>
			<Score />
			<Summary />
		</LayoutResultsCard>
	);
};