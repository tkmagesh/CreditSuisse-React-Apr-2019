function bugsReducer(currentState = [], action){
	if (action.type === 'ADD_NEW'){
		let newBug = action.payload;
		let newState = [...currentState, newBug];
		return newState;
	}
	if (action.type === 'REPLACE'){
		let { oldBug, newBug } = action.payload;
		let newState = currentState.map(bug => bug === oldBug ?  newBug : bug);
		return newState;
	}
	if (action.type === 'REMOVE'){
		let bugsToRemove = action.payload;
		let newState = currentState.filter(bug => !bugsToRemove.includes(bug));
		return newState;
	}
	return currentState;
}
export default bugsReducer