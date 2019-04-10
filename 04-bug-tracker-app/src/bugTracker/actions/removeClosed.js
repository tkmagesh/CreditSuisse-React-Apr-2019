export function removeClosed(bugs){
	let closedBugs = bugs.filter(bug => bug.isClosed);
	let action = { type : 'REMOVE', payload : closedBugs};
	return action;
}