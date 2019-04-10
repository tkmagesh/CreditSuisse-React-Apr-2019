function bugsReducer(currentState = [], action){
	if (action.type === 'ADD_NEW'){
		let newBug = action.payload;
		let newState = [...currentState, newBug];
		return newState;
	}
	if (action.type === 'REPLACE'){
		let bugToReplace = action.payload;
		let newState = currentState.map(bug => bug.id === bugToReplace.id ?  bugToReplace : bug);
		return newState;
	}
	if (action.type === 'REMOVE'){
		let bugToRemove = action.payload;
		let newState = currentState.filter(bug => bug.id !== bugToRemove.id);
		return newState;
	}
	if (action.type === 'INITIALIZE'){
		let newState = action.payload;
		return newState;
	}
	return currentState;
}
export default bugsReducer