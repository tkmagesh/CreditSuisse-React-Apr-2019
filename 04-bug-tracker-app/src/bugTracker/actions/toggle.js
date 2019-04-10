import bugApi from '../services/bugApi';

export function toggle(bugToToggle){
	return async function(dispatch){
		let toggledBugData = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
		let toggledBug = await bugApi.save(toggledBugData);
		let action = { type : 'REPLACE', payload : toggledBug };
		dispatch(action);
	}
}