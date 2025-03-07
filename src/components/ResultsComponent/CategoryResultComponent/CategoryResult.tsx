import './CategoryResult.style.css';

export default function CategoryResult(props: {category: string, score: number, icon: string}) {
	return (
		<div className={`category-result category-${props.category.toLowerCase()}-result`}>
			<div className="category-id">
				<img className="category-icon" src={"/src".concat(props.icon)} alt={`${props.category}'s icon`} width="20px" height="20px" />
				<span className="category-name">{props.category}</span>
			</div>
			<div className="category-scorebox">
				<span className="category-score">{props.score}</span>/<span className="category-score-max">100</span> 
			</div>
		</div>
	);
};