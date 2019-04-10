import bugApi from '../services/bugApi';

export function addNew(newBugName){
	return async function(dispatch){
		let newBugData = { 
			id : 0,
			name : newBugName,
			isClosed : false
		};
		let newBug = await bugApi.save(newBugData);
		let action = { type : 'ADD_NEW', payload : newBug };
		dispatch(action);
	}
}

