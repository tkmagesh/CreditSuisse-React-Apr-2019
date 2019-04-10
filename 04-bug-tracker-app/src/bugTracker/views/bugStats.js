import React from 'react';

let BugStats = ({bugs}) => {
	let closedCount = bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
	return (
		<section className="stats">
			<span className="closed">{closedCount}</span>
			<span> / </span>
			<span>{bugs.length}</span>
		</section>
	)
}

export default BugStats;