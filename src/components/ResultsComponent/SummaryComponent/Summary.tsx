import data from '@data/data.json';
import CategoryResult from '../CategoryResultComponent/CategoryResult';

import './Summary.style.css';

export default function Summary() {
	return (
		<section className="summary-section">
			<h3 className="summary-heading">Summary</h3>
			<div className="category-section-results">
				{data.categories.map((value, index) => (
					<CategoryResult key={index} 
									category={value.category} 
									score={value.score}
									icon={value.icon} />
				))}
			</div>
			<div className="btn-container">
				<button className="btn-continue">Continue</button>
			</div>
		</section>
	);
}