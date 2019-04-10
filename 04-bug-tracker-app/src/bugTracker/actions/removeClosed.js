import bugApi from '../services/bugApi';

export function removeClosed(){

	return function(dispatch, getState){
		let bugs = getState().bugsData;
		let closedBugs = bugs.filter(bug => bug.isClosed);
		closedBugs.forEach(async closedBug => {
			await bugApi.remove(closedBug);
			let action = { type : 'REMOVE', payload : closedBug};
			dispatch(action);
		});
	}
	
}