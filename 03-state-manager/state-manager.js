var SM = (function(){
	var _currentState = undefined,
		_reducer = null,
		_listeners = [],
		__init_action = '@@INIT/ACTION';

	function getState(){
		return _currentState;
	}

	function subscribe(listenerFn){
		_listeners.push(listenerFn);
	}

	function triggerChange(){
		_listeners.forEach(listenerFn => listenerFn());
	}

	function dispatch(action){
		var newState = _reducer(_currentState, action);
		if (newState === _currentState) return;
		_currentState = newState;
		triggerChange();
	}

	function createStore(reducer){
		_reducer = reducer;
		_currentState = _reducer(_currentState, __init_action);
		let store = { getState, subscribe, dispatch };
		return store;
	}

	function bindActionCreators(actionCreators, dispatch){
		let actionDispatchers = {};
		for(let key in actionCreators){
			actionDispatchers[key] = function(...args){
				let action = actionCreators[key](...args);
				dispatch(action);
			}
		}
		return actionDispatchers;
	}

	return { createStore, bindActionCreators };
})();