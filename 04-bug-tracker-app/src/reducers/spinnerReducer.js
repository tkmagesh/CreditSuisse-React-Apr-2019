function spinnerReducer(currentState = 0, action){
	if (action.type === 'INCREMENT') return currentState + action.payload;
	if (action.type === 'DECREMENT') return currentState - action.payload;
	if (action.type === 'DOUBLE_INCREMENT') return currentState * 2;
	if (action.type === 'DOUBLE_DECREMENT') return currentState / 2;
	return currentState;
}
export default spinnerReducer;