export function addNew(newBugName){
	let newBug = { 
		name : newBugName,
		isClosed : false
	};
	let action = { type : 'ADD_NEW', payload : newBug };
	return action;
}

